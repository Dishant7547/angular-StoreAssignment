export class productDetails{
  id: number;
  productId: number;
  description: string;
  price: number;
constructor(id: number,productId: number,description: string,price:number) {
this.id = id;
this.productId =productId;
this.description = description;
this.price = price;
}
}
