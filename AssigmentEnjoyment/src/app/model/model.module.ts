import { NgModule } from "@angular/core";
import { StaticDataSource } from "./static.datasource";


import { RestDataSource } from "./rest.datasource";
import { HttpClientModule } from "@angular/common/http";
import { OrderRepository } from "./repositories/order.repository";
import { Order } from "./models/order.model";
import { Cart } from "./models/cart.model";
import { ProductRepository } from "./repositories/product.repository";
import { ProductDetailsRepository } from "./repositories/productDetails.repository";

@NgModule({
  imports: [HttpClientModule],
  providers: [ProductRepository,ProductDetailsRepository, Cart, Order, OrderRepository,
    { provide: StaticDataSource, useClass: RestDataSource },
    RestDataSource]
})
export class ModelModule { }

// services are called as shared(by nature)


