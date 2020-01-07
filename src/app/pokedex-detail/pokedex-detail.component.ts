import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';


import { PokedexService } from '../pokedex.service';


@Component({
    selector: 'app-pokedex-detail',
    templateUrl: './pokedex-detail.component.html',
    styleUrls: ['./pokedex-detail.component.scss'],
})
export class PokedexDetailComponent implements OnInit {
    @Output() changeViewEvent = new EventEmitter<object>();


    @Input() pokemonId: number;
    pokemonSelected: any;



    constructor(private route: ActivatedRoute, private pokedexService: PokedexService) {}

    ngOnInit() {

        this.route.paramMap
        .subscribe((params: ParamMap) => {
          this.pokedexService
            .getPokemonDetailsByName(params.get('id'))
            .then(response => {
              this.pokemonSelected = response.pokemon;
              console.log(this.pokemonSelected);
          });
        });
    }

    changeView() {
        if (this.pokemonSelected !== undefined) {
            this.changeViewEvent.emit();
        }
    }
}
