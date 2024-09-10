function f1() {
  let price = 100;

  if (true) {
    console.log(price);
    let myname = "Ziya";
  }

  if (true) {
    console.log(price);
    console.log(myname);
  }

  if (false) {
  } else {
    console.log(price);
  }
}

if (true) {
  //   console.log(price); //We cannot access
}

f1();
