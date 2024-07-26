import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './header.html',
    styleUrl: './header.css'
})
export class HeaderComponent {
}
