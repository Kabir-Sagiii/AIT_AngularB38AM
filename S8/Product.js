var Product = /** @class */ (function () {
    function Product() {
        this.pid = 101;
        this.pname = "Iphone 16";
    }
    Product.prototype.display = function () {
        console.log(this.pid, this.pname);
    };
    return Product;
}());
var p1 = new Product();
//p1 = {pid:101,pname:"Iphone 16",display:function(){---}}
p1.display();
var p2 = new Product();
//p2 = {pid:101,pname:"Iphone 16",display:function(){---}}
p2.pname = "Samsung";
p2.display();
var p3 = new Product();
//p3 = {pid:101,pname:"Iphone 16",display:function(){---}}
p3.pname = "Vivo";
p3.display();
