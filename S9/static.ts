class User {
    username:string; 
    id:number;
    static city:string 

    constructor(username:string,id:number){
    this.username = username 
    this.id = id
    User.city = "Pune"
    }

      displayInfo(){
        console.log(this.username,this.id,User.city)
      }

      static changeCity(newCity:string){
        this.city = newCity
      }
}
 
   var user1 = new User("Raj",101)
   user1.displayInfo()

   var user2 = new User("Sneha",105)
   user2.displayInfo()

   User.changeCity("Indore")

   user1.displayInfo() 
   user2.displayInfo()