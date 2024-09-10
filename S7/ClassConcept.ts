
class User {
 username:string="Raj";
 id:number = 101;
 isMarried:boolean = true
 email:string = "raj@gmail.com"

 changeEmail(newEmail:string){
   this.email = newEmail
 }

 display(){
    console.log(this.username,this.id,this.isMarried,this.email)
 }

}

 var user1=  new User()
 user1.display()

 var user2=  new User()
 user2.username = "Ziya Khan"
 user2.display()