import { Component,inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient,HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent implements OnInit {
    activateRoute   =  inject(ActivatedRoute)
    http = inject(HttpClient)
    id:any
    product:any = {
      id:1,
      title:'...',
      price:'...',
      category:'...',
      description:'...',
      image:'...'
  }

    getProductData(){
      this.http.get(`https://fakestoreapi.com/products/${this.id}`).subscribe({
        next : (data)=>{
this.product = data
console.log(data)
        },
        error:()=>{
          alert("Something went wrong")
        }
      })
    }
    ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params["id"]
   this.getProductData()
    }
}
