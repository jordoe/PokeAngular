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
	this.pokedexService.getPokemonByName(pokemon.name).subscribe((pokeFull) => { 
		this.pokemonSelected = pokeFull;
	})
  }

  ngOnInit() {
	this.pokedexService.getPokemonList().subscribe((pokemons) => { 
		this.pokemonList = pokemons.results
		this.pokemonSelected = this.pokemonList[0];
	})
  }
}
