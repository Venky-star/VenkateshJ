import { Component, Input,OnInit } from '@angular/core';

interface PriceCard{
  type : String,
  price : String,
  noOfUsers : String,
  storage : String,
  projects : String,
  access: String
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() priceCardData:PriceCard ={
    type : '',
    price : '',
    noOfUsers : '',
    storage : '',
    projects : '',
    access: ''
  }

  ngOnInit(): void {
  }

}
