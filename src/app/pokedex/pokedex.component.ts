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

    pokemonList: object[];
    pokemonSelected;
    displayNone: boolean = false;

    constructor(private pokedexService: PokedexService) {}

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
}
