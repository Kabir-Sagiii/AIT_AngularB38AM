import { Component,Input,ViewChild } from '@angular/core';
import { ProductdetailsComponent } from '../productdetails/productdetails.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ProductdetailsComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @ViewChild('pd') productDetailsReference:any

  @Input() productData:any = {image:"",price:0,productName:"",category:""}
      
  sendProductDetails(){
    this.productDetailsReference.getProductDetails(this.productData)
  }

    }
