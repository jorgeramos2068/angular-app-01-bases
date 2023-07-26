import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>{{ title }}</h1>

    <h3>
      The base is <strong>{{ base }}</strong>
    </h3>

    <button (click)="accumulate(-base)">-{{ base }}</button>
    <span>{{ counter }}</span>
    <button (click)="accumulate(+base)">{{ base }}</button>
  `,
})
export class CounterComponent {
  public title: string = 'Bases App';
  public counter: number = 0;
  public base: number = 5;

  accumulate(value: number): void {
    this.counter += value;
  }
}
