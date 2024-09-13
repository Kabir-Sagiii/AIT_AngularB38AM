
 abstract class User {
   gender:string;
    abstract display(p1,p2) : string

    abstract getUsers() : void

    changeGender(newGender){
  this.gender = newGender
    }

 }

 class MyUser1 extends User {
  
      display(p1: string, p2: string): string {
           this.changeGender("male")
        return ""
      }

      getUsers(): void {
          super.changeGender("female")
          
      }

      changeGender(newGender: string): void {
          console.log(this.gender)
          this.gender = newGender
          console.log(this.gender)
      }

 }

 class MyUser2 extends User {
  
    display(p1: string, p2: string): string {
        
      return ""
    }

    getUsers(): void {
        
    }

}