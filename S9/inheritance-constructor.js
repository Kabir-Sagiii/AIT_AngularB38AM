var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var A1 = /** @class */ (function () {
    function A1() {
        this.name = "Ziya";
        this.gender = "female";
        this.pin = 7896;
    }
    A1.prototype.print = function () {
        console.log(this.name, this.gender, this.pin);
    };
    return A1;
}());
var B1 = /** @class */ (function (_super) {
    __extends(B1, _super);
    function B1(id) {
        var _this = _super.call(this) || this; // parent class constructor call
        _this.id = id;
        return _this;
    }
    B1.prototype.displayInfo = function () {
        console.log(this.name, this.gender, this.id);
    };
    return B1;
}(A1));
var b1 = new B1(101);
b1.displayInfo();
b1.print();
b1.gender = "male";
var a1 = new A1();
// a1.pin = 8999
