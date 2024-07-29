import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
   <h1>This is My Header</h1>
  `,
  styles: ['h1 { background-color:blue;text-align:center;color:white }']
})
export class HeaderComponent {

}
