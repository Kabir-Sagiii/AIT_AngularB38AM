import { Component,inject } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-my-products',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './my-products.component.html',
  styleUrl: './my-products.component.css'
})
export class MyProductsComponent {
  productsData:any = []
   http=inject(HttpClient)
  getProducts(){
this.http.get("http://localhost:3000/products").subscribe({
  next : (data)=>{
console.log(data)
this.productsData = data
  },
  error:(error)=>{
    alert("Something went wrong")
    console.log(error)
  },
  complete:()=>{
    console.log("Completed")
  }
})
  }
}
