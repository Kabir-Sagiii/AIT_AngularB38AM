import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-twoway-db',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './twoway-db.component.html',
  styleUrl: './twoway-db.component.css'
})
export class TwowayDBComponent {

  inputData:string = ""
 getData(event:any){
this.inputData = event.target.value
 }

 printInputData(){
alert(this.inputData)
 }

 updateInputData(){
  this.inputData = "Angular Data Binding Concept"
 }
}
