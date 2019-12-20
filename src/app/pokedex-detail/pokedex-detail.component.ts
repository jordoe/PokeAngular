import { Component, OnInit, Input } from '@angular/core';

import { PokedexComponent } from '../pokedex/pokedex.component';


@Component({
  selector: 'app-pokedex-detail',
  templateUrl: './pokedex-detail.component.html',
  styleUrls: ['./pokedex-detail.component.scss']
})
export class PokedexDetailComponent implements OnInit {
  @Input() pokemon: PokedexComponent;

  constructor() {
  }

  ngOnInit() {
  
  }

}
