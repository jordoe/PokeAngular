import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { PokedexComponent } from '../pokedex/pokedex.component';

import { PokedexService } from '../pokedex.service';

@Component({
    selector: 'app-pokedex-detail',
    templateUrl: './pokedex-detail.component.html',
    styleUrls: ['./pokedex-detail.component.scss'],
})
export class PokedexDetailComponent implements OnInit {
    @Output() changeViewEvent = new EventEmitter<object>();

    @Input() pokemonSelected: PokedexComponent;

    // @Input() getPokemonDetailsByName: PokedexService;
    // @Input() getPokemonDetails: PokedexService;

    // details: any;
    // @Input() display: object;
    getPokemonDetailsByName;

    constructor(private pokedexService: PokedexService) {}

    ngOnInit() {
        this.pokedexService.getPokemonDetailsByName('ditto').then(response => {
            console.log('hola1');
            console.log(response);
        });
    }

    changeView() {
        if (this.pokemonSelected !== undefined) {
            this.changeViewEvent.emit();
        }
    }
}
