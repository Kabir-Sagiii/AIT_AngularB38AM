import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tdf',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.css'
})
export class TDFComponent {

  getFormsData(myform:any){
     
     console.log(myform)
  }

}
