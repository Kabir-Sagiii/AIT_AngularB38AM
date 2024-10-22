import { Component,Output,EventEmitter,inject } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
    router =  inject(Router)
      @Output()  myEvent = new EventEmitter()

      getCategoryInfo(event:any){
      this.router.navigate(["/products"],{queryParams:{category:event.target.value}})
      this.myEvent.emit(event.target.value)
      }
}
