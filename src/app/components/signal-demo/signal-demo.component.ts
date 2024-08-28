import { Component, computed, isSignal, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal-demo',
  standalone: true,
  imports: [],
  templateUrl: './signal-demo.component.html',
  styleUrl: './signal-demo.component.css'
})
export class SignalDemoComponent {
  num: WritableSignal<number> = signal(0);
  numSquare: Signal<number> = computed(() => this.num() * this.num());

  increment() {
    this.num.update((value: number) => value + 1)
  }
  decrement() {
    this.num.update((val: number) => val - 1)
  }
  reset() {
    this.num.set(0);
    console.log(isSignal(this.num))
  }
}
