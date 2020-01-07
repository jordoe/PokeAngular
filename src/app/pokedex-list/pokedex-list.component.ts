import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-pokedex-list',
    templateUrl: './pokedex-list.component.html',
    styleUrls: ['./pokedex-list.component.scss'],
})
export class PokedexListComponent implements OnInit {
    @Input() pokemonList: object[];
    @Input() pokemonSelected;

    @Output() choosePokemonEvent = new EventEmitter<object>();
    @Output() chooseTypeEvent = new EventEmitter<object>();

    @Output() changeViewEvent = new EventEmitter<object>();

    selectedOption = '';
    pokemonSearchInput = '';
    pokemonSelect: any = undefined;
    currentListIndex = 0;

    constructor() {}

    ngOnInit() {}

    choosePokemon(pokemon) {
        this.pokemonSelect = pokemon;
        this.currentListIndex = this.pokemonList.findIndex(
            (x: any) => x.id === this.pokemonSelect.id
        );
        this.choosePokemonEvent.emit(pokemon);
    }

    chooseType(type) {
        this.currentListIndex = 0;
        this.chooseTypeEvent.emit(type);
    }

    onChange(type) {
        this.pokemonSelect = undefined;
        this.chooseType(type);
    }

    leftArrow() {
        if (this.currentListIndex > 0) {
            this.choosePokemon(this.pokemonList[this.currentListIndex - 1]);
        }
    }

    rightArrow() {
        if (this.currentListIndex < this.pokemonList.length - 1) {
            this.choosePokemon(this.pokemonList[this.currentListIndex + 1]);
        }
    }
    changeView() {
        if (this.pokemonSelect !== undefined) this.changeViewEvent.emit();
    }
}
