import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-demo2',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-demo2.component.html',
  styleUrl: './form-demo2.component.css'
})
export class FormDemo2Component {
  registerForm: FormGroup;

  constructor(private fromBuilder: FormBuilder) {
    this.registerForm = this.fromBuilder.group({
      firstname: new FormControl('sachin', [Validators.required, Validators.minLength(5)]),
      lastname: new FormControl('tendulkar', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('sachin@gmail.com', [Validators.required, Validators.email]),
      address: new FormGroup({
        city: new FormControl(),
        pin: new FormControl()
      })
    }, { updateOn: 'blur' });
  }
  submitMyForm(formData: any) {
    console.log(formData.value)
  }

}
