import { Pokemon, PokemonDetails } from '../../Utils/interfaces';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { PokedexService } from '../../Services/pokedex.service';

@Component({
    selector: 'app-pokedex-detail',
    templateUrl: './pokedex-detail.component.html',
    styleUrls: ['./pokedex-detail.component.scss'],
})
export class PokedexDetailComponent implements OnInit {
    public pokemonSelected: any;
    public pokemonSelectedId: string;
    public englishDescription: any;
    public currentSelectPokemonImage: string | null;
    public currentImageIsShiny: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private pokedexService: PokedexService
    ) {}

    ngOnInit() {
        this.route.paramMap.subscribe((params: ParamMap) => {
            this.pokemonSelectedId = params.get('id');
            this.pokedexService
                .getPokemonDetailsByName(this.pokemonSelectedId)
                .subscribe(response => {
                    this.pokemonSelected = response;
                    if (response.description[1].language.name === 'ja') {
                        this.englishDescription = response.description[2];
                    } else {
                        this.englishDescription = response.description[1];
                    }
                    this.currentSelectPokemonImage =
                        response.sprites.front_default;
                });
        });
    }

    public getPercentage(numb: number): string {
        const highestStat = 200;
        const result = (numb / highestStat) * 100 + '%';
        return result;
    }

    public switchShiny(): void {
        this.currentImageIsShiny = !this.currentImageIsShiny;
        if (this.currentImageIsShiny === false) {
            this.currentSelectPokemonImage = this.pokemonSelected.sprites.front_default;
        } else {
            this.currentSelectPokemonImage = this.pokemonSelected.sprites.front_shiny;
        }
    }

    public goBack(): void {
        this.location.back();
    }
}
