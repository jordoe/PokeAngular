import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PokedexService } from 'src/app/Services/pokedex.service';

@Component({
    selector: 'app-pokedex-top-pokemon',
    templateUrl: './pokedex-top-pokemon.component.html',
    styleUrls: ['./pokedex-top-pokemon.component.scss'],
})
export class PokedexTopPokemonComponent implements OnInit {
    public statsButtons: string[] = ['speed', 'sdefense', 'sattack', 'defense', 'attack', 'hp', 'average'];
    public topArr: any[] = [];
    public selectedStat = 6;

    public selectType: any;
    public selectedType: string;
    public pokemonTypes: string[] = ['all', 'normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ghost', 'ice', 'dark', 'fairy'];

    public isLoaded: boolean = false;

    constructor(private pokedexService: PokedexService) {}

    ngOnInit() {
        this.selectType = 'Select Type';
        this.selectedType = 'all';
        this.checkIfLoaded();
        this.pokedexService.getTopPokemon('stats', 50, null, true).subscribe((response: any) => {
            this.topArr = response;
        });
    }

    private checkIfLoaded(): void {
        if (this.topArr.length !== 0) {
            setTimeout(() => {
                this.isLoaded = true;
            }, 100);
            return;
        } else {
            setTimeout(() => {
                this.checkIfLoaded();
            }, 10);
        }
    }

    public onTypeChange(type: string): void {
        this.topArr = [];
        this.checkIfLoaded();
        if (type === 'all') {
            type = null;
        }
        this.pokedexService.getTopPokemon('stats', 50, type, true).subscribe((response: any) => {
            this.topArr = response;
        });
    }

    public getPercentage(numb: number): string {
        const highestStat = 200;
        const result = (numb / highestStat) * 100 + '%';
        return result;
    }

    public selectStat(statIndex: number): void {
        console.log(statIndex);
        this.selectedStat = statIndex;
    }
}
