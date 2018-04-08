import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'top-row',
  templateUrl: './toprow.component.html',
  styleUrls: ['./toprow.component.css']
})
export class TopRowComponent implements OnInit {
  cards = [
    {
      src: '.././assets/img/jewelry.jpg',
      title: 'RAW JEWELRY',
      sub: 'Find the most imaginative items out there.'
    },
    {
      src: '.././assets/img/peopleandpets.jpg',
      title: 'CUSTOM MADE',
      sub: 'Create somthing spectacular with a maker.'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
