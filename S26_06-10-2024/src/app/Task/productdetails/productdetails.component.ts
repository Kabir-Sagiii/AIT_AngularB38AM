import { Component } from '@angular/core';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent {

  productDetails = {
    image:"",
    category:"",
    productName:"",
    price:0
  }

       getProductDetails(productDetails:any){
        console.log(productDetails)
      this.productDetails = productDetails
      console.log(this.productDetails)
       }
}
