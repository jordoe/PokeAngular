import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PokedexComponent } from './Components/pokedex/pokedex.component';
import { PokedexListComponent } from './Components/pokedex-list/pokedex-list.component';
import { PokedexDetailComponent } from './Components/pokedex-detail/pokedex-detail.component';
import { PokedexMapComponent } from './Components/pokedex-map/pokedex-map.component';
import { NavComponent } from './Components/nav/nav.component';
import { PokedexPokeworldComponent } from './Components/pokedex-pokeworld/pokedex-pokeworld.component';
import { PokedexDetailExtendComponent } from './Components/pokedex-detail-extend/pokedex-detail-extend.component';

import { ModalComponent } from './Components/_shared/modal/modal.component';

import { FilterNamePipe } from './Utils/filter-name.pipe';
import { Pipe, PipeTransform } from '@angular/core';

import { AppRoutingModule } from './Configuration/app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        PokedexComponent,
        PokedexListComponent,
        PokedexDetailComponent,
        PokedexMapComponent,
        FilterNamePipe,
        NavComponent,
        PokedexDetailExtendComponent,
        PokedexPokeworldComponent,
        ModalComponent,
    ],
    imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
