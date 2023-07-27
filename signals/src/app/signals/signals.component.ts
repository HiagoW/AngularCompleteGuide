import { NgFor } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  standalone: true,
  imports: [NgFor],
})
export class SignalsComponent {
  actions = signal<string[]>([]);
  counter = signal(0);
  // updated when signal changes
  doubleCounter = computed(() => this.counter() * 2);

  constructor() {
    // execute code when signal changes
    effect(() => console.log(this.counter()));
  }

  increment() {
    // set / update -> assign new value
    this.counter.update((oldCounter) => oldCounter + 1);
    // this.counter.set(this.counter() + 1);

    // mutate -> mutate object (arrays, objects, etc)
    this.actions.mutate((oldActions) => oldActions.push('INCREMENT'));
  }

  decrement() {
    this.counter.update((oldCounter) => oldCounter - 1);
    // this.actions.mutate((oldActions) => oldActions.push('DECREMENT'));
    this.actions.update((oldActions) => [...oldActions, 'DECREMENT']);
  }
}
