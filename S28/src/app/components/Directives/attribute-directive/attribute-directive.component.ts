import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {

   bgColor:string = "black"
   textColor:string = "white"
   paraStyles:string = "p1"
   

   changeStyle(bgColor,textColor,className){
    this.bgColor = bgColor;
    this.textColor = textColor
    this.paraStyles = className
   }
}
