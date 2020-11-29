import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecimalsPriceComponent } from './decimals-price/decimals-price.component';

@NgModule({
  declarations: [DecimalsPriceComponent],
  imports: [CommonModule],
  exports: [DecimalsPriceComponent],
})
export class SharedModule {}
