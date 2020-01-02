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

  constructor() { }

  ngOnInit() { }
  
  choosePokemon(pokemon: object) {
    this.choosePokemonEvent.emit(pokemon);
  }
}
