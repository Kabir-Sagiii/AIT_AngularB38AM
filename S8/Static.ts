class NewProducts {

    pid:number;
    pname:string;
     static category:string

    

     constructor(id:number,name:string){
     this.pid = id 
     this.pname = name
     NewProducts.category = "electronics"
     }

    display(){
        console.log(this.pid,this.pname,NewProducts.category)
    }
}

var p1 = new NewProducts(101,"Samsung Galaxy") 
p1.display()

var p2 = new NewProducts(102,"Oneplus 12r")
p2.display()

var p3 = new NewProducts(103,"Vivo 40Pro")
p3.display()

NewProducts.category = "New_Electronincs"

p1.display()
p2.display() 
p3.display()

// p1.category = "new-electronics"
// p2.category = "new-electronics"
// p3.category = "new-electronics"
// console.log(p1)
// console.log(p2)
// console.log(p3)