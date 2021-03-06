import { Pokemon, PokemonDetails } from '../Utils/interfaces';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, of, throwError, pipe, forkJoin } from 'rxjs';
import { mergeMap, switchMap, retry, map, catchError, filter, scan, tap, windowWhen } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
    providedIn: 'root',
})
export class PokedexService {
    public pokemonList: any[] = [];
    private data: Observable<any> = undefined;

    private allPokemonDetails: any[] = [];

    public topLists: any[] = [];

    public language = '';
    private defaultLang = 'en';

    constructor(private https: HttpClient, private translate: TranslateService) {
        this.initLanguage();
        if (!window.sessionStorage.getItem('pokemonFullList')) {
            window.sessionStorage.setItem('pokemonFullList', JSON.stringify(this.pokemonList));
        }
    }

    private initLanguage(): void {
        const storageName = 'language';
        if (window.localStorage[storageName] !== undefined) {
            this.language = window.localStorage[storageName];
        } else {
            this.language = this.defaultLang;
            window.localStorage[storageName] = this.defaultLang;
        }
        this.changeLang(this.language);
        this.translate.setDefaultLang(this.language);
    }

    public changeLang(lang: string): void {
        this.language = lang;
        const storageName = 'language';
        window.localStorage[storageName] = this.language;
        this.translate.use(lang);
    }

    private getPokemonListData(limit: boolean = true) {
        const limitStr = limit ? '?limit=721' : '?limit=12000';
        if (this.data === undefined) {
            const url = 'https://pokeapi.co/api/v2/pokemon/' + limitStr;
            this.data = this.https.get(url);
            return this.data;
        } else if (limit === false) {
            const url = 'https://pokeapi.co/api/v2/pokemon/' + limitStr;
            this.data = this.https.get(url);
            return this.data;
        } else {
            return this.data;
        }
    }

