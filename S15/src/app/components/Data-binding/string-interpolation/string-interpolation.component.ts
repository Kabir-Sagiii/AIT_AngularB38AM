import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  standalone: true,
  imports: [],
  templateUrl: './string-interpolation.component.html',
  styleUrl: './string-interpolation.component.css'
})
export class StringInterpolationComponent {
    username = "Soniya Sharma"

    productData=  {
      pname:"Iphone 16 Pro Max",
      price:145000
    }

    changePrice(){
      this.productData.price = 180000
    }

}
