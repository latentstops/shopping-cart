import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CartService } from './services/cart/cart.service';
import { ItemService } from './services/item/item.service';
import { CatalogComponent } from './components/catalog/catalog.component';
import { CartComponent } from './components/cart/cart.component';
import { ItemComponent } from './components/item/item.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { PriceInfoComponent } from './components/cart/price-info/price-info.component';
import { CutAfterPipe } from './pipes/cut-after/cut-after.pipe';


@NgModule( {
  declarations: [
    AppComponent,
    CatalogComponent,
    CartComponent,
    ItemComponent,
    CutAfterPipe,
    ItemListComponent,
    PriceInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [ CartService, ItemService ],
  bootstrap: [ AppComponent ],
  entryComponents: []
} )
export class AppModule {
}
