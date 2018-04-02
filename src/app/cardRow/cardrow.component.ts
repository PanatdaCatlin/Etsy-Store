import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-row',
  templateUrl: './cardrow.component.html',
  styleUrls: ['./cardrow.component.css']
})
export class CardRowComponent implements OnInit {
  @Input('cards') cards: string[];
  Math;
  constructor() {
    this.Math = Math;
  }

  ngOnInit() {}
}
