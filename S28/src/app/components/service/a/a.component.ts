import { Component,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-a',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './a.component.html',
  styleUrl: './a.component.css'
})
export class AComponent {

     data:string = ""
      myservice   =  inject(ServiceService)
     getAData(){
      this.myservice.AData = this.data
     }
}
