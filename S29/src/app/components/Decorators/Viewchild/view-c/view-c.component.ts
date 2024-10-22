import { Component,ElementRef,ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-c',
  standalone: true,
  imports: [],
  templateUrl: './view-c.component.html',
  styleUrl: './view-c.component.css'
})
export class ViewCComponent {

      @ViewChild('ref')  h2Ref:ElementRef
      @ViewChild('btn')  btnRef:ElementRef

      changeColor(){
      var h2Dom=  this.h2Ref.nativeElement;
      h2Dom.style.color = "red"
      h2Dom.innerText = "Welcome to ViewChild Decorator"

      this.btnRef.nativeElement.style.color = "green"
      this.btnRef.nativeElement.style.padding = "7px 20px"
      this.btnRef.nativeElement.style.border = "2px solid green"
      }
}
