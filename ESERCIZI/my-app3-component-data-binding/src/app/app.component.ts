import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentiComponent } from './studenti/studenti.component';
import { StudenteComponent } from './studenti/studente/studente.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StudentiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'my-app-component';
}
