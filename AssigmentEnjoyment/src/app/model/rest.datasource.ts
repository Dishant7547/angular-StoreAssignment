import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { Product } from "./models/product.model";
import { HttpHeaders } from "@angular/common/http";
import { Order } from "./models/order.model";
import { productDetails } from "./models/productDetails.model";

const PROTOCOL = "http";
const PORT = 4030;

@Injectable()
export class RestDataSource {
  baseUrl: string;
  auth_token?: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + "products");
  }

  getProductDetails(): Observable<productDetails[]> {
    return this.http.get<productDetails[]>(this.baseUrl + "productDetails");
  }

  saveOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.baseUrl + "orders", order);
  }

  saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl + "products", product);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(
      `${this.baseUrl}products/${product.id}`,
      product
    );
  }

  deleteProduct(id?: number): Observable<Product> {
    return this.http.delete<Product>(`${this.baseUrl}products/${id}`);
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl + "orders");
  }

  deleteOrder(id?: number): Observable<Order> {
    return this.http.delete<Order>(`${this.baseUrl}orders/${id}`);
  }

  updateOrder(order: Order): Observable<Order> {
    return this.http.put<Order>(`${this.baseUrl}orders/${order.id}`, order);
  }
}