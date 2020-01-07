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
    pokemonSelected: any = undefined;

    showList = true;
    showDetail = false;

    constructor(private pokedexService: PokedexService) {}

    ngOnInit() {
        this.pokedexService.getPokemonList().then(response => {
            this.pokemonList = response;
            this.pokemonSelected = response[0];
        });
    }

    typeSelect(type) {
        this.pokedexService.getPokemonByType(type).then(response => {
            this.pokemonList = response;
            this.pokemonSelected = response[0];
        });
    }
    pokemonSelect(pokemon) {
        /*
        this.pokedexService
            .getPokemonByName(pokemon.name)
            .subscribe(pokeFull => {
                this.pokemonSelected = pokeFull;
            });
        */
        this.pokedexService
            .getPokemonDetailsByName(pokemon.name)
            .then(response => {
                this.pokemonSelected = response;
            });
    }

    changeView() {
        this.showList = !this.showList;
        this.showDetail = !this.showDetail;
    }
}
