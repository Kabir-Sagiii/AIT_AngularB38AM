import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tdf',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.css'
})
export class TDFComponent {

  getFormsData(myform:any){
     let {username,email,password}=myform.value
     console.log(username,email,password)
     console.log(myform)
  }

}
