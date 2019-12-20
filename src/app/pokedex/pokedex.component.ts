import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

prueba: object;

  constructor() { }

  ngOnInit() {
    console.log("CARGANDO PADRE")
     this.prueba = {
        id: 'esto',
        name: 'pikachu',
        ability: 'lo que sea',
        berry: 'otras cosas'
    };
  }

}
