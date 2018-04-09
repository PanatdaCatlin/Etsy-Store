import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";


@Component({
  selector: "app-dynamic-card-row",
  templateUrl: "./dynamic-card-row.component.html",
  styleUrls: ["./dynamic-card-row.component.css"]
})
export class DynamicCardRowComponent implements OnInit {
  @Input("cards") cards: string[];
  @Input("title") title: string;
  @Input("count") count: number;
  Math;

  currentRoute: string = this.router.url;

  constructor(private router: Router) {
    this.Math = Math;
  }

  ngOnInit() {
    console.log(this.cards);
  }
}
