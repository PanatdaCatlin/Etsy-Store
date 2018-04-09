import { Component, OnInit } from "@angular/core";
import { product } from "../product.model";
import { Router } from "@angular/router";
import { ProductService } from "../product.service";
import { FirebaseListObservable } from "angularfire2/database";

@Component({
  selector: "app-marketplace",
  templateUrl: "./marketplace.component.html",
  styleUrls: ["./marketplace.component.css"],
  providers: [ProductService]
})
export class MarketplaceComponent implements OnInit {
  dynamicCards: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  firstCards;
  secondCards;
  thirdCards;
  fourthCards;
  fifthCards;
  sixthCards;
  constructor(private router: Router, private productService: ProductService) {
    this.firstCards = [
      { src: ".././assets/img/first1.jpg", text: "ribber shibs" },
      { src: ".././assets/img/first2.jpg", text: "Stoop prolwer" },
      { src: ".././assets/img/first3.jpg", text: "Bad dog" },
      { src: ".././assets/img/first4.jpg", text: "biggie rigs" },
      { src: ".././assets/img/first5.jpg", text: "ribber shibs" },
      { src: ".././assets/img/first6.jpg", text: "Stoop prolwer" }
    ];

    this.secondCards = [
      { src: ".././assets/img/second1.jpg", text: "ribber shibs" },
      { src: ".././assets/img/second2.jpg", text: "Stoop prolwer" },
      { src: ".././assets/img/second3.jpg", text: "Bad dog" },
      { src: ".././assets/img/second4.jpg", text: "Bad dog" },
      { src: ".././assets/img/second5.jpg", text: "Bad dog" },
      { src: ".././assets/img/second6.jpg", text: "Bad dog" }
    ];
    this.thirdCards = [
      { src: ".././assets/img/third1.jpg", text: "ribber shibs" },
      { src: ".././assets/img/third2.jpg", text: "Stoop prolwer" }
    ];

    this.fourthCards = [
      {
        src: ".././assets/img/fourth1.jpg",
        text: "ribber shibs",
        description: "here lies robber shob",
        reviews: { score: 5, reviews: 100 },
        price: "US $130"
      },
      {
        src: ".././assets/img/fourth2.jpg",
        text: "Stoop prolwer",
        description: "here lies robber shob",
        reviews: { score: 5, reviews: 100 },
        price: "US $130"
      },
      {
        src: ".././assets/img/fourth3.jpg",
        text: "Bad dog",
        description: "here lies robber shob",
        reviews: { score: 5, reviews: 100 },
        price: "US $130"
      },
      {
        src: ".././assets/img/fourth4.jpg",
        text: "biggie rigs",
        description: "here lies robber shob",
        reviews: { score: 5, reviews: 100 },
        price: "US $130"
      },
      {
        src: ".././assets/img/fourth5.jpg",
        text: "biggie rigs",
        description: "here lies robber shob",
        reviews: { score: 5, reviews: 100 },
        price: "US $130"
      },
      {
        src: ".././assets/img/fourth6.jpg",
        text: "biggie rigs",
        description: "here lies robber shob",
        reviews: { score: 5, reviews: 100 },
        price: "US $130"
      }
    ];
    this.fifthCards = [
      { src: ".././assets/img/fifth.png", text: "ribber shibs" }
    ];
    this.sixthCards = [
      {
        src: "http://lorempixel.com/100/100/abstract",
        text: "ribber shibs",
        description: "here lies robber shob",
        reviews: { score: 5, reviews: 100 },
        price: "US $130"
      },
      {
        src: "http://lorempixel.com/100/100/abstract",
        text: "Stoop prolwer",
        description: "here lies robber shob",
        reviews: { score: 5, reviews: 100 },
        price: "US $130"
      },
      {
        src: "http://lorempixel.com/100/100/abstract",
        text: "Bad dog",
        description: "here lies robber shob",
        reviews: { score: 5, reviews: 100 },
        price: "US $130"
      }
    ];
  }

  ngOnInit() {
    this.dynamicCards = this.productService.getProducts();
  }

  goToDetailPage(clickedProduct) {
    this.router.navigate(["products", clickedProduct.$key]);
  }
}
