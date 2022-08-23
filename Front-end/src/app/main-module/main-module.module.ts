import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { MainModuleComponent } from './main-module.component';
import { HeaderComponent } from './main-component/header/header.component';
import { FooterComponent } from './main-component/footer/footer.component';
import { ContactUsComponent } from './main-component/contact-us/contact-us.component';
import { ProductsComponent } from './main-component/products/products.component';
import { ViewproductComponent } from './main-component/viewproduct/viewproduct.component';
import { CheckOutComponent } from './main-component/check-out/check-out.component';
import { EditCardComponent } from './main-component/edit-card/edit-card.component';
import { PurchaseSuccessfulComponent } from './main-component/purchase-successful/purchase-successful.component';
import { PurchaseFailedComponent } from './main-component/purchase-failed/purchase-failed.component';


@NgModule({
  declarations: [
    MainModuleComponent,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    ProductsComponent,
    ViewproductComponent,
    CheckOutComponent,
    EditCardComponent,
    PurchaseSuccessfulComponent,
    PurchaseFailedComponent
  ],
  imports: [
    CommonModule,
    MainModuleRoutingModule
  ]
})
export class MainModuleModule { }
