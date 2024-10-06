interface IRating {
    rate:number,
    count:number
}
export interface IProduct {
    category:string,
    id:number,
    description:string,
    title:string,
    price:number
    rating:IRating
    image:string
}