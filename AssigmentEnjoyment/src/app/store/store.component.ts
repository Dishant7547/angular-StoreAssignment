import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "../model/models/product.model";
import { ProductRepository } from "../model/repositories/product.repository";
import { Cart } from "../model/models/cart.model";
import { productDetails } from "../model/models/productDetails.model";
import { ProductDetailsRepository } from "../model/repositories/productDetails.repository";
import { UrlHistoryService } from "../model/urlHistory.service";

@Component({
  selector: "store",
  templateUrl: "store.component.html",
  providers:[ProductDetailsRepository,UrlHistoryService],
})
export class StoreComponent implements OnInit{
  selectedCategory: string | undefined;

  public productsPerPage = 4;
  public selectedPage = 1;

  constructor(
    private repository: ProductRepository,
    private DetailsRepository : ProductDetailsRepository,
    private urlHistory : UrlHistoryService,
    private cart: Cart,
    private router: Router
  ) {}

  ngOnInit(): void {
    const currentUrl = window.location.href;
    this.urlHistory.addUrl(currentUrl);
  }

  get products(): Product[] {
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    return this.repository
      .getProducts(this.selectedCategory)
      .slice(pageIndex, pageIndex + this.productsPerPage);
  }

   fetchProductDetailsPrice(productId:number):number{
    let details = this.DetailsRepository.getProductDetails(productId);
    if(details!= null && details.length > 0){
      return details[0].price;
    }
    else{
      return 0;
    }
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }

  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
  }

  changePage(newPage: number) {
    this.selectedPage = newPage;
  }

  changePageSize(newSize: any) {
    this.productsPerPage = Number(newSize.target.value);
    this.changePage(1);
  }

  get pageNumbers(): number[] {
    return Array(
      Math.ceil(
        this.repository.getProducts(this.selectedCategory).length /
          this.productsPerPage
      )
    )
      .fill(0)
      .map((x, i) => i + 1);
  }

  addProductToCart(product: Product) {
    let detail = this.DetailsRepository.getProductDetails(product.id);
    this.cart.addLine(product,detail[0]);
    this.router.navigateByUrl("/cart");
  }

  ShowDesc(shw : HTMLParagraphElement,id:number){
    let details = this.DetailsRepository.getProductDetails(id);
    if(details!= null && details.length > 0){
      shw.textContent = details[0].description;
    }
    else{
      shw.textContent = "";
    }
  }
}
