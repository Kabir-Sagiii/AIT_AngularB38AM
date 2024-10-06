import { Component,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../Route-Guard/auth.service';
@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {

  email:string = ""
  isSubmitted:boolean = false

  auth = inject(AuthService)

  submitEmail(){
this.isSubmitted = true
  }

 allowUserToLeave(){
   if(this.email && !this.isSubmitted){
      return confirm("Without Submitting email, do you want to leave the Page") 
   }else {
    return true
   }
 } 

}
