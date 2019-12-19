import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.scss']
})
export class PokedexListComponent implements OnInit {

  @Input() pokemonList: object[];

  @Output() choosePokemonEvent = new EventEmitter<object>();
  choosePokemon(pokemon: object) {
    this.choosePokemonEvent.emit(pokemon);
  }

  constructor() { }

  ngOnInit() {
    console.log(this.pokemonList);
  }

}
