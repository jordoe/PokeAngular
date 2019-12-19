import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  pokemonList: object[] = [{species:{front_default:"front_def1"},sprites:{name:"Hola1"}},
  {species:{front_default:"front_def2"},sprites:{name:"Hola2"}}];
  pokemonSelected : object;

  pokemonSelect(pokemon:object){
    this.pokemonSelected = pokemon;
  }

  constructor() { }

  ngOnInit() {
    console.log(this.pokemonList)
  }

}
