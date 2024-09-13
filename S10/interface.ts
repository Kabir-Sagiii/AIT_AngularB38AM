interface IUser {

display():void;

changeAddress(data:any):any ;


}

interface IProduct {

    displayProduct():void;
    
    changePrice(newPrice:any):string ;
    
    
    }

class NewUser implements IUser,IProduct{
    display(): void {
        
    }

    changeAddress(data: any) {
        
    }
    displayProduct(): void {
        
    }

    changePrice(newPrice: any): string {
        return ""
    }
}