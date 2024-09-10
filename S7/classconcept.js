var User = /** @class */ (function () {
    function User() {
        this.username = "Raj";
        this.id = 101;
        this.isMarried = true;
        this.email = "raj@gmail.com";
    }
    User.prototype.changeEmail = function (newEmail) {
        this.email = newEmail;
    };
    User.prototype.display = function () {
        console.log(this.username, this.id, this.isMarried, this.email);
    };
    return User;
}());
var user1 = new User();
user1.display();
var user2 = new User();
user2.username = "Ziya Khan";
user2.display();
