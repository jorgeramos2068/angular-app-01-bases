import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  newCharacter: Character = {
    name: '',
    power: '',
  };

  addNewCharacter(localCharacter: Character) {
    //this.characters.push(localCharacter);
  }

  constructor(private dbzService: DbzService) {}
}
