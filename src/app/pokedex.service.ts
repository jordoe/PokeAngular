declare var require: any;
import { Injectable } from '@angular/core';
import { HttpClient } from'@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

	pokemonList: any[] = []
	Pokedex = require('pokeapi-js-wrapper');
	interval = {
		limit: 10,
		offset: 35
	}
	constructor(private http: HttpClient) {
		if(!window.localStorage.getItem('pokemonFullList')){
			window.localStorage.setItem('pokemonFullList', JSON.stringify(this.pokemonList));
		}
	}
	getPokemonList():any{
		return this.http.get("http://pokeapi.co/api/v2/pokemon/?limit=811")
	}
	getPokemonByType(type):any{
		let url  ="http://pokeapi.co/api/v2/type/" + type + "/"
		return this.http.get(url)
	}
	getPokemonByName(name):any{
		let url  ="http://pokeapi.co/api/v2/pokemon/" + name + "/"
		return this.http.get(url)
	}
	getPokemonAbility(ability):any{
		let url  ="http://pokeapi.co/api/v2/ability/" + ability + "/"
		return this.http.get(url)
	}
}
