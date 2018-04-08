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
  fourthCards;
  fifthCards;
  sixthCards;

  constructor() {
    this.firstCards = [
      { image: '.././assets/img/first1.jpg', text: 'ribber shibs' },
      { image: '.././assets/img/first2.jpg', text: 'Stoop prolwer' },
      { image: '.././assets/img/first3.jpg', text: 'Bad dog' },
      { image: '.././assets/img/first4.jpg', text: 'biggie rigs' },
      { image: '.././assets/img/first5.jpg', text: 'ribber shibs' },
      { image: '.././assets/img/first6.jpg', text: 'Stoop prolwer' }
    ];

    this.secondCards = [
      { image: '.././assets/img/second1.jpg', text: 'ribber shibs' },
      { image: '.././assets/img/second2.jpg', text: 'Stoop prolwer' },
      { image: '.././assets/img/second3.jpg', text: 'Bad dog' }
      { image: '.././assets/img/second4.jpg', text: 'Bad dog' }
      { image: '.././assets/img/second5.jpg', text: 'Bad dog' }
      { image: '.././assets/img/second6.jpg', text: 'Bad dog' }
    ];
    this.thirdCards = [
      { image: '.././assets/img/third1.jpg', text: 'ribber shibs' },
      { image: '.././assets/img/third2.jpg', text: 'Stoop prolwer' },
    ];

    this.fourthCards = [
      {
        image: '.././assets/img/fourth1.jpg',
        text: 'ribber shibs',
        description: 'here lies robber shob',
        reviews: { score: 5, reviews: 100 },
        price: 'US $130'
      },
      {
        image: '.././assets/img/fourth2.jpg',
        text: 'Stoop prolwer',
        description: 'here lies robber shob',
        reviews: { score: 5, reviews: 100 },
        price: 'US $130'
      },
      {
        image: '.././assets/img/fourth3.jpg',
        text: 'Bad dog',
        description: 'here lies robber shob',
        reviews: { score: 5, reviews: 100 },
        price: 'US $130'
      },
      {
        image: '.././assets/img/fourth4.jpg',
        text: 'biggie rigs',
        description: 'here lies robber shob',
        reviews: { score: 5, reviews: 100 },
        price: 'US $130'
      },
            {
        image: '.././assets/img/fourth5.jpg',
        text: 'biggie rigs',
        description: 'here lies robber shob',
        reviews: { score: 5, reviews: 100 },
        price: 'US $130'
      },
            {
        image: '.././assets/img/fourth6.jpg',
        text: 'biggie rigs',
        description: 'here lies robber shob',
        reviews: { score: 5, reviews: 100 },
        price: 'US $130'
      }
    ];
    this.fifthCards = [
      { image: '.././assets/img/fifth.png', text: 'ribber shibs' }
    ];
     this.sixthCards = [
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
    ];
  }
}
