declare var require: any;
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class PokedexService {
    pokemonList: any[] = [];
    Pokedex = require('pokeapi-js-wrapper');
    interval = {
        limit: 10,
        offset: 35,
    };
    constructor(private http: HttpClient) {
        if (!window.localStorage.getItem('pokemonFullList')) {
            window.localStorage.setItem(
                'pokemonFullList',
                JSON.stringify(this.pokemonList)
            );
        }
    }
    async getPokemonList() {
        const res = await fetch('http://pokeapi.co/api/v2/pokemon/?limit=811');
        const data = await res.json();
        const pokemon = data.results.map((result, index) => ({
            name: result.name,
            id: index + 1,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index +
                1}.png`,
        }));
        return pokemon;
    }
    async getPokemonByType(type) {
        const url = 'http://pokeapi.co/api/v2/type/' + type + '/';
        const res = await fetch(url);
        const data = await res.json();
        const pokemon = data.pokemon.map((result, index) => ({
            name: result.pokemon.name,
            id: result.pokemon.url.match(/\/([^\/]+)\/?$/)[1],
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                result.pokemon.url.match(/\/([^\/]+)\/?$/)[1]
            }.png`,
        }));
        return pokemon;
    }
    async getPokemonDetailsByName(name) {
        //Get pokemon object
        const url = 'http://pokeapi.co/api/v2/pokemon/' + name + '/';
        const res = await fetch(url);
        const data = await res.json();
        //Get pokemon deatils
        const details = await fetch(data.species.url);
        const detailsData = await details.json();
        //Creating new pokemon
        const pokemon = {
            pokemon: data,
            details: detailsData,
        };
        return pokemon;
    }

    getPokemonDetails(url) {
        return this.http.get(url);
    }
    getPokemonByName(name): any {
        const url = 'http://pokeapi.co/api/v2/pokemon/' + name + '/';
        return this.http.get(url);
    }
    getPokemonAbility(ability): any {
        const url = 'http://pokeapi.co/api/v2/ability/' + ability + '/';
        return this.http.get(url);
    }
}
