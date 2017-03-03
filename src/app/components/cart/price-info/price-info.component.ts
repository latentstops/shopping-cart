import {Component, OnInit, Input} from '@angular/core';
import {CartService} from "../../../services/cart/cart.service";

@Component({
    selector: 'app-price-info',
    templateUrl: 'price-info.component.html',
    styleUrls: ['price-info.component.css']
})
export class PriceInfoComponent implements OnInit {

    private _cartItems;
    totalBalance;

    constructor( public cartService:CartService ) {
    }

    ngOnInit() {
    }

    @Input()
    set cartItems(val) {

        this._cartItems = val;
        this.calculateTotalBalance();

    };

    get cartItems() {

        return this._cartItems;

    };

    calculateTotalBalance(){

        this.totalBalance = this._cartItems.map((item) => +item.price || 0).reduce( ( p, n ) => p + n );

    }

}
