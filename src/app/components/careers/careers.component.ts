import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [RouterOutlet, RouterLink,FormsModule],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css'
})
export class CareersComponent {
  hasChanges: boolean = false;

  submitMyForm(formData: any) {
    console.log(formData);
    this.hasChanges = false;
  }
}
