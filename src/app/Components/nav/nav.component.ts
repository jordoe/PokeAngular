import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
    private showAbout: boolean = false;
    public aboutUs: string[] = [
        'Jorge Domínguez',
        'Rubén Martín',
        'Jesús Puertas',
        'Eduardo Vela',
    ];

    constructor() {}

    ngOnInit() {}

    public clickAboutButton(): void {
        if (this.showAbout) {
            this.showAbout = false;
        } else {
            this.showAbout = true;
        }
    }
}
