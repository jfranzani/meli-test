import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductDetailComponent } from './product-detail.component';
import { SharedModule } from '../shared/shared.module';
import { MeliBreadcrumbModule } from '../components/meli-breadcrumb/meli-breadcrumb.module';


@NgModule({
  declarations: [ProductDetailComponent],
  imports: [
    CommonModule,
    ProductDetailRoutingModule,
    MeliBreadcrumbModule,
    SharedModule
  ]
})
export class ProductDetailModule { }
