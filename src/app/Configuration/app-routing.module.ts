import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokedexComponent } from '../Components/pokedex/pokedex.component';
import { PokedexDetailComponent } from '../Components/pokedex-detail/pokedex-detail.component';
import { PokedexMapComponent } from '../Components/pokedex-map/pokedex-map.component';
import { PokedexPokeworldComponent } from '../Components/pokedex-pokeworld/pokedex-pokeworld.component';
import { PokedexTopPokemonComponent } from '../Components/pokedex-top-pokemon/pokedex-top-pokemon.component';
import { PokedexTopSizeComponent } from '../Components/pokedex-top-size/pokedex-top-size.component';

const appRoutes: Routes = [
    { path: 'list', component: PokedexComponent },
    { path: 'detail', component: PokedexComponent, pathMatch: 'full' },
    {
        path: 'detail/:id',
        component: PokedexDetailComponent,
        pathMatch: 'full',
    },
    { path: 'map', component: PokedexMapComponent },
    { path: 'map/:id', component: PokedexMapComponent },
    { path: 'pokeworld', component: PokedexPokeworldComponent },
    { path: 'top', component: PokedexTopPokemonComponent },
    { path: 'topheight', component: PokedexTopSizeComponent },
    { path: '', redirectTo: '/list', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { enableTracing: false })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
