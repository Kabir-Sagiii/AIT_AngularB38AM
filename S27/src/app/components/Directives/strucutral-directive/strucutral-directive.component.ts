import { Component } from '@angular/core';

@Component({
  selector: 'app-strucutral-directive',
  standalone: true,
  imports: [],
  templateUrl: './strucutral-directive.component.html',
  styleUrl: './strucutral-directive.component.css'
})
export class StrucutralDirectiveComponent {

    showBlackDiv:boolean = true
    techName = 'angular'


    fnshowBlackDiv(value:boolean){
this.showBlackDiv = value
    if(true){

    }
    }

    changeTech(value:string){
  this.techName = value
    }
}
