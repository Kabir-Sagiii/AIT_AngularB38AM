import { Component } from '@angular/core';
import { CategoriesComponent } from '../categories/categories.component';
import { ProductComponent } from '../product/product.component';
import { allProductsData } from '../Data/productsdata';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CategoriesComponent,ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  currentProducts = allProductsData
  allProducts:boolean = true
  getCategory(categoryValue:string){
     if(categoryValue == "all"){
      this.allProducts = true
      this.currentProducts = allProductsData
     }else {
      this.allProducts = false
      this.currentProducts = allProductsData.filter((product)=>product.category == categoryValue)
     }
  }
     
}
