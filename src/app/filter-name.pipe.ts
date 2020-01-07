import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterName',
})
export class FilterNamePipe implements PipeTransform {
    transform(pokemonList: any[], name: string): any {
        let result;
        if (name === undefined) {
            name = '';
        }
        if (pokemonList !== undefined) {
            result = pokemonList.filter(
                pokemon => pokemon.name.indexOf(name) !== -1
            );
        }
        return result;
    }
}
