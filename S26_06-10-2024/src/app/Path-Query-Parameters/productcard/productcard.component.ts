import { Component,inject } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-productcard',
  standalone: true,
  imports: [],
  templateUrl: './productcard.component.html',
  styleUrl: './productcard.component.css'
})
export class ProductcardComponent {

   router:Router=inject(Router)

  navigateToElectronics(){
   this.router.navigate(["/electronics"])
  }
}
