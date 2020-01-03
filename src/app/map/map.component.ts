import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit {
    private map;

    constructor() {}

    ngAfterViewInit(): void {
        this.initMap();
    }

    private myIcon = L.icon({
        iconUrl: 'https://freepngimg.com/thumb/pokemon/6-2-pokemon-png-hd.png',
        iconSize: [38, 38],
    });

    private randomLocation = [
        Math.floor(Math.random() * (90 - -90 + 1) + -90),
        Math.floor(Math.random() * (180 - -180 + 1) + -180),
    ];

    private initMap(): void {
        this.map = L.map('map', {
            center: this.randomLocation,
            zoom: 3,
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
        L.marker(this.randomLocation, { icon: this.myIcon }).addTo(this.map);
    }
}
