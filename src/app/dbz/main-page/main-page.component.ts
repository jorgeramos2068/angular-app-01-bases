import { Component } from '@angular/core';

interface Character {
  name: string;
  power: string;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  characters: Character[] = [
    {
      name: 'Goku',
      power: '15000',
    },
    {
      name: 'Vegetta',
      power: '10000',
    },
  ];

  newCharacter: Character = {
    name: '',
    power: '',
  };

  addCharacter() {
    if (this.newCharacter.name.trim().length === 0) {
      return;
    }
    this.characters.push(this.newCharacter);
    this.newCharacter = {
      name: '',
      power: '',
    };
  }
}
