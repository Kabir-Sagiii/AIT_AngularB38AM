import { Component,OnInit,ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tdf',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.css'
})
export class TDFComponent  {
   username:string=null
   password:string=null
   myemail:string=null

  @ViewChild('myform') myform:NgForm ;
    getUsersData(formRef:any,myusername:any){
     console.log(myusername)
  
    }
    resetForm(){
      this.myform.reset()
    }

    setdefaultValue(){
      this.myform.setValue({
        username :'hello',
        password:"jcd",
        email:'hello@gmail.com'
      })
    }

    // setdefaultValueWithPatch(){
    //   this.myform.form.patchValue({
    //     username:'hello',
     
    //     email:'hello@gmail.com'
    //   })
    // }
    
}
