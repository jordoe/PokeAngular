import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterName',
})
export class FilterNamePipe implements PipeTransform {
    transform(pokemonList: any[], name: string): any {
        if (name === undefined){ 
        	name = '';
        }
        return pokemonList.filter(pokemon => pokemon.name.indexOf(name) !== -1);
    }
}
