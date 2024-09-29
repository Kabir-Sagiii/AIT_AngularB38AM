import { Component } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  standalone: true,
  imports: [],
  templateUrl: './propertybinding.component.html',
  styleUrl: './propertybinding.component.css'
})
export class PropertybindingComponent {
  
  url :string = "https://www.angularjswiki.com/angular/angular-14-release/featured.png"
  width:string = "500"
  height:String = "300"

changeToAngular(){
this.url = "https://www.angularjswiki.com/angular/angular-14-release/featured.png"
this.width="500"
this.height = "300"
}

changeToReact(){
  this.width = "500"
  this.height = "100"
this.url = "https://th.bing.com/th/id/OIP.LRCbygP9AZfeK3cNWE-OIQHaE8?rs=1&pid=ImgDetMain"
}
}
