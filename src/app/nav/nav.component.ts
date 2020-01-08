import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
    showAbout: boolean = false;

    constructor() {}

    ngOnInit() {}

    clickAboutButton() {
        if (this.showAbout) {
            this.showAbout = false;
        } else {
            this.showAbout = true;
        }
    }
}
