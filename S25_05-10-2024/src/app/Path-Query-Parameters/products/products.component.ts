import { Component, OnInit } from '@angular/core';
import { RouterLink,Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  limitValue: number | string = 20
  productsData: any = []
  sortValue: string = "asc"

     constructor(private router:Router){

     }
  getLimitedProducts(event: any) {
    
    this.limitValue = event.target.value
    this.router.navigate(["/products"],{queryParams:{limit:this.limitValue}})
    if (this.limitValue == "Select Number of Products") {
      this.limitValue = 20
    }
    fetch(`https://fakestoreapi.com/products?limit=${this.limitValue}`)
      .then((res) => { return res.json() })
      .then((data) => {
        console.log(data)
        this.productsData = data
      })
      .catch((error) => {
        alert("Something went wrong")
      })
  }

  getProducts() {
    //fetch logic to get the data
    fetch("https://fakestoreapi.com/products")
      .then((res) => { return res.json() })
      .then((data) => {
        console.log(data)
        this.productsData = data
      })
      .catch((error) => {
        alert("Something went wrong")
      })

  }

  getSortedProducts(event: any) {
    this.sortValue = event.target.value
    fetch(`https://fakestoreapi.com/products?sort=${this.sortValue}`)
      .then((res) => { return res.json() })
      .then((data) => {
        console.log(data)

        this.productsData = data
      })
      .catch((error) => {
        alert("Something went wrong")
      })
  }

  ngOnInit(): void {
    this.getProducts()
  }
}
