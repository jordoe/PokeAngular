import { Pokemon, PokemonDetails } from '../Utils/interfaces';

import { Injectable } from '@angular/core';
import {
    HttpClient,
    HttpHeaders,
    HttpErrorResponse,
} from '@angular/common/http';

import { Observable, of, throwError, pipe, forkJoin } from 'rxjs';
import {
    mergeMap,
    switchMap,
    retry,
    map,
    catchError,
    filter,
    scan,
    tap,
} from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class PokedexService {
    public pokemonList: any[] = [];
    private data: Observable<any> = undefined;

    constructor(private http: HttpClient) {
        if (!window.localStorage.getItem('pokemonFullList')) {
            window.localStorage.setItem(
                'pokemonFullList',
                JSON.stringify(this.pokemonList)
            );
        }
    }

    private getPokemonListData() {
        if (this.data === undefined) {
            const url = 'http://pokeapi.co/api/v2/pokemon/?limit=811';
            this.data = this.http.get(url);
            return this.data;
        } else {
            return this.data;
        }
    }

    public getPokemonList(): Observable<any> {
        const data = this.getPokemonListData();
        return data.pipe(
            map((res: any) => {
                return res.results.reduce((result, element, index) => {
                    if (element) {
                        const newPokemon: Pokemon = {
                            name: element.name,
                            id: index + 1,
                            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index +
                                1}.png`,
                        };
                        result.push(newPokemon);
                    }
                    return result;
                }, []);
            })
        );
    }
    public getPokemonByType(type: string): Observable<any> {
        if (type !== 'all') {
            const url = 'http://pokeapi.co/api/v2/type/' + type + '/';
            const data = this.http.get(url);
            return data.pipe(
                map((res: any) => {
                    return res.pokemon.map((result, index) => ({
                        name: result.pokemon.name,
                        id: result.pokemon.url.match(/\/([^\/]+)\/?$/)[1],
                        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                            result.pokemon.url.match(/\/([^\/]+)\/?$/)[1]
                        }.png`,
                    }));
                })
            );
        } else {
            return this.getPokemonList();
        }
    }
    /*
        id parameter can be the name or the id number of pokemon
     */
    public getPokemonDetailsByName(id: string | number): Observable<any> {
        const pokemon: PokemonDetails = {
            id: 0,
            name: '',
            height: 0,
            weight: 0,
            types: [],
            description: [],
            sprites: {
                front_default: '',
                front_shiny: '',
            },
            abilities: [],
            stats: [],
        };
        const url = 'http://pokeapi.co/api/v2/pokemon/' + id + '/';
        const obs = new Observable(observer => {
            this.http.get(url).subscribe((x: any) => {
                pokemon.name = x.name;
                pokemon.id = x.id;
                pokemon.height = x.height;
                pokemon.weight = x.weight;
                pokemon.types = x.types;
                pokemon.sprites = x.sprites;
                for (const elem of x.abilities) {
                    pokemon.abilities.push({
                        name: elem.ability.name,
                        isHidden: elem.is_hidden,
                    });
                }
                for (const elem of x.stats) {
                    pokemon.stats.push({
                        name: elem.stat.name,
                        baseStat: elem.base_stat,
                        effort: elem.effort,
                    });
                }
                this.http.get(x.species.url).subscribe((y: any) => {
                    pokemon.description = y.flavor_text_entries;
                    observer.next(pokemon);
                });
            });
        });
        return obs;
    }
    public getPokemonLearnMethod(id: string | number): Observable<any> {
        const movesLearnMethod: object[] = [];
        const url = 'http://pokeapi.co/api/v2/pokemon/' + id + '/';
        const obs = new Observable(observer => {
            this.http.get(url).subscribe((data: any) => {
                const observablesArr = [];
                const levelArr = [];
                let details: any = {};
                for (const moves of data.moves) {
                    observablesArr.push(
                        this.http.get(
                            moves.version_group_details[0].move_learn_method.url
                        )
                    );
                    levelArr.push(
                        moves.version_group_details[0].level_learned_at
                    );
                }
                forkJoin(observablesArr).subscribe((result: any) => {
                    for (const [i, observable] of result.entries()) {
                        details.name = observable.name;
                        details.method = observable.descriptions[0].description;
                        details.level = levelArr[i];
                        movesLearnMethod.push(details);
                        details = {};
                    }
                });
                observer.next(movesLearnMethod);
            });
        });
        return obs;
    }
    public getPokemonEvolutionChain(id: string | number): Observable<any> {
        const url = 'http://pokeapi.co/api/v2/pokemon-species/' + id + '/';
        const obs = new Observable(observer => {
            this.http.get(url).subscribe((x: any) => {
                this.http
                    .get(x.evolution_chain.url)
                    .subscribe((response: any) => {
                        let chain = [];
                        chain.push([response.chain.species.name]);
                        function iterateEvolutions(
                            obj,
                            evChain
                        ): Array<string> {
                            if (obj.evolves_to.length === 0) {
                                return evChain;
                            } else {
                                const arr = [];
                                obj.evolves_to.forEach(evolution => {
                                    arr.push(evolution.species.name);
                                });
                                chain.push(arr);
                                obj = obj.evolves_to[0];
                                return iterateEvolutions(obj, evChain);
                            }
                        }
                        chain = iterateEvolutions(response.chain, chain);
                        observer.next(chain);
                    });
            });
        });
        return obs;
    }
    public getPokemonMoves(id: string | number): Observable<any> {
        const pokemonMovesResult: object[] = [];
        const url = 'http://pokeapi.co/api/v2/pokemon/' + id + '/';
        const obs = new Observable(observer => {
            this.http.get(url).subscribe((x: any) => {
                const observablesArr = [];
                let details: any = {};
                for (const moves of x.moves) {
                    observablesArr.push(this.http.get(moves.move.url));
                }
                forkJoin(observablesArr).subscribe((result: any) => {
                    for (const [i, observable] of result.entries()) {
                        details.name = observable.name;
                        details.power = observable.power;
                        details.accuracy = observable.accuracy;
                        details.pp = observable.pp;
                        details.description =
                            observable.effect_entries[0].effect;
                        details.type1 = observable.type.name;
                        details.type2 = observable.damage_class.name;
                        details.drain = observable.meta.drain;
                        pokemonMovesResult[i] = details;
                        details = {};
                    }
                });
                observer.next(pokemonMovesResult);
            });
        });
        return obs;
    }
}
