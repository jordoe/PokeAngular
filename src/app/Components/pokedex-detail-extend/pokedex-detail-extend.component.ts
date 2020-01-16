import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { PokedexService } from '../../Services/pokedex.service';

@Component({
    selector: 'app-pokedex-detail-extend',
    templateUrl: './pokedex-detail-extend.component.html',
    styleUrls: ['./pokedex-detail-extend.component.scss'],
})
export class PokedexDetailExtendComponent implements OnInit, OnChanges {
    @Input() pokemonSelectedId;
    public pokeMovesList = [];

    constructor(private pokedexService: PokedexService) {}
    ngOnInit() {}
    ngOnChanges() {
        this.pokedexService
            .getPokemonMoves(this.pokemonSelectedId)
            .subscribe((response: any) => {
                this.pokeMovesList = response;
            });
    }

    prettyString(str) {
        let abc;
        str = str[0].toUpperCase() + str.slice(1);
        abc = str.replace('-', ' ');

        return abc;
    }
}
