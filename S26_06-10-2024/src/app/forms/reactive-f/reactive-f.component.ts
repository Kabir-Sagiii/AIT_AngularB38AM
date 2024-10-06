import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup, FormControl,FormArray, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-f',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-f.component.html',
  styleUrl: './reactive-f.component.css'
})
export class ReactiveFComponent {
isSubmitted:boolean = false
       
 myform = new FormGroup({
  username : new FormControl(null,Validators.required),
  password : new FormControl(null,[Validators.required,Validators.maxLength(5)]),
  email : new FormControl(null),
  experience:new FormArray([
     new FormGroup({
    companyName : new FormControl(null),
    expYear :new FormControl('Select Year')
    }),
    
  ])
  // skills:new FormArray([
  //   new FormControl(null),
  
  // ])

  // address: new FormArray([
  //   new FormControl("Select the City"),
  //   new FormControl("Select the State")
  // ])

 })

        

  getUserInfo(){
    // console.log(this.myform.value.address[1])
    console.log(this.myform)
    this.isSubmitted = true
  }

  // addSkills(){
  //   (<FormArray>this.myform.get("skills")).push(new FormControl(null))
  // }

  // removeSkill(i:number){
  //   (<FormArray>this.myform.get("skills")).removeAt(i)
  // }

  addExp(){
    (<FormArray>this.myform.get("experience")).push(new FormGroup({
      companyName : new FormControl(null),
      expYear :new FormControl('Select Year')
    }))
  }
}
