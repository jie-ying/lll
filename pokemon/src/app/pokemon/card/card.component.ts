import { Component, Input, OnInit } from '@angular/core';
import { PokemonResponse } from 'src/app/interface/pokemon.interface';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() pokemonlist!: PokemonResponse;

  constructor() { }

  ngOnInit() {
  }

}
