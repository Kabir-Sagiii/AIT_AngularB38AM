var Product = /** @class */ (function () {
    function Product() {
        this.pname = "xyz";
        this.pid = 101;
        this.price = 8765;
    }
    Object.defineProperty(Product.prototype, "accessPrice", {
        get: function () {
            return this.price;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "changePrice", {
        set: function (newPrice) {
            this.price = newPrice;
        },
        enumerable: false,
        configurable: true
    });
    Product.prototype.getPrice = function () {
        return this.price;
    };
    return Product;
}());
var p1 = new Product();
console.log(p1.pname);
var priceValue = p1.accessPrice;
console.log(priceValue);
p1.changePrice = 5678;
var priceValue = p1.accessPrice;
console.log(priceValue);
