import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import navbardata from 'navbar_data.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lazulyra.github.io';
}
