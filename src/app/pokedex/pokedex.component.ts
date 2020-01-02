import { Component, OnInit } from '@angular/core';
import { PokedexService } from'../pokedex.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
  pokemons = [];
  pokemon = {};
  ability = {};

  pokemonList: object[];
  pokemonSelected : object;
  displayNone: boolean = false;


  constructor(private pokedexService: PokedexService) { }

  pokemonSelect(pokemon:object){
	this.pokemonSelected = pokemon;
	console.log(this.pokemonSelected);
  }


  ngOnInit() {
	//   setTimeout(()=> console.log(this.pokemonSelected), 5000)
	this.pokedexService.getPokemonList().subscribe((pokemons) => { 
		this.pokemonList = pokemons.results
		this.pokemonSelected = this.pokemonList[0];
		console.log(this.pokemonList)
		// console.log(this.pokemons)
	})

	// this.pokedexService.getPokemonByType("water").subscribe((pokemons: string[]) => {
	// 	this.pokemons = pokemons
	// 	//console.log(this.pokemons)
	// })

	// this.pokedexService.getPokemonByName("arcanine").subscribe((pokemon: string[]) => {
	// 	this.pokemon = pokemon
	// 	// console.log(this.pokemon)
	// })

	// this.pokedexService.getPokemonAbility("battle-armor").subscribe((ability: string[]) => {
	// 	this.ability = ability
	// 	//console.log(this.ability)
	// })
  }
}
