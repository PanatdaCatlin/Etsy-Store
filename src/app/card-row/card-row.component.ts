import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-row',
  templateUrl: './card-row.component.html',
  styleUrls: ['./card-row.component.css']
})
export class CardRowComponent implements OnInit {
  @Input('cards') cards: string[];
  @Input('title') title: string;
  @Input('count') count: number;
  Math;
  constructor() {
    this.Math = Math;
  }

  ngOnInit() {
    console.log(this.cards);
  }
}
