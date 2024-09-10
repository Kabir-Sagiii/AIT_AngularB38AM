var NewProduct = /** @class */ (function () {
    function NewProduct() {
        this.pid = 303;
        this.pname = "Macbook Pro";
    }
    //  constructor(id:number,name:string){
    //  this.pid = id 
    //  this.pname = name
    //  }
    NewProduct.prototype.display = function () {
        console.log(this.pid, this.pname);
    };
    return NewProduct;
}());
// var p1 = new NewProduct(101,"Samsung Galaxy") 
var p1 = new NewProduct();
//p1 = {pid:101,pname:"Samsung Galaxy",display:function(){---}}
p1.display();
// var p2 = new NewProduct(102,"Oneplus 12r")
var p2 = new NewProduct();
//p2 = {pid:102,pname:"Oneplus 12r",display:function(){---}}
p2.display();
// var p3 = new NewProduct(103,"Vivo 40Pro")
var p3 = new NewProduct();
//p3 = {pid:103,pname:"Vivo 40Pro",display:function(){---}}
p3.display();
