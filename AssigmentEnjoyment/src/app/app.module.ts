import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { StoreComponent } from './store/store.component';
import { CartDetailComponent } from './store/cartDetail.component';
import { couponComponent } from './store/coupon.component';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule.forRoot([
      {
        path: "store",
        component: StoreComponent,
      },
      {
        path: "cart",
        component: CartDetailComponent,
      },
      {
        path: "coupon",
        component: couponComponent
      },
      { path: "**", redirectTo: "/coupon" },
    ]),
  ],
  providers: [],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
