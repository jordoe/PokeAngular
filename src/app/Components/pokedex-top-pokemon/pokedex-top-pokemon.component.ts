import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/Services/pokedex.service';

@Component({
    selector: 'app-pokedex-top-pokemon',
    templateUrl: './pokedex-top-pokemon.component.html',
    styleUrls: ['./pokedex-top-pokemon.component.scss'],
})
export class PokedexTopPokemonComponent implements OnInit {
    public statsButtons: string[] = [
        'Speed',
        'S. Defense',
        'S. Attack',
        'Defense',
        'Attack',
        'HP',
        'Average',
    ];
    public topArr: any[] = [];
    public selectedStat = 6;

    constructor(private pokedexService: PokedexService) {}

    ngOnInit() {
        this.pokedexService.getTopTenPokemon().subscribe((response: any) => {
            this.topArr = response;
            console.log(this.topArr[0]);
        });
    }

    public getPercentage(numb: number): string {
        const highestStat = 200;
        const result = (numb / highestStat) * 100 + '%';
        return result;
    }

    public selectStat(statIndex: number): void {
        this.selectedStat = statIndex;
    }
}
