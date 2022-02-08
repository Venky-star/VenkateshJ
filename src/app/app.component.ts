import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";

interface PriceCard{
  type : String,
  price : String,
  noOfUsers : String,
  storage : String,
  projects : String,
  access: String
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'priceCards';
  priceCards:Array<PriceCard> = [
    {
      type: 'FREE',
      price: '$0',
      noOfUsers: 'Single User',
      storage: '5GB Storage',
      projects:'Unlimited Public Projects',
      access: 'Community Access'
    },
    {
      type: 'PLUS',
      price: '$9',
      noOfUsers: '5 Users',
      storage: '50GB Storage',
      projects:'Unlimited Public Projects',
      access: 'Community Access'
    },
    {
      type: 'PRO',
      price: '$49',
      noOfUsers: 'Unlimited Users',
      storage: '150GB Storage',
      projects:'Unlimited Public Projects',
      access: 'Community Access'
    }
  ]
}
