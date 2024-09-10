class A{
  
    name:string = "Ajay";
    gender:string = "male"

    print(){
        console.log(this.name,this.gender)
    }
}

class B extends A {

     displayInfo(){
        console.log(this.name,this.gender)
     }
}

var b1 = new B()
b1.displayInfo()
b1.print()