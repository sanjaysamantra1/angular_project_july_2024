import { Component } from '@angular/core';
import { DatabindingComponent } from '../databinding/databinding.component';
import { DirectiveComponent } from '../directive/directive.component';
import { UsersComponent } from '../users/users.component';
import { Demo1Component } from '../demo1/demo1.component';
import { MyModalComponent } from '../my-modal/my-modal.component';
import { ProductsComponent } from '../products/products.component';
import { PipesComponent } from '../pipes/pipes.component';
import { ParentComponent } from '../parent/parent.component';
import { Math1Component } from '../math1/math1.component';
import { Math2Component } from '../math2/math2.component';
import { CommentsComponent } from '../comments/comments.component';
import { HttpDemo1Component } from '../http-demo1/http-demo1.component';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { ObservableDemo1Component } from '../observable-demo1/observable-demo1.component';
import { ObservableDemo2Component } from '../observable-demo2/observable-demo2.component';
import { ObservableDemo3Component } from '../observable-demo3/observable-demo3.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    DatabindingComponent,
    DirectiveComponent,
    UsersComponent,
    Demo1Component,
    MyModalComponent,
    ProductsComponent,
    PipesComponent,
    ParentComponent,
    Math1Component,
    Math2Component,
    CommentsComponent,
    HttpDemo1Component,
    EmployeeListComponent,
    ObservableDemo1Component,
    ObservableDemo2Component,
    ObservableDemo3Component
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  a = 100;
  flag = true;
}
