class A1{
  
    name:string 
    protected gender:string 
    private pin:number

    constructor(){
        this.name = "Ziya"
        this.gender = "female"
        this.pin = 7896
    }

    print(){
        console.log(this.name,this.gender,this.pin)
    }
}

class B1 extends A1 {

    id:number 

    constructor(id){
        super() // parent class constructor call
        this.id = id
    }

     displayInfo(){
        console.log(this.name,this.gender,this.id)
     }
}

var b1 = new B1(101)
b1.displayInfo()
b1.print()
b1.gender = "male"

var a1 = new A1() 
// a1.pin = 8999