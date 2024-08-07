import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'button[counting]',
  standalone: true
})
export class CounterDirective {
  numberOfClicks = 0;

  @HostListener('click', ['$event.target'])
  onClick(btn: any) {
    console.log('For ', btn.id, ', The number of clicks:', this.numberOfClicks++);
  }
}
