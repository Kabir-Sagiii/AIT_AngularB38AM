import { Component,inject, OnInit } from '@angular/core';
import { HttpClient,HttpClientModule ,HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
   http  = inject(HttpClient)
   cartData :any = []

   removeProduct(id:any){
   this.http.delete(`http://localhost:3000/add-to-cart/${id}`).subscribe({
    next:()=>{
      alert("Removed successfully")
      this.getProducts()

    },
    error:(error)=>{
      console.log(error)
      alert("Failed to remove Product from Cart")
    }
   })
   }

   getProducts(){
    let headers = new HttpHeaders()
    headers.set("Content-Type","application/json")
    headers.set("Authorization",`Bearer ${''}`)
    this.http.get("http://localhost:3000/add-to-cart",{headers}).subscribe({
      next : (res)=>{
        console.log(res)
        this.cartData = res
      },
      error:()=>{
        alert("Failed to fetch cart Details")
      }
       })
   }

   ngOnInit(): void {
  this.getProducts()
   }
}
