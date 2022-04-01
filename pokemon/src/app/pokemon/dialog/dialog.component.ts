import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { PokemonResponse } from 'src/app/interface/pokemon.interface';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  pokemonlist!: PokemonResponse;

  constructor(
    public dialogRef: MatDialogRef<PokemonResponse>,
    @Inject(MAT_DIALOG_DATA) public data:{pokemon: PokemonResponse},
    private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonlist = this.data.pokemon;
    console.log(this.pokemonlist);
  }

  clickNo(){
    this.dialogRef.close();
  }

  selected(pokemon:any){
    this.pokemonService.getPokemon(pokemon);
    console.log(this.dialogRef.afterClosed())
    this.dialogRef.close();
  }

}
