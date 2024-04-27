import { Component, signal, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Dogs } from '../constants';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-dog',
  standalone: true,
  imports: [MatCardModule, RouterModule],
  templateUrl: './dog.component.html',
})
export class DogComponent implements OnInit {
  @Input() name = "";
  imageUrl = signal("");
  description = signal("");


  ngOnInit() {
    switch (this.name) {
      case Dogs.Shiba: {
        this.imageUrl.set("https://upload.wikimedia.org/wikipedia/commons/6/6b/Taka_Shiba.jpg");
        this.description.set("Shiba Inu, breed of dog that originated in Japan some 2,300 years ago for small game and ground bird hunting. A muscular dog, it stands 13.5 to 16.5 inches (34 to 42 cm) tall at the shoulders and weighs 17 to 23 pounds (7.5 to 10.5 kg). The Shiba Inu is known for its confidence, perkiness, and triangularly");
        break;
      }
      case Dogs.Corgi: {
        this.imageUrl.set("https://media-be.chewy.com/wp-content/uploads/2021/06/29102244/PembrokeWelshCorgi-FeaturedImage-1024x615.jpg");
        this.description.set("Among the most agreeable of all small housedogs, the Pembroke Welsh Corgi is a strong, athletic, and lively little herder who is affectionate and companionable without being needy. They are one the world's most popular herding breeds.");
        break;
      }
      case Dogs.JapaneseSpitz: {
        this.imageUrl.set("https://www.dogster.com/wp-content/uploads/2024/02/Japanese-spitz-in-grass_Alexander-Seluyanov_Shutterstock.jpeg.webp");
        this.description.set("The Japanese Spitz is a classic medium-sized spitz covered with a thick, snow white stand-off coat, which consists of a long straight outer coat held by a profuse and soft under coat. It's head has a sharply pointed muzzle and triangular shaped ears standing erect.");
        break;
      }
    }
  }

}
