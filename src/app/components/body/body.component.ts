import { Component } from '@angular/core';
import { DatabindingComponent } from '../databinding/databinding.component';
import { DirectiveComponent } from '../directive/directive.component';
import { UsersComponent } from '../users/users.component';
import { Demo1Component } from '../demo1/demo1.component';
import { MyModalComponent } from '../my-modal/my-modal.component';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    DatabindingComponent,
    DirectiveComponent,
    UsersComponent,
    Demo1Component,
    MyModalComponent,
    ProductsComponent
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
