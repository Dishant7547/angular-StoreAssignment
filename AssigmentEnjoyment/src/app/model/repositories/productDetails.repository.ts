
import { productDetails } from "../models/productDetails.model";
import { RestDataSource } from "../rest.datasource";
import { Injectable } from "@angular/core";


@Injectable()
export class ProductDetailsRepository {
  private allProductdetails: productDetails[] = [];

  constructor(private dataSource: RestDataSource) {
    dataSource.getProductDetails().subscribe((data) => {
      this.allProductdetails = data;
    });
  }

  getallProductDetails(){
    return this.allProductdetails;
  }

  getProductDetails(productId:number){
    return this.allProductdetails.filter(x=>x.productId == productId);
  }
}
