import { Pokemon, PokemonDetails } from '../../Utils/interfaces';

import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    OnChanges,
} from '@angular/core';
import { PokedexDetailComponent } from '../pokedex-detail/pokedex-detail.component';

@Component({
    selector: 'app-pokedex-list',
    templateUrl: './pokedex-list.component.html',
    styleUrls: ['./pokedex-list.component.scss'],
})
export class PokedexListComponent implements OnInit, OnChanges {
    @Input() pokemonList: Pokemon[];
    @Input() pokemonSelected: PokemonDetails;

    @Output() choosePokemonEvent = new EventEmitter<object>();
    @Output() chooseTypeEvent = new EventEmitter<object>();

    private localPokemon: Pokemon;
    private currentListIndex = 0;
    private currentSelectPokemonImage: string = undefined;
    private currentImageIsShiny = false;
    private storagePokemonKey = 'localPokemon';
    private pokemonTypes: string[] = [
        'all',
        'normal',
        'fighting',
        'flying',
        'poison',
        'ground',
        'rock',
        'bug',
        'steel',
        'fire',
        'water',
        'grass',
        'electric',
        'psychic',
        'ice',
        'dark',
        'fairy',
    ];

    // modal controler
    public content = {
        header: '',
        body: '',
        footer: '',
        size: [],
    };
    private displayModal = false;

    constructor() {}

    ngOnInit() {
        this.checkPokemonSelected();
    }

    ngOnChanges() {}

    private checkPokemonSelected(): void {
        if (window.sessionStorage[this.storagePokemonKey] === undefined) {
            this.localPokemon = this.pokemonList[0];
            this.choosePokemon(this.pokemonList[0]);
            window.sessionStorage[this.storagePokemonKey] = JSON.stringify(
                this.localPokemon
            );
        } else {
            this.localPokemon = JSON.parse(
                window.sessionStorage[this.storagePokemonKey]
            );
            this.choosePokemon(this.localPokemon);
        }
    }

    private updateStorage(): void {
        window.sessionStorage[this.storagePokemonKey] = JSON.stringify(
            this.localPokemon
        );
    }

    public choosePokemon(pokemon: Pokemon): void {
        this.currentSelectPokemonImage = pokemon.image;
        this.localPokemon = pokemon;
        this.updateStorage();
        if (this.pokemonList !== undefined) {
            this.currentListIndex = this.pokemonList.findIndex(
                (x: any) => x.id === this.localPokemon.id
            );
        }
        this.choosePokemonEvent.emit(pokemon);
    }

    public chooseType(type): void {
        this.currentListIndex = 0;
        this.chooseTypeEvent.emit(type);
    }

    public onChange(type: string): void {
        this.updateStorage();
        this.chooseType(type);
        this.choosePokemon(this.pokemonList[this.currentListIndex]);
    }

    public leftArrow(): void {
        if (this.currentListIndex > 0) {
            this.choosePokemon(this.pokemonList[this.currentListIndex - 1]);
        }
    }

    public rightArrow(): void {
        if (this.currentListIndex < this.pokemonList.length - 1) {
            this.choosePokemon(this.pokemonList[this.currentListIndex + 1]);
        }
    }

    public switchShiny(): void {
        if (this.currentImageIsShiny === false) {
            this.currentSelectPokemonImage = this.pokemonSelected.sprites.front_default;
        } else {
            this.currentSelectPokemonImage = this.pokemonSelected.sprites.front_shiny;
        }
        this.currentImageIsShiny = !this.currentImageIsShiny;
    }
    public showModal() {
        this.displayModal = true;
        this.content.header = 'This is the title I sent from Title';
        this.content.body =
            'This is the body I want to insert into the modal body';
        this.content.size = [60, 50];
    }
    public hideModal() {
        this.displayModal = false;
    }
}
