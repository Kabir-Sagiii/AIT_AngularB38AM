import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  standalone: true,
  imports: [],
  templateUrl: './eventbinding.component.html',
  styleUrl: './eventbinding.component.css'
})
export class EventbindingComponent {

     textBoxData:string = "Initial Data"

     getText(inputRef:any,buttonRef:any){
      this.textBoxData = inputRef.value
      buttonRef.innerText = "Text Box Data in Submitted Now"
}

getInputText(inputRef:any){
this.textBoxData = inputRef.value
}

     
}
