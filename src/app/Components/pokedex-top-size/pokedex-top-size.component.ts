import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/Services/pokedex.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-pokedex-top-size',
    templateUrl: './pokedex-top-size.component.html',
    styleUrls: ['./pokedex-top-size.component.scss'],
})
export class PokedexTopSizeComponent implements OnInit {
    public isLoaded: boolean = false;

    public topsArr: any[] = [];

    public selectedTop: number;

    private canvasSets: any[] = [];

    public trainerHeight = 1.7;
    private maxPokemonHeightRem: number;
    private maxTrainerHeightRem: number;

    public currentPokemon: number;

    public selectType: any;
    public selectedType: string;
    public pokemonTypes: string[] = ['all', 'normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ghost', 'ice', 'dark', 'fairy'];

    constructor(private pokedexService: PokedexService, private router: Router, private route: ActivatedRoute) {}

    ngOnInit() {
        this.initTopsArr();
        this.initCanvasSets();
        this.setMaxHeights();
        this.selectedTop = 0;
        this.currentPokemon = 0;
        this.selectedType = 'all';
        this.checkIfLoaded();
        this.pokedexService.getTopPokemon('height', 50, null, true).subscribe((response: any) => {
            this.topsArr[0] = response[0];
            this.topsArr[1] = response[1];
            this.initializeCanvasSet(0);
            this.initializeCanvasSet(1);
        });
    }

    private setMaxHeights(): void {
        if (screen.width > 800) {
            this.maxPokemonHeightRem = 20;
            this.maxTrainerHeightRem = 22;
        } else {
            this.maxPokemonHeightRem = 14;
            this.maxTrainerHeightRem = 18;
        }
    }

    private initTopsArr(): void {
        for (let i = 0; i < 2; i++) {
            this.topsArr.push([]);
        }
    }

    private initCanvasSets(): void {
        this.canvasSets.push({
            arr: [],
            name: 'big',
            numLoaded: 0,
            areLoaded: false,
        });
        this.canvasSets.push({
            arr: [],
            name: 'small',
            numLoaded: 0,
            areLoaded: false,
        });
    }

    private checkIfLoaded(): void {
        if (this.topsArr[0].length !== 0 && this.topsArr[1].length !== 0 && this.canvasSets[0].areLoaded && this.canvasSets[1].areLoaded) {
            setTimeout(() => {
                this.isLoaded = true;
                this.setInitialPokemonAndTrainer();
            }, 100);
            return;
        } else {
            setTimeout(() => {
                this.checkIfLoaded();
            }, 10);
        }
    }

