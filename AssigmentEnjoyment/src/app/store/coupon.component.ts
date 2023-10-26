import { Component, OnInit } from '@angular/core';
import { UrlHistoryService } from '../model/urlHistory.service';
import { Cart } from '../model/models/cart.model';
import { Router } from '@angular/router';

@Component({
  selector: 'coupon',
  templateUrl: './coupon.component.html'
})

export class couponComponent {
  constructor(private urlService: UrlHistoryService,private cart:Cart,private router:Router) { }

  ApplyTheDiscount(){
    let check = this.urlService.getVisitedUrls();
    this.cart.isCouponApplied = true;
    this.GetOut();
  }

  GetOut(){
    let allUrls = this.urlService.getVisitedUrls();
    if(allUrls.length > 0){// if not anything . default . go to store . otherwise  go to last .
      let laterstUrl = allUrls[allUrls.length - 1];
      window.location.href = laterstUrl;
    }
    else{
      this.router.navigateByUrl("/store");
    }
  }
}
