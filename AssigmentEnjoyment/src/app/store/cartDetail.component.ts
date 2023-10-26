import { UrlHistoryService } from './../model/urlHistory.service';
import { Component, OnInit } from "@angular/core";
import { Cart } from "../model/models/cart.model";

@Component({
    templateUrl: "cartDetail.component.html"
})
export class CartDetailComponent implements OnInit {

    constructor(public cart: Cart,private urlHistory: UrlHistoryService) { }

  ngOnInit(): void {
    const currentUrl = window.location.href;
    this.urlHistory.addUrl(currentUrl); //saving the url.
  }

  isDisountApply = this.cart.isCouponApplied;
  discount = this.cart.discountAmount;
}
