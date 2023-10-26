import { productDetails } from './productDetails.model';
import { Injectable } from "@angular/core";
import { Product } from "./product.model";

@Injectable()
export class Cart {
  public lines: CartLine[] = [];
  public itemCount: number = 0;
  public cartPrice: number = 0;
  public isCouponApplied : boolean = false;
  public discountAmount: number = 0;

  addLine(product: Product,detail:productDetails, quantity: number = 1) {
    let line = this.lines.find((line) => line.product.id == product.id);
    if (line != undefined) {
      line.quantity += quantity;
    } else {
      this.lines.push(new CartLine(product,detail, quantity));
    }
    this.recalculate();
  }

  updateQuantity(product: Product, quantity: any) {
    let line = this.lines.find((line) => line.product.id == product.id);
    if (line != undefined) {
      line.quantity = Number(quantity.target.value);
    }
    this.recalculate();
  }

  removeLine(id?: number) {
    let index = this.lines.findIndex((line) => line.product.id == id);
    this.lines.splice(index, 1);
    this.recalculate();
  }

  clear() {
    this.lines = [];
    this.itemCount = 0;
    this.cartPrice = 0;
  }

  private recalculate() {
    this.itemCount = 0;
    this.cartPrice = 0;
    this.lines.forEach((l) => {
      this.itemCount += l.quantity;
      if(this.isCouponApplied){
        this.cartPrice += l.quantity * l.lineTotal;
        let discounprice = (10 * this.cartPrice)/100;
        this.discountAmount = discounprice;
        this.cartPrice = discounprice;
      }else{
        this.cartPrice += l.quantity * l.lineTotal;
      }
    });
  }
}

export class CartLine {
  constructor(public product: Product,public productDetail:productDetails, public quantity: number) {}

  get lineTotal() {
    return this.quantity * (this.productDetail.price ?? 0);
  }
}
