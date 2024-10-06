import { Component,inject } from '@angular/core';
import { AuthService } from '../../Route-Guard/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  auth=   inject(AuthService)
  router = inject(Router)

  loginUser(){
    this.auth.isLoggedIn = true;
    this.router.navigate(["/"])
  }
}
