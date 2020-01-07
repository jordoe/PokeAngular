import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../pokedex.service';

@Component({
    selector: 'app-pokedex',
    templateUrl: './pokedex.component.html',
    styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit {
    pokemons = [];
    pokemon = {};
    ability = {};

<<<<<<< HEAD
    pokemonList: object[];
    pokemonSelected;
    displayNone = false;
=======
  pokemonList: object[];
  pokemonSelected: any = undefined;

  showList = true;
  showDetail = false;

>>>>>>> feature-detail-style

    constructor(private pokedexService: PokedexService) {}

<<<<<<< HEAD
    ngOnInit() {
        this.pokedexService.getPokemonList().then(response => {
            this.pokemonList = response;
            this.pokemonSelected = response[0];
        });
    }

    pokemonSelect(pokemon) {
        this.pokedexService
            .getPokemonByName(pokemon.name)
            .subscribe(pokeFull => {
                this.pokemonSelected = pokeFull;
            });
    }

    typeSelect(type) {
        this.pokedexService.getPokemonByType(type).then(response => {
            this.pokemonList = response;
            this.pokemonSelected = response[0];
        });
    }
=======
  ngOnInit() {
	this.pokedexService.getPokemonList().then((response) =>{
		this.pokemonList = response
	})
  }


  pokemonSelect(pokemon){
  	this.pokedexService.getPokemonByName(pokemon.name).subscribe((pokeFull) => {
      this.pokemonSelected = pokeFull;
      console.log(this.pokemonSelected);
  	})
  }

  typeSelect(type) {
    this.pokedexService.getPokemonByType(type).then((response) => {
      this.pokemonList = response;
      this.pokemonSelected = response[0];
    });
}

  changeView() {
    this.showList = !this.showList;
    this.showDetail = !this.showDetail;
  }

>>>>>>> feature-detail-style
}
