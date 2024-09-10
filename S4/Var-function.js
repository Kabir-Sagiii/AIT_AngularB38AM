function f1() {
  var price = 100;

  if (true) {
    console.log(price);
    var myname = "sagar";
  }

  if (true) {
    console.log(price);
    console.log(myname);
  }

  if (false) {
  } else {
    console.log(price);
    console.log(myname);
  }

  console.log(myname);
}

if (true) {
  //   console.log(price); //We cannot access
}

f1();
