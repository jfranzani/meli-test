import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { SearchModule } from './search/search.module';
import { SearchBoxModule } from './components/search-box/search-box.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    SearchModule,
    SearchBoxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
