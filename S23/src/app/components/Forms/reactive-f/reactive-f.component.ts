import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup ,FormControl} from '@angular/forms';
@Component({
  selector: 'app-reactive-f',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-f.component.html',
  styleUrl: './reactive-f.component.css'
})
export class ReactiveFComponent {
   submitted:boolean = false
     myForm  = new FormGroup({
          username : new FormControl("Sagar"),
          password : new FormControl(1234),
          email : new FormControl("sagar@gmail.com")
     })

     getFormDetails(){
      console.log(this.myForm)
      this.submitted = true
     }

     setAllValues(){
      this.myForm.setValue({
        username: 'raj',
        password: 12345,
        email: 'raj@gmail.com'
      })
     }
}
