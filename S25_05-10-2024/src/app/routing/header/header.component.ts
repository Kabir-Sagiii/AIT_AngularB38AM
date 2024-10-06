import { Component,inject, OnInit } from '@angular/core';
import { RouterLinkActive,RouterLink,Router} from '@angular/router';
import { AuthService } from '../../Route-Guard/auth.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  {

 auth= inject(AuthService)
 router = inject(Router)
 logoutUser(){
  this.auth.isLoggedIn = false
  this.router.navigate(["/login"])
 }
 
}
