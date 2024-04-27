import { Component } from '@angular/core';
import { DogComponent } from '../dog/dog.component';
import { Dogs } from '../constants';

@Component({
  selector: 'app-view-dog',
  standalone: true,
  imports: [DogComponent],
  templateUrl: './view-dog.component.html',
  styleUrl: './view-dog.component.scss'
})
export class ViewDogComponent {
  dogs = Dogs;
}
