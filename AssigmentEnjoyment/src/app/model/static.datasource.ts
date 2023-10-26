import { Injectable } from "@angular/core";
import { Observable, from } from "rxjs";
import { Order } from "./models/order.model";
import { Product } from "./models/product.model";

@Injectable()
export class StaticDataSource {
    private products: Product[] = [
        new Product(1, "Product 1", "Category 1"),
        new Product(2, "Product 2", "Category 1"),
        new Product(3, "Product 3", "Category 1"),
        new Product(4, "Product 4", "Category 1"),
        new Product(5, "Product 5", "Category 1"),
    ];

    getProducts(): Observable<Product[]> {
        return from([this.products]);
    }

    saveOrder(order: Order): Observable<Order> {
        console.log(JSON.stringify(order));
        return from([order]);
    }
}
