import { Component, OnInit } from '@angular/core';
// import myTemplate from 'asdfghjk.html';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
    public showAbout: boolean = false;
    public aboutUs: string[] = [
        'Jorge Domínguez',
        'Rubén Martín',
        'Jesús Puertas',
        'Eduardo Vela',
    ];
    // modal controler
    public content = {
        header: '',
        body: '',
        footer: '',
        size: [],
    };
    public displayModal = false;

    constructor() {}

    ngOnInit() {}

    public clickAboutButton(): void {
        if (this.showAbout) {
            this.showAbout = false;
        } else {
            this.showAbout = true;
        }
    }

    public showModal() {
        this.displayModal = true;
        this.content.size = [32, 60];
        this.content.header = 'Develop team';
        this.content.body = `
            <div>Jorge Domínguez</div>
            <div>Rubén Martín</div>
            <div>Jesús Puertas</div>
            <div>Eduardo Vela</div>
        `;
        this.content.header = `<div> Develop team</div>`;
    }
    public hideModal() {
        this.displayModal = false;
    }
}
