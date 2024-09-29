
  function myDecorator(myclass:Function){
    console.log("Decorator is called")
 
    console.log(myclass)

  }

  @myDecorator
  class MyClass {
    constructor(){
        console.log("class is intansiated")
    }
  }

  var myclass = new MyClass()