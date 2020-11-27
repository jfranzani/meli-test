import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchResultRoutingModule } from './search-result-routing.module';
import { SearchResultComponent } from './search-result.component';
import { SearchItemComponent } from './components/search-item/search-item.component';


@NgModule({
  declarations: [SearchResultComponent, SearchItemComponent],
  imports: [
    CommonModule,
    SearchResultRoutingModule
  ]
})
export class SearchResultModule { }
