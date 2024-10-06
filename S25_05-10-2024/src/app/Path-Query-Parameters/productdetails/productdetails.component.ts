import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../contract/IProduct';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent implements OnInit {
  id:number = 0
  data:IProduct = {
    title:"",
    id:0,
    description:"",
    rating:{
      rate:0,
      count:0
    },
    price:0,
    category:"",
    image:""

  }
  constructor(private activateRoute:ActivatedRoute){

   

  }

       getProductInfo():void{
         this.id = this.activateRoute.snapshot.params['id']
          fetch(`https://fakestoreapi.com/products/${this.id}`).then((res)=>res.json()).then((data)=>{
          //  console.log(data)
           this.data = data
          }).catch((error)=>{
            alert("Something went wrong ")
          })
       }

  ngOnInit(): void {
    this.getProductInfo()
  }


}
