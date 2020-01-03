import { Injectable } from '@angular/core';
import * as L from 'leaflet';

@Injectable({
    providedIn: 'root',
})
export class MapService {
    private map = L.map('map', {
        center: [39.8282, -98.5795],
        zoom: 3,
    });

    tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.map);

    constructor() {}

    getMap() {
        return this.map;
    }
}
