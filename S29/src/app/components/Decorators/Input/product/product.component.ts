import { Component,Input } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

     @Input() parentData:any =  {
      "id":0,
      "title": "",
      "price": 0,
      "description": "",
      "category": "",
      "image": "",
      "rating": {
          "rate": 3.9,
          "count": 120
      }
  }
}
