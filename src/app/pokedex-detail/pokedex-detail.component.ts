import { Component, OnInit, Input } from '@angular/core';

import { PokedexComponent } from '../pokedex/pokedex.component';


@Component({
  selector: 'app-pokedex-detail',
  templateUrl: './pokedex-detail.component.html',
  styleUrls: ['./pokedex-detail.component.scss']
})
export class PokedexDetailComponent implements OnInit {
  @Input() pokemon: PokedexComponent;

  @Input() pokemonS; // TEST
  pokemontest: object; // TEST


  constructor() {
  }

  ngOnInit() {
        // TEST this.pokemontest = {}
        this.pokemontest = {
          name: 'pikachu',
          height: '39,5',
          weight: '2',
          description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore '
    };
  }

}