    public getPokemonList(limit: boolean = true): Observable<any> {
        const data = this.getPokemonListData(limit);
        return data.pipe(
            map((res: any) => {
                return res.results.reduce((result, element, index) => {
                    if (element) {
                        const newPokemon: Pokemon = {
                            name: element.name.includes('-') ? this.parseName(element.name) : element.name,
                            id: index + 1,
                            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
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
            const url = 'https://pokeapi.co/api/v2/type/' + type + '/';
            const data = this.https.get(url);
            return data.pipe(
                map((res: any) => {
                    return res.pokemon.map((result, index) => ({
                        name: result.pokemon.name,
                        id: result.pokemon.url.match(/\/([^\/]+)\/?$/)[1],
                        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${result.pokemon.url.match(/\/([^\/]+)\/?$/)[1]}.png`,
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
        const cntxt = this;
        const pokemon: PokemonDetails = {
            id: 0,
            name: '',
            height: 0,
            weight: 0,
            types: [],
            description: '',
            sprites: {
                front_default: '',
                front_shiny: '',
            },
            abilities: [],
            stats: [],
        };
        const url = 'https://pokeapi.co/api/v2/pokemon/' + id + '/';
        const obs = new Observable(observer => {
            this.https.get(url).subscribe((x: any) => {
                pokemon.id = x.id;
                x.name.includes('-') ? (pokemon.name = cntxt.parseName(x.name)) : (pokemon.name = x.name);
                pokemon.height = x.height;
                pokemon.weight = x.weight;
                pokemon.types = x.types;
                pokemon.sprites = x.sprites;
                pokemon.abilities = [];
                for (const elem of x.abilities) {
                    const obj = { name: '', isHidden: '' };
                    obj.isHidden = elem.is_hidden;
                    this.https.get(elem.ability.url).subscribe((abilityLanguage: any) => {
                        for (const abilityChooseLanguage of abilityLanguage.names) {
                            if (abilityChooseLanguage.language.name === this.language) {
                                obj.name = abilityChooseLanguage.name;
                                pokemon.abilities.push(obj);
                                break;
                            }
                        }
                    });
                }
                pokemon.stats = [];
                for (const elem of x.stats) {
                    const obj = { name: '', baseStat: '', effort: '' };
                    obj.baseStat = elem.base_stat;
                    obj.effort = elem.effort;
                    obj.name = elem.stat.name;
                    pokemon.stats.push(obj);
                }
                this.https.get(x.species.url).subscribe((y: any) => {
                    for (const language of y.flavor_text_entries) {
                        if (language.language.name === this.language) {
                            pokemon.description = language.flavor_text;
                            break;
                        }
                    }
                    observer.next(pokemon);
                });
            });
        });
        return obs;
    }
    public getPokemonEvolutionChain(id: string | number): Observable<any> {
        const obs = new Observable(observer => {
            this.https.get('https://pokeapi.co/api/v2/pokemon/' + id + '/').subscribe((res: any) => {
                if (res.name.includes('-mega')) {
                    id = res.species.name;
                }
                const url = 'https://pokeapi.co/api/v2/pokemon-species/' + id + '/';
                this.https
                    .get(url)
                    .pipe(
                        catchError(err => {
                            observer.next([]);
                            return throwError(err);
                        })
                    )
                    .subscribe((x: any) => {
                        let lastEvolutionUrl: string;
                        const megaEvolutions: string[] = [];
                        this.https.get(x.evolution_chain.url).subscribe((response: any) => {
                            let chain = [];
                            chain.push(response.chain.species.name);
                            function iterateEvolutions(obj, evChain): Array<object> {
                                if (obj.evolves_to.length === 0) {
                                    lastEvolutionUrl = obj.species.url;
                                    return evChain;
                                } else {
                                    obj.evolves_to.forEach(evolution => chain.push(evolution.species.name));
                                    obj = obj.evolves_to[0];
                                    return iterateEvolutions(obj, evChain);
                                }
                            }
                            const chainResult: object[] = [];
                            const observablesArr = [];
                            chain = iterateEvolutions(response.chain, chain);
                            this.https.get(lastEvolutionUrl).subscribe((y: any) => {
                                if (y.varieties.length > 1) {
                                    for (const poke of y.varieties) {
                                        if (poke.pokemon.name.includes('-mega')) {
                                            megaEvolutions.push(poke.pokemon.name);
                                        }
                                    }
                                    for (const mega of megaEvolutions) {
                                        chain.push(mega);
                                    }
                                }
                                returnResult.call(this);
                            });
                            function returnResult(): void {
                                for (const pokemon of chain) {
                                    observablesArr.push(this.https.get('https://pokeapi.co/api/v2/pokemon/' + pokemon + '/'));
                                }
                                forkJoin(observablesArr).subscribe((result: any) => {
                                    for (const [i, observable] of result.entries()) {
                                        const details: any = {};
                                        details.id = observable.id;
                                        details.name = observable.name;
                                        details.image = observable.sprites.front_default;
                                        details.image_shiny = observable.sprites.front_shiny;
                                        chainResult[i] = details;
                                    }
                                    observer.next(chainResult);
                                });
                            }
                        });
                    });
            });
        });
        return obs;
    }
    private getAllPokemonDetails(limit: boolean = true): Observable<any> {
        if (this.allPokemonDetails.length > 0) {
            return new Observable(observer => {
                observer.next(this.allPokemonDetails);
            });
        } else {
            const data = this.getPokemonListData(limit);
            const obs = new Observable(observer => {
                data.subscribe((x: any) => {
                    const obsArr: Observable<any>[] = [];
                    x.results.forEach(pokemon => {
                        obsArr.push(this.https.get(pokemon.url));
                    });
                    forkJoin(obsArr).subscribe((result: any) => {
                        for (const [i, pokemon] of result.entries()) {
                            this.allPokemonDetails.push(pokemon);
                        }
                        observer.next(this.allPokemonDetails);
                    });
                });
            });
            return obs;
        }
    }
    private parseTopArr(arr: any[], topType: string): any[] {
        const myResultArr = [];
        switch (topType) {
            case 'stats':
                for (const pokemon of arr) {
                    const obj: any = {};
                    obj.id = pokemon.id;
                    pokemon.name.includes('-') ? (obj.name = this.parseName(pokemon.name)) : (obj.name = pokemon.name);
                    obj.image = pokemon.sprites.front_default;
                    const statArr: any = [];
                    for (const elem of pokemon.stats) {
                        statArr.push({
                            name: elem.stat.name,
                            baseStat: elem.base_stat,
                            effort: elem.effort,
                        });
                    }
                    obj.stats = statArr;
                    myResultArr.push(obj);
                }
                return myResultArr;
                break;

            case 'height':
                for (const pokemon of arr) {
                    const obj: any = {};
                    obj.id = pokemon.id;
                    pokemon.name.includes('-') ? (obj.name = this.parseName(pokemon.name)) : (obj.name = pokemon.name);
                    obj.image = pokemon.sprites.front_default;
                    obj.height = pokemon.height / 10;
                    myResultArr.push(obj);
                }
                return myResultArr;
                break;

            default:
                return [];
                break;
        }
    }
    private filterTopArr(arr: any[], type: string = null, onlyDefault: boolean = false): any[] {
        arr = arr.filter(y => y.sprites.front_default !== null);
        if (onlyDefault) {
            arr = arr.filter(y => y.is_default);
        }
        if (type !== null) {
            arr = arr.filter(y => y.types[0].type.name === type || (y.types.length > 1 && y.types[1].type.name === type));
        }
        return arr;
    }
    private sliceTopArr(arr: any[], pokemonNum): any[] {
        return arr.slice(0, pokemonNum);
    }
    private getStatAverage(obj): number {
        let total = 0;
        for (let i = 0; i <= 5; i++) {
            total += obj.stats[i].base_stat;
        }
        return total / 6;
    }
    private getTopPokemonArr(topType: string, pokemonNum, arr, func): any[] {
        let myResultArr = [];
        myResultArr = arr.sort(func);
        myResultArr = this.sliceTopArr(myResultArr, pokemonNum);
        myResultArr = this.parseTopArr(myResultArr, topType);
        return myResultArr;
    }
    public getTopPokemon(topType: string, pokemonNum: number, type: string = null, refresh: boolean = false, onlyDefault: boolean = false): Observable<any> {
        let storageName = '';
        let listNumber = 0;
        switch (topType) {
            case 'stats':
                storageName = 'topStatsList';
                listNumber = 0;
                break;

            case 'height':
                storageName = 'topHeightList';
                listNumber = 1;
                break;
            default:
                break;
        }
        if (window.sessionStorage[storageName] !== undefined && !refresh) {
            this.topLists[listNumber] = JSON.parse(window.sessionStorage[storageName]);
            return new Observable(observer => {
                observer.next(this.topLists[listNumber]);
            });
        } else {
            return new Observable(observer => {
                this.initTopPokemon(topType, pokemonNum, type, onlyDefault).subscribe((result: any) => {
                    this.topLists[listNumber] = result;
                    window.sessionStorage[storageName] = JSON.stringify(this.topLists[listNumber]);
                    observer.next(this.topLists[listNumber]);
                });
            });
        }
    }
    public initTopPokemon(topType: string, pokemonNum: number, type: string = null, onlyDefault: boolean = false): Observable<any> {
        const cntxt = this;
        const data = this.getAllPokemonDetails(false);
        const obs = new Observable(observer => {
            data.subscribe((result: any) => {
                let filteredResult = [];
                filteredResult = cntxt.filterTopArr(result, type, onlyDefault);
                const res = [];
                switch (topType) {
                    case 'stats':
                        for (let i = 0; i <= 5; i++) {
                            res.push(cntxt.getTopPokemonArr(topType, pokemonNum, filteredResult, (a, b) => b.stats[i].base_stat - a.stats[i].base_stat));
                        }
                        res.push(cntxt.getTopPokemonArr(topType, pokemonNum, filteredResult, (a, b) => cntxt.getStatAverage(b) - cntxt.getStatAverage(a)));
                        observer.next(res);
                        break;

                    case 'height':
                        const biggest = cntxt.getTopPokemonArr(topType, pokemonNum, filteredResult, (a, b) => b.height - a.height);
                        const smallest = cntxt.getTopPokemonArr(topType, pokemonNum, filteredResult, (a, b) => a.height - b.height);
                        res.push(biggest);
                        res.push(smallest);
                        observer.next(res);
                        break;

                    default:
                        break;
                }
            });
        });
        return obs;
    }
    public getPokemonMoves(id: string | number): Observable<any> {
        const pokemonMovesResult: object[] = [];
        const url = 'https://pokeapi.co/api/v2/pokemon/' + id + '/';
        const obs = new Observable(observer => {
            this.https.get(url).subscribe((x: any) => {
                const observablesArr = [];
                let details: any = {};
                for (const moves of x.moves) {
                    observablesArr.push(this.https.get(moves.move.url));
                }
                forkJoin(observablesArr).subscribe((result: any) => {
                    for (const [i, observable] of result.entries()) {
                        for (const n of observable.names) {
                            if (n.language.name === this.language) {
                                details.name = n.name;
                            }
                        }
                        details.power = observable.power;
                        details.accuracy = observable.accuracy;
                        details.pp = observable.pp;
                        for (const d of observable.flavor_text_entries) {
                            if (d.language.name === this.language) {
                                details.description = d.flavor_text;
                            }
                        }
                        details.type1 = observable.type.name;
                        details.type2 = observable.damage_class.name;
                        details.drain = observable.meta.drain;
                        pokemonMovesResult[i] = details;
                        details = {};
                    }
                    observer.next(pokemonMovesResult);
                });
            });
        });
        return obs;
    }
    public getPokemonLearnLevel(id: string | number): Observable<any> {
        const movesLearnMethod: object[] = [];
        const url = 'https://pokeapi.co/api/v2/pokemon/' + id + '/';
        const obs = new Observable(observer => {
            this.https.get(url).subscribe((data: any) => {
                const observablesArr = [];
                const levelArr = [];
                let details: any = {};
                for (const moves of data.moves) {
                    observablesArr.push(this.https.get(moves.version_group_details[0].move_learn_method.url));
                    levelArr.push(moves.version_group_details[0].level_learned_at);
                }
                forkJoin(observablesArr).subscribe((result: any) => {
                    for (const [i, observable] of result.entries()) {
                        for (const n of observable.names) {
                            if (n.language.name === this.language) {
                                details.name = n.name;
                            }
                        }
                        if (this.language === 'ja') {
                            details.name = observable.name;
                        }
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
    private parseName(name: string): string {
        const split = name.split('-');
        let resultStr = '';
        split.forEach((namePart, i) => {
            resultStr += namePart.replace(/^./, namePart[0].toUpperCase());
            if (i !== split.length - 1) {
                resultStr += ' ';
            }
        });
        return resultStr;
    }
}
