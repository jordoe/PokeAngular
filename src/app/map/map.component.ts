import { AfterViewInit, Component, OnInit, Input } from '@angular/core';
import * as L from 'leaflet';
import { PokedexService } from '../pokedex.service';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit {
    @Input() pokemonId: number;
    pokemonSelected: any;
    private map;
    private myIcon;

    private randomLocation = [
        Math.floor(Math.random() * (3900 - 4300 + 1) + 4300) / 100,
        Math.floor(Math.random() * (-1000 - 400 + 1) + 400) / 100,
    ];

    constructor(private pokedexService: PokedexService) {}

    ngAfterViewInit(): void {
        this.pokedexService
            .getPokemonDetailsByName(this.pokemonId)
            .then(response => {
                this.pokemonSelected = response.pokemon;
                this.initMap();
            });
    }

    private initMap(): void {
        this.map = L.map('map', {
            center: [40.2085, -3.713],
            zoom: 5,
            attributionControl: false,
            maxBounds: L.latLngBounds(L.latLng(-90, -200), L.latLng(90, 200)),
            maxBoundsViscosity: 1.0,
        });
        const tiles = L.tileLayer(
            'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
            {
                attribution:
                    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                subdomains: 'abcd',
                maxZoom: 19,
            }
        );
        tiles.addTo(this.map);
        this.myIcon = L.icon({
            iconUrl: this.pokemonSelected['sprites']['front_default'],
            iconSize: [52, 52],
        });
        L.marker(this.randomLocation, { icon: this.myIcon }).addTo(this.map);
    }
}
