import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokedexListComponent } from './pokedex-list/pokedex-list.component';
import { PokedexDetailComponent } from './pokedex-detail/pokedex-detail.component';
import { PokedexMapComponent } from './pokedex-map/pokedex-map.component';
import { MapComponent } from './map/map.component';

import { FilterNamePipe } from './filter-name.pipe';
import { Pipe, PipeTransform } from '@angular/core';
import { NavComponent } from './nav/nav.component';

const appRoutes: Routes = [
    { path: 'list', component: PokedexComponent },
    { path: 'detail', component: PokedexComponent },
    { path: 'detail/:id', component: PokedexDetailComponent },
    { path: 'map', component: PokedexMapComponent },
    { path: '', redirectTo: '/list', pathMatch: 'full' },
];

@NgModule({
    declarations: [
        AppComponent,
        PokedexComponent,
        PokedexListComponent,
        PokedexDetailComponent,
        PokedexMapComponent,
        MapComponent,
        FilterNamePipe,
        NavComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot(appRoutes, { enableTracing: false }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
