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

  pokemonSearchInput: String = ""
  idPokemonSelected: number = 1

  constructor() { }

  ngOnInit() { }
  
  choosePokemon(pokemon) {
    this.idPokemonSelected = pokemon.id
    this.choosePokemonEvent.emit(pokemon);
  }

  filterList(inputValue) {
    this.pokemonSearchInput = inputValue
    /*
    let arr = this.pokemonList

    let filteredArray = arr.filter((x) => {
      return x.name.includes(inputValue)
    })

    console.log(filteredArray)
    */
  }
}
