import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  pokemonList: object[];
  pokemonSelected : object;

  // pokemonList: object[] = [{sprites:{front_default:"front_def1"},species:{name:"Hola1"}},
  // {sprites:{front_default:"front_def2"},species:{name:"Hola2"}},
  // {sprites:{front_default:"front_def1"},species:{name:"Hola1"}},
  // {sprites:{front_default:"front_def1"},species:{name:"Hola1"}},
  // {sprites:{front_default:"front_def1"},species:{name:"Hola1"}},
  // {sprites:{front_default:"front_def1"},species:{name:"Hola1"}}
  // ];

  pokemonSelect(pokemon:object){
    this.pokemonSelected = pokemon;
  }

  constructor() { }

  ngOnInit() {
  }

}
