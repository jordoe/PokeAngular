import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    OnChanges,
} from '@angular/core';

@Component({
    selector: 'app-pokedex-list',
    templateUrl: './pokedex-list.component.html',
    styleUrls: ['./pokedex-list.component.scss'],
})
export class PokedexListComponent implements OnInit, OnChanges {
    @Input() pokemonList: object[];
    @Input() pokemonSelected;

    @Output() choosePokemonEvent = new EventEmitter<object>();
    @Output() chooseTypeEvent = new EventEmitter<object>();
    @Output() changeViewEvent = new EventEmitter<object>();

    selectedOption = '';
    pokemonSearchInput = '';
    pokemonSelect: any = undefined;
    currentListIndex = 0;
    currentSelectPokemonImage: any = undefined;
    currentImageIsShiny = false;

    constructor() {}

    ngOnInit() {}

    ngOnChanges() {
        this.checkPokemonSelected();
    }

    checkPokemonSelected() {
        if (window.sessionStorage['pokemonSelect'] == undefined) {
            this.pokemonSelect = this.pokemonList[0];
            this.choosePokemon(this.pokemonList[0]);
            window.sessionStorage['pokemonSelect'] = JSON.stringify(
                this.pokemonSelect
            );
        } else {
            this.pokemonSelect = JSON.parse(
                window.sessionStorage['pokemonSelect']
            );
            this.choosePokemon(this.pokemonSelect);
        }
    }

    updateStorage() {
        window.sessionStorage['pokemonSelect'] = JSON.stringify(
            this.pokemonSelect
        );
    }

    choosePokemon(pokemon) {
        this.pokemonSelect = pokemon;
        this.updateStorage();
        this.currentListIndex = this.pokemonList.findIndex(
            (x: any) => x.id === this.pokemonSelect.id
        );
        this.currentSelectPokemonImage = pokemon.image;
        this.choosePokemonEvent.emit(pokemon);
    }

    chooseType(type) {
        this.currentListIndex = 0;
        this.chooseTypeEvent.emit(type);
    }

    onChange(type) {
        this.pokemonSelect = undefined;
        this.updateStorage();
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
        if (this.pokemonSelect !== undefined) {
            this.changeViewEvent.emit();
        }
    }
    change_sprite() {
        if (!this.currentImageIsShiny) {
            this.currentImageIsShiny = !this.currentImageIsShiny;
            this.currentSelectPokemonImage = this.pokemonSelected.pokemon.sprites.front_shiny;
        } else {
            this.currentImageIsShiny = !this.currentImageIsShiny;
            this.currentSelectPokemonImage = this.pokemonSelected.pokemon.sprites.front_default;
        }
    }
}
