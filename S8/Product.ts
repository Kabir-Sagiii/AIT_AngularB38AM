class Product {

    pid:number = 101;
    pname:string = "Iphone 16";

    display(){
        console.log(this.pid,this.pname)
    }
}

var p1 = new Product() 
//p1 = {pid:101,pname:"Iphone 16",display:function(){---}}
p1.display()

var p2 = new Product() 
//p2 = {pid:101,pname:"Iphone 16",display:function(){---}}
p2.pname = "Samsung"
p2.display()

var p3 = new Product() 
//p3 = {pid:101,pname:"Iphone 16",display:function(){---}}
p3.pname = "Vivo"
p3.display()