import { Component, OnInit } from "@angular/core";
import { Cart } from "../model/models/cart.model";
import { UrlHistoryService } from "../model/urlHistory.service";

@Component({
    selector: "cart-summary",
    templateUrl: "cartSummary.component.html"
})
export class CartSummaryComponent {

    constructor(public cart: Cart) { }
}
