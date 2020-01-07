import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'app-pokedex-map',
    templateUrl: './pokedex-map.component.html',
    styleUrls: ['./pokedex-map.component.scss'],
})
export class PokedexMapComponent implements OnInit {
    id: number;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.paramMap.subscribe((params: ParamMap) => {
            this.id = parseInt(params.get('id'));
        });
    }
}
