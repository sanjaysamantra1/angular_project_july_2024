import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  constructor(private ele: ElementRef) {
    // console.log(ele)
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow', 'red');
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight('', '');
  }
  highlight(bgColor: string, color: string) {
    this.ele.nativeElement.style.backgroundColor = bgColor;
    this.ele.nativeElement.style.color = color;
  }
}
