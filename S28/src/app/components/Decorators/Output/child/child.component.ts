import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

    @Output()  myCustomEvent = new EventEmitter()

  getData(inputvalue:string){
    this.myCustomEvent.emit(inputvalue)
  }
}
