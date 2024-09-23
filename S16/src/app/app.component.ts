import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TwowayDBComponent } from './components/Data-binding/twoway-db/twoway-db.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import {EventbindingComponent} from './components/Data-binding/eventbinding/eventbinding.component'
import { PropertybindingComponent } from './components/Data-binding/propertybinding/propertybinding.component';
import { StringInterpolationComponent } from './components/Data-binding/string-interpolation/string-interpolation.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TwowayDBComponent,EventbindingComponent,PropertybindingComponent,HomeComponent,NavbarComponent,StringInterpolationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstapp';
    
     display(){
      alert("Working")
     }
}
