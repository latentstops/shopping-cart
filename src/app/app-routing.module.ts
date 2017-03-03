import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CatalogComponent} from "./components/catalog/catalog.component";
import {CartComponent} from "./components/cart/cart.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: 'catalog', pathMatch: 'full' },
            { path: 'catalog', component: CatalogComponent },
            { path: 'cart', component: CartComponent},
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}