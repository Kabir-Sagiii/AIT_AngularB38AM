
class Product {
    pname:string
    private pid:number 
    private price:number

    get accessPrice(){
        return this.price
    }

    set changePrice(newPrice:number){
  this.price = newPrice
    }

    getPrice(){
        return this.price
    }

    constructor(){
        this.pname = "xyz"
        this.pid = 101 
        this.price = 8765
    }
}

   var p1 = new Product()
   console.log(p1.pname)

   var priceValue =   p1.accessPrice
   console.log(priceValue)

   p1.changePrice = 5678

   var priceValue =   p1.accessPrice
   console.log(priceValue)
