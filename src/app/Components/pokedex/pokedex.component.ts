import { Pokemon, PokemonDetails } from '../../Utils/interfaces';
import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../../Services/pokedex.service';

@Component({
    selector: 'app-pokedex',
    templateUrl: './pokedex.component.html',
    styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit {
    public pokemonList: Pokemon[];
    public pokemonSelected: any;

    constructor(private pokedexService: PokedexService) {}

    ngOnInit() {
        this.pokedexService.getPokemonList().subscribe((response: any) => {
            this.pokemonList = response;
            this.pokemonSelected = response[0];
        });
        // this.pokedexService
        //     .getPokemonDetailsByName(1)
        //     .subscribe((response: any) => {
        //         console.log(response);
        //     });
        // this.pokedexService.getPokemonMoves(1).subscribe((response: any) => {
        //     console.log(response);
        // });
        this.pokedexService
            .getPokemonLearnMethod(1)
            .subscribe((response: any) => {
                console.log(response);
            });
    }
    public typeSelect(type: string): void {
        if (type !== '') {
            this.pokedexService.getPokemonByType(type).subscribe(response => {
                this.pokemonList = response;
                this.pokemonSelected = response[0];
            });
        }
    }
    public pokemonSelect(pokemon): void {
        if (pokemon.name !== '') {
            this.pokedexService
                .getPokemonDetailsByName(pokemon.name)
                .subscribe(response => {
                    this.pokemonSelected = response;
                });
        }
    }
}
