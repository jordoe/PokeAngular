import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/Services/pokedex.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-pokedex-top-size',
    templateUrl: './pokedex-top-size.component.html',
    styleUrls: ['./pokedex-top-size.component.scss'],
})
export class PokedexTopSizeComponent implements OnInit {
    public topBigArr: any[] = [];
    public topSmallArr: any[] = [];
    public isLoaded: boolean = false;

    public selectedTop: number;

    private canvasBigLoaded = 0;
    private canvasSmallLoaded = 0;
    private canvasBigAreLoaded: boolean = false;
    private canvasSmallAreLoaded: boolean = false;
    private canvasBigArr: any[] = [];
    private canvasSmallArr: any[] = [];

    public trainerHeight = 1.7;
    public currentHeight: number;
    private maxHeightRem: number;
    private maxTrainerHeightRem: number;
    private maxHeightRemDesktop = 20;
    private maxHeightRemMobile = 14;
    private maxTrainerHeightRemDesktop = 22;
    private maxTrainerHeightRemMobile = 18;

    public currentPokemon = 0;

    constructor(private pokedexService: PokedexService, private router: Router, private route: ActivatedRoute) {}

    ngOnInit() {
        if (screen.width > 800) {
            this.maxHeightRem = this.maxHeightRemDesktop;
            this.maxTrainerHeightRem = this.maxTrainerHeightRemDesktop;
        } else {
            this.maxHeightRem = this.maxHeightRemMobile;
            this.maxTrainerHeightRem = this.maxTrainerHeightRemMobile;
        }
        this.selectedTop = 0;
        this.checkIfLoaded();
        this.pokedexService.getTopHeightPokemon().subscribe((response: any) => {
            this.topBigArr = response[0];
            this.topSmallArr = response[1];
            this.initializeAllCanvas(0);
        });
    }

