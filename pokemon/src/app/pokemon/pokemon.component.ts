import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { forkJoin, map, Observable } from 'rxjs';
import { PokemonResponse } from '../interface/pokemon.interface';
import { PokemonService } from '../service/pokemon.service';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  // starterPokemon = [ "Bulbasaur", "Squirtle", "Charmander" ];
  starterPokemon: string[] = [ "Bulbasaur","ivysaur", "venusaur", "Charmander", "charmeleon", "charizard", "Squirtle", "wartortle", "blastoise", "caterpie", "metapod", "butterfree", "weedle", "kakuna", "beedrill" ];
  pokemons$!: Observable<PokemonResponse[]>;
  showpokemon:boolean = false;
  constructor(private pokemonService: PokemonService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.pokemons$ = forkJoin(
      this.starterPokemon.reduce((acc: any, pokemonName: string) => {
        return[
          ...acc,
          this.pokemonService.getPokemon(pokemonName.toLowerCase()),
        ];
      }, [])
    ) as Observable<PokemonResponse[]>;
  }

  openDialog(pokemon: PokemonResponse) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {
        pokemon: pokemon,
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      result = pokemon.species.name
      console.log(result);
      if(result !== 'No Thanks'){
        this.pokemons$ = this.pokemons$.pipe(
          map((pokemons) => {
            return [
              pokemons.find(
                (pokemon: PokemonResponse) => pokemon.species.name === result),
            ]
          })
        ) as Observable<PokemonResponse[]>;
      }
      console.log(result);
      this.showpokemon = true;
    });
  }

}
