import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PokemonResponse } from '../interface/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl = "https://pokeapi.co/api/v2/pokemon";

  constructor(private http: HttpClient) { }

  getPokemon(pokemonName: string){
    return this.http.get([this.baseUrl, pokemonName].join('/')).pipe(
      map((pokeInfo: any) => {
        const pokemon = {
          id: pokeInfo.id,
          height: pokeInfo.height,
          weight: pokeInfo.weight,
          sprites: pokeInfo.sprites,
          species: pokeInfo.species,
          types: pokeInfo.types,
        }
        return pokemon;
      })
    ) as Observable<PokemonResponse>;

  }
}
