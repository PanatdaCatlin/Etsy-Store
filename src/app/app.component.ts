import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Etsy';
  firstCards;
  secondCards;
  thirdCards;

  constructor() {
    this.firstCards = [
      { image: 'http://lorempixel.com/100/100/cats', text: 'ribber shibs' },
      { image: 'http://lorempixel.com/100/100/cats', text: 'Stoop prolwer' },
      { image: 'http://lorempixel.com/100/100/cats', text: 'Bad dog' },
      { image: 'http://lorempixel.com/100/100/cats', text: 'biggie rigs' },
      { image: 'http://lorempixel.com/100/100/cats', text: 'ribber shibs' },
      { image: 'http://lorempixel.com/100/100/cats', text: 'Stoop prolwer' }
    ];

    this.secondCards = [
      { image: 'http://lorempixel.com/100/100/food', text: 'ribber shibs' },
      { image: 'http://lorempixel.com/100/100/food', text: 'Stoop prolwer' },
      { image: 'http://lorempixel.com/100/100/food', text: 'Bad dog' }
    ];

    this.thirdCards = [
      {
        image: 'http://lorempixel.com/100/100/abstract',
        text: 'ribber shibs',
        description: 'here lies robber shob',
        reviews: { score: 5, reviews: 100 },
        price: 'US $130'
      },
      {
        image: 'http://lorempixel.com/100/100/abstract',
        text: 'Stoop prolwer',
        description: 'here lies robber shob',
        reviews: { score: 5, reviews: 100 },
        price: 'US $130'
      },
      {
        image: 'http://lorempixel.com/100/100/abstract',
        text: 'Bad dog',
        description: 'here lies robber shob',
        reviews: { score: 5, reviews: 100 },
        price: 'US $130'
      },
      {
        image: 'http://lorempixel.com/100/100/abstract',
        text: 'biggie rigs',
        description: 'here lies robber shob',
        reviews: { score: 5, reviews: 100 },
        price: 'US $130'
      }
    ];
  }
}