    public currentPokemonName(): string {
        const name = this.topsArr[this.selectedTop][this.currentPokemon].name;
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    public goToPokemonDetail(): void {
        this.router.navigate(['/detail/' + this.topsArr[this.selectedTop][this.currentPokemon].id]);
    }

    private resetToDefaults(full: boolean = false) {
        if (full) {
            this.topsArr.forEach((topArr, i) => {
                this.topsArr[i] = [];
            });
            this.canvasSets.forEach((canvasSet, i) => {
                this.canvasSets[i].arr = [];
                this.canvasSets[i].numLoaded = 0;
                this.canvasSets[i].areLoaded = false;
            });
        }
        this.canvasSets[this.selectedTop].areLoaded = false;
        this.isLoaded = false;
        const oldCanvas = document.getElementById('pokemon-img-' + this.currentPokemon);
        oldCanvas.remove();
        this.currentPokemon = 0;
        this.initializeCanvasSet(this.selectedTop);
    }

    public onTypeChange(type: string): void {
        this.resetToDefaults(true);
        this.checkIfLoaded();
        if (type === 'all') {
            type = null;
        }
        this.pokedexService.getTopPokemon('height', 50, type, true).subscribe((response: any) => {
            this.topsArr[0] = response[0];
            this.topsArr[1] = response[1];
            this.initializeCanvasSet(0);
            this.initializeCanvasSet(1);
        });
    }

    public selectTop(top: number): void {
        if (top !== this.selectedTop) {
            this.selectedTop = top;
            this.resetToDefaults();
            this.checkIfLoaded();
        }
    }

    public pressArrow(dir: number): void {
        const can = (dir === -1 && this.canLeft()) || (dir === 1 && this.canRight());
        if (can) {
            const oldCanvas = document.getElementById('pokemon-img-' + this.currentPokemon);
            oldCanvas.remove();
            let canvasArr;
            let arr;
            canvasArr = this.canvasSets[this.selectedTop].arr;
            arr = this.topsArr[this.selectedTop];
            this.currentPokemon += dir;
            document.getElementById('pokemon-canvas-container').appendChild(canvasArr[this.currentPokemon]);
            this.setNodesHeights();
        }
    }

    public canLeft(): boolean {
        return !(this.currentPokemon === 0);
    }

    public canRight(): boolean {
        return !(this.currentPokemon === this.topsArr[this.selectedTop].length - 1);
    }

    private setNodesHeights(): void {
        const trainerNode = document.getElementById('trainer-img');
        const pokemonNode = document.getElementById('pokemon-img-' + this.currentPokemon);
        const pokemonHeight = this.topsArr[this.selectedTop][this.currentPokemon].height;
        if (pokemonHeight >= this.trainerHeight) {
            pokemonNode.style.height = this.maxPokemonHeightRem + 'rem';
            trainerNode.style.height = (this.trainerHeight * this.maxPokemonHeightRem) / pokemonHeight + 'rem';
        } else {
            pokemonNode.style.height = (this.topsArr[this.selectedTop][this.currentPokemon].height * this.maxTrainerHeightRem) / this.trainerHeight + 'rem';
            trainerNode.style.height = this.maxTrainerHeightRem + 'rem';
        }
    }

    private setInitialPokemonAndTrainer(): void {
        document.getElementById('pokemon-canvas-container').appendChild(this.canvasSets[this.selectedTop].arr[0]);
        this.setNodesHeights();
    }

    private initializeCanvasSet(top: number): void {
        if (this.canvasSets[top].arr.length === 0) {
            this.topsArr[top].forEach((pokemon, i) => {
                this.canvasSets[top].arr.push('');
                this.initializeCanvas(pokemon, i, top);
            });
        } else {
            this.canvasSets[top].areLoaded = true;
        }
    }

    private initializeCanvas(pokemon: any, index: number, top: number): void {
        const image = new Image();
        image.crossOrigin = 'Anonymous';
        image.src = pokemon.image;
        const canvas = document.createElement('canvas');
        canvas.id = 'image-canvas';
        const context = canvas.getContext('2d');
        image.onload = () => {
            image.setAttribute('crossOrigin', '');
            context.drawImage(image, 0, 0);
            const trimmedCanvas = this.trimImage(canvas);
            trimmedCanvas.style.cursor = 'pointer';
            trimmedCanvas.id = 'pokemon-img-' + index;
            trimmedCanvas.addEventListener('click', () => {
                this.router.navigate(['/detail/' + pokemon.id]);
            });
            this.canvasSets[top].arr[index] = trimmedCanvas;
            this.canvasSets[top].numLoaded += 1;
            if (this.canvasSets[top].numLoaded === this.topsArr[top].length) {
                this.canvasSets[top].areLoaded = true;
            }
        };
    }

    private trimImage(canvas: HTMLCanvasElement): HTMLCanvasElement {
        const ctx = canvas.getContext('2d');
        const copy = document.createElement('canvas').getContext('2d');
        const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const l = pixels.data.length;
        let i;
        const bound = {
            top: null,
            left: null,
            right: null,
            bottom: null,
        };
        let x;
        let y;

        // Iterate over every pixel to find the highest
        // and where it ends on every axis ()
        for (i = 0; i < l; i += 4) {
            if (pixels.data[i + 3] !== 0) {
                x = (i / 4) % canvas.width;
                /* tslint:disable:no-bitwise */
                y = ~~(i / 4 / canvas.width);
                /* tslint:enable:no-bitwise */

                if (bound.top === null) {
                    bound.top = y;
                }

                if (bound.left === null) {
                    bound.left = x;
                } else if (x < bound.left) {
                    bound.left = x;
                }

                if (bound.right === null) {
                    bound.right = x;
                } else if (bound.right < x) {
                    bound.right = x;
                }

                if (bound.bottom === null) {
                    bound.bottom = y;
                } else if (bound.bottom < y) {
                    bound.bottom = y;
                }
            }
        }

        // Calculate the height and width of the content
        const trimHeight = bound.bottom - bound.top;
        const trimWidth = bound.right - bound.left;
        const trimmed = ctx.getImageData(bound.left, bound.top, trimWidth, trimHeight);

        copy.canvas.width = trimWidth;
        copy.canvas.height = trimHeight;
        copy.putImageData(trimmed, 0, 0);

        // Return trimmed canvas
        return copy.canvas;
    }
}
