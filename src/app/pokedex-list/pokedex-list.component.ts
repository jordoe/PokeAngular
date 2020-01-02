import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.scss']
})

export class PokedexListComponent implements OnInit {

  @Input() pokemonList: object[];
  @Input() pokemonSelected;

  @Output() choosePokemonEvent = new EventEmitter<object>();
  @Output() chooseTypeEvent = new EventEmitter<object>();

  selectedOption: string = ""
  pokemonSearchInput: String = ""
  pokemonSelect: object = undefined

  constructor() { }

  ngOnInit() { }
  
  choosePokemon(pokemon) {
    this.pokemonSelect = pokemon
    this.choosePokemonEvent.emit(pokemon);
  }

  chooseType(type) {
    this.chooseTypeEvent.emit(type)
  }

  onChange(type) {
     this.pokemonSelect = undefined
     this.chooseType(type)
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
}
