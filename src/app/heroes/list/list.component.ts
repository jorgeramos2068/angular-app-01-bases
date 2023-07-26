import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  public heroes: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'Thor',
    'Superman',
  ];
  public deletedHero: string = '';

  deleteHero(): void {
    this.deletedHero = this.heroes.pop() || '';
  }
}
