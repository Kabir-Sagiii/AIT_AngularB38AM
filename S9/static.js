var User = /** @class */ (function () {
    function User(username, id) {
        this.username = username;
        this.id = id;
        User.city = "Pune";
    }
    User.prototype.displayInfo = function () {
        console.log(this.username, this.id, User.city);
    };
    User.changeCity = function (newCity) {
        this.city = newCity;
    };
    return User;
}());
var user1 = new User("Raj", 101);
user1.displayInfo();
var user2 = new User("Sneha", 105);
user2.displayInfo();
User.changeCity("Indore");
user1.displayInfo();
user2.displayInfo();
