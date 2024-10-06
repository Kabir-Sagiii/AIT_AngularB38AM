import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

   @Output() myEvent = new EventEmitter()

    selectCategory(categoryName:string){
    this.myEvent.emit(categoryName)
    }
}
