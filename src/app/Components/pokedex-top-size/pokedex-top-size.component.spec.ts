import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexTopSizeComponent } from './pokedex-top-size.component';

describe('PokedexTopSizeComponent', () => {
    let component: PokedexTopSizeComponent;
    let fixture: ComponentFixture<PokedexTopSizeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PokedexTopSizeComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PokedexTopSizeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
