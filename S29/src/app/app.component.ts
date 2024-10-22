import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ViewCComponent } from './components/Decorators/Viewchild/view-c/view-c.component';
import { ParentComponent } from './components/Decorators/Output/parent/parent.component';
import { TwowayDBComponent } from './components/Data-binding/twoway-db/twoway-db.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { TDFComponent } from './components/Forms/tdf/tdf.component';
import { ReactiveFComponent } from './components/Forms/reactive-f/reactive-f.component';
import { ProductsComponent } from './components/Decorators/Input/products/products.component';
import { AttributeDirectiveComponent } from './components/Directives/attribute-directive/attribute-directive.component';
import { StrucutralDirectiveComponent } from './components/Directives/strucutral-directive/strucutral-directive.component';
import {EventbindingComponent} from './components/Data-binding/eventbinding/eventbinding.component'
import { PropertybindingComponent } from './components/Data-binding/propertybinding/propertybinding.component';
import {AComponent} from './components/service/a/a.component' 
import {BComponent} from './components/service/b/b.component'
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';
import {MatStepperModule} from '@angular/material/stepper';
import { StringInterpolationComponent } from './components/Data-binding/string-interpolation/string-interpolation.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatStepperModule,MatMenuModule,MatRadioModule,MatInputModule,MatFormFieldModule,MatCardModule,MatIconModule,MatButtonModule,AComponent,BComponent,TDFComponent,ReactiveFComponent,ViewCComponent,ParentComponent,ProductsComponent,AttributeDirectiveComponent,RouterOutlet,StrucutralDirectiveComponent,TwowayDBComponent,EventbindingComponent,PropertybindingComponent,HomeComponent,NavbarComponent,StringInterpolationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstapp';
    
     display(){
      alert("Working")
     }
}
