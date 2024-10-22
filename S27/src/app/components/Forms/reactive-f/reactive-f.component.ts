import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup ,FormControl, Validators, FormArray} from '@angular/forms';
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
          username : new FormControl(null,Validators.required),
          password : new FormControl(null,[Validators.required,Validators.minLength(5)]),
          email : new FormControl(null),
          experience : new FormArray([
             new FormGroup({
              companyName:new FormControl(),
              expYr : new FormControl("Select Year")
             }),
             new FormGroup({
              companyName:new FormControl(),
              expYr : new FormControl("Select Year")
             })
          ])
          // skills : new FormArray([
          //   new FormControl(null),
           
          
          // ])
     })

     getFormDetails(){
      console.log(this.myForm)
      this.submitted = true
     }

     setAllValues(){
      // this.myForm.setValue({
      //   username: 'raj',
      //   password: 12345,
      //   email: 'raj@gmail.com'
      // })
     }

     addDynamicControl(){
      // (<FormArray>this.myForm.get("skills")).push(new FormControl())

      (<FormArray>this.myForm.get("experience")).push(new FormGroup({
        companyName:new FormControl(),
        expYr : new FormControl("Select Year")
      }))
     }

     deleteControl(i){
      // (<FormArray>this.myForm.get("skills")).removeAt(i)
      (<FormArray>this.myForm.get("experience")).removeAt(i)
     }
}
