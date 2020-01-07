import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { PokedexComponent } from '../pokedex/pokedex.component';

@Component({
    selector: 'app-pokedex-detail',
    templateUrl: './pokedex-detail.component.html',
    styleUrls: ['./pokedex-detail.component.scss'],
})
export class PokedexDetailComponent implements OnInit {
    @Output() changeViewEvent = new EventEmitter<object>();

    @Input() pokemonSelected: PokedexComponent;

    // @Input() display: object;

    constructor() {}

    ngOnInit() {
        console.log(this.pokemonSelected);
    }

    changeView() {
        if (this.pokemonSelected !== undefined) {
            this.changeViewEvent.emit();
        }
    }
}
