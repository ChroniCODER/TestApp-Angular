import { Component } from '@angular/core';
import { Pokemon } from './models/pokemon';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentPokemonName = '';
  pokemons: Pokemon [] = [];

  addPokemon() {
    this.pokemons.push ({
      name:this.currentPokemonName,
      gender: Math.random() < 0.5 ? 'male' : 'female'
    })
  }
}
