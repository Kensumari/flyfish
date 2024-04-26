import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DogComponent } from './dog/dog.component';
import { Dogs } from './constants';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FlexLayoutModule, DogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';
  dogs = Dogs;
}
