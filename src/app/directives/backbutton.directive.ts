import { Location } from '@angular/common';
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[backbutton]',
  standalone: true
})
export class BackbuttonDirective {
  constructor(private location: Location) { }
  @HostListener('click')
  clickHandler() {
    this.location.back();
  }
}