    private checkIfLoaded(): void {
        if (this.topBigArr.length !== 0 && this.selectedTop === 0 && this.canvasBigAreLoaded) {
            setTimeout(() => {
                this.isLoaded = true;
                this.setInitialPokemonAndTrainer();
            }, 100);
            return;
        } else if (this.topBigArr.length !== 0 && this.selectedTop === 1 && this.canvasSmallAreLoaded) {
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
        const name =
            this.selectedTop === 0
                ? this.topBigArr[this.currentPokemon].name
                : this.topSmallArr[this.currentPokemon].name;
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    public goToPokemonDetail(): void {
        if (this.selectedTop === 0) {
            this.router.navigate(['/detail/' + this.topBigArr[this.currentPokemon].id]);
        } else if (this.selectedTop === 1) {
            this.router.navigate(['/detail/' + this.topSmallArr[this.currentPokemon].id]);
        }
    }

    public selectTop(top: number): void {
        if (top !== this.selectedTop) {
            this.selectedTop = top;
            if (top === 0) {
                this.canvasBigAreLoaded = false;
                this.isLoaded = false;
                const oldCanvas = document.getElementById('pokemon-img-' + this.currentPokemon);
                oldCanvas.remove();
                this.currentPokemon = 0;
                this.initializeAllCanvas(0);
                this.checkIfLoaded();
            }
            if (top === 1) {
                this.canvasSmallAreLoaded = false;
                this.isLoaded = false;
                const oldCanvas = document.getElementById('pokemon-img-' + this.currentPokemon);
                oldCanvas.remove();
                this.currentPokemon = 0;
                this.initializeAllCanvas(1);
                this.checkIfLoaded();
            }
        }
    }

    public pressArrowLeft(): void {
        if (this.canLeft()) {
            const oldCanvas = document.getElementById('pokemon-img-' + this.currentPokemon);
            oldCanvas.remove();
            let canvasArr;
            let arr;
            if (this.selectedTop === 0) {
                canvasArr = this.canvasBigArr;
                arr = this.topBigArr;
            } else if (this.selectedTop === 1) {
                canvasArr = this.canvasSmallArr;
                arr = this.topSmallArr;
            }
            this.currentPokemon -= 1;
            this.currentHeight = arr[this.currentPokemon].height;
            document.getElementById('pokemon-canvas-container').appendChild(canvasArr[this.currentPokemon]);
            if (this.selectedTop === 0) {
                document.getElementById('trainer-img').style.height =
                    (this.trainerHeight * this.maxTrainerHeightRem) / this.currentHeight + 'rem';
            }
        }
    }

    public pressArrowRight(): void {
        if (this.canRight()) {
            const oldCanvas = document.getElementById('pokemon-img-' + this.currentPokemon);
            oldCanvas.remove();
            let canvasArr;
            let arr;
            if (this.selectedTop === 0) {
                canvasArr = this.canvasBigArr;
                arr = this.topBigArr;
            } else if (this.selectedTop === 1) {
                canvasArr = this.canvasSmallArr;
                arr = this.topSmallArr;
            }
            this.currentPokemon += 1;
            this.currentHeight = arr[this.currentPokemon].height;
            document.getElementById('pokemon-canvas-container').appendChild(canvasArr[this.currentPokemon]);
            if (this.selectedTop === 0) {
                document.getElementById('trainer-img').style.height =
                    (this.trainerHeight * this.maxTrainerHeightRem) / this.currentHeight + 'rem';
            }
        }
    }

    public canLeft(): boolean {
        return !(this.currentPokemon === 0);
    }

    public canRight(): boolean {
        if (this.selectedTop === 0) {
            return !(this.currentPokemon === this.topBigArr.length - 1);
        } else {
            return !(this.currentPokemon === this.topSmallArr.length - 1);
        }
    }

    private setInitialPokemonAndTrainer(): void {
        if (this.selectedTop === 0) {
            this.currentHeight = this.topBigArr[0].height;
            document.getElementById('trainer-img').style.height =
                (this.trainerHeight * this.maxTrainerHeightRem) / this.currentHeight + 'rem';
            document.getElementById('pokemon-canvas-container').appendChild(this.canvasBigArr[0]);
        } else if (this.selectedTop === 1) {
            document.getElementById('trainer-img').style.height = this.maxTrainerHeightRem + 'rem';
            document.getElementById('pokemon-canvas-container').appendChild(this.canvasSmallArr[0]);
        }
    }

    private initializeAllCanvas(selectedTop: number): void {
        if (selectedTop === 0 && this.canvasBigArr.length === 0) {
            this.topBigArr.forEach((pokemon, i) => {
                this.canvasBigArr.push('');
                this.initializeCanvas(pokemon, i, 0);
            });
        } else if (this.canvasBigArr.length !== 0) {
            this.canvasBigAreLoaded = true;
        }

        if (selectedTop === 1 && this.canvasSmallArr.length === 0) {
            this.topSmallArr.forEach((pokemon, i) => {
                this.canvasSmallArr.push('');
                this.initializeCanvas(pokemon, i, 1);
            });
        } else if (this.canvasSmallArr.length !== 0) {
            this.currentHeight = this.topSmallArr[0].height;
            this.canvasSmallAreLoaded = true;
        }
    }

    private initializeCanvas(pokemon: any, index: number, selectedTop: number): void {
        const image = new Image();
        image.crossOrigin = 'Anonymous';
        image.src = pokemon.image;
        const canvas = document.createElement('canvas');
        canvas.id = 'image-canvas';
        const context = canvas.getContext('2d');
        image.onload = () => {
            if (index === 0 && selectedTop === 0) {
                this.currentHeight = this.topBigArr[0].height;
            } else if (index === 0 && selectedTop === 1) {
                this.currentHeight = this.topSmallArr[0].height;
            }
            image.setAttribute('crossOrigin', '');
            context.drawImage(image, 0, 0);
            const trimmedCanvas = this.trimImage(canvas);
            if (selectedTop === 0) {
                trimmedCanvas.style.height = this.maxHeightRem + 'rem';
            } else if (selectedTop === 1) {
                trimmedCanvas.style.height =
                    (this.topSmallArr[index].height * this.maxTrainerHeightRem) / this.trainerHeight + 'rem';
                console.log(this.maxTrainerHeightRem);
            }
            trimmedCanvas.style.cursor = 'pointer';
            trimmedCanvas.id = 'pokemon-img-' + index;
            trimmedCanvas.addEventListener('click', () => {
                this.router.navigate(['/detail/' + pokemon.id]);
            });
            if (selectedTop === 0) {
                this.canvasBigArr[index] = trimmedCanvas;
                this.canvasBigLoaded += 1;
                if (this.canvasBigLoaded === this.topBigArr.length) {
                    this.canvasBigAreLoaded = true;
                }
            } else if (selectedTop === 1) {
                this.canvasSmallArr[index] = trimmedCanvas;
                this.canvasSmallLoaded += 1;
                if (this.canvasSmallLoaded === this.topSmallArr.length) {
                    this.canvasSmallAreLoaded = true;
                }
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
