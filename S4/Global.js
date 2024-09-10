var city = "hyd"; // global scoped

if (true) {
  console.log(city);
}

function f1() {
  //Global Scope
  var id = 101;
  console.log(city);
}

console.log(city);
