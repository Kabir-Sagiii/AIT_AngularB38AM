import { Component, ViewEncapsulation } from '@angular/core';

import {ObservableComponent} from './Observable/observable/observable.component'

import { HeaderComponent } from './routing/header/header.component';
import { FooterComponent } from './routing/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { MyProductsComponent } from './httpClient/my-products/my-products.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MyProductsComponent,RouterOutlet,HeaderComponent,FooterComponent,ObservableComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',


})
export class AppComponent {
    
}
