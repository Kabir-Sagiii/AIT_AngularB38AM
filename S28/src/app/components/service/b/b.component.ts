import { Component,inject } from '@angular/core';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-b',
  standalone: true,
  imports: [],
  templateUrl: './b.component.html',
  styleUrl: './b.component.css'
})
export class BComponent {
  //  myservice  = inject(ServiceService)
   
constructor(public myservice:ServiceService){

}
  
}
