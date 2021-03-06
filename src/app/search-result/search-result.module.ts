import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchResultRoutingModule } from './search-result-routing.module';
import { SearchResultComponent } from './search-result.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SharedModule } from '../shared/shared.module';
import { MeliBreadcrumbModule } from '../components/meli-breadcrumb/meli-breadcrumb.module';

@NgModule({
  declarations: [SearchResultComponent, SearchItemComponent],
  imports: [
    CommonModule,
    SearchResultRoutingModule,
    SharedModule,
    MeliBreadcrumbModule,
  ],
})
export class SearchResultModule {}
