import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-pokedex-list',
    templateUrl: './pokedex-list.component.html',
    styleUrls: ['./pokedex-list.component.scss'],
})
export class PokedexListComponent implements OnInit {
<<<<<<< HEAD
    @Input() pokemonList: object[];
    @Input() pokemonSelected;

    @Output() choosePokemonEvent = new EventEmitter<object>();
    @Output() chooseTypeEvent = new EventEmitter<object>();

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
=======

  @Input() pokemonList: object[];
  @Input() pokemonSelected;


  @Output() choosePokemonEvent = new EventEmitter<object>();
  @Output() chooseTypeEvent = new EventEmitter<object>();

  @Output() changeViewEvent = new EventEmitter<object>();


  selectedOption: string = ""
  pokemonSearchInput: String = ""
  pokemonSelect: object = undefined

  constructor() { }

  ngOnInit() { }

  choosePokemon(pokemon) {
    this.pokemonSelect = pokemon;
    this.choosePokemonEvent.emit(pokemon);
  }

  chooseType(type) {
    this.chooseTypeEvent.emit(type)
  }

  onChange(type) {
     this.pokemonSelect = undefined
     this.chooseType(type)
  }

  changeView() {
    if(this.pokemonSelect !== undefined)
      this.changeViewEvent.emit();
  }

  /*Deprecated method, use if you need to cut array insted of filter it
  filterList(inputValue) {
    this.pokemonSearchInput = inputValue

    let arr = this.pokemonList

    let filteredArray = arr.filter((x) => {
      return x.name.includes(inputValue)
    })

    console.log(filteredArray)

  }
  */
>>>>>>> feature-detail-style
}
