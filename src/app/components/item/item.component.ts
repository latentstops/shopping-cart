import {Component, OnInit, Input} from '@angular/core';
import {CartService} from "../../services/cart/cart.service";
import {ItemService} from "../../services/item/item.service";
import {Item} from "../../models/item";
import {MdSnackBar} from "@angular/material";
import {ItemCartNotificationComponent} from "./item-cart-notification/item-cart-notification.component";

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

    constructor(
        private cartService: CartService,
        public snackBar: MdSnackBar
    ) {
    }

    ngOnInit() {
    }

    @Input() item;
    @Input() deletable;

    addToCart(item: Item) {

        this.cartService.add(item);

    }

    removeFromCart(item: Item){

        this.cartService.remove(item);

    }

    onChange(e){

        let isChecked = this.item.is_added = e.checked;

         isChecked && this.addToCart(this.item);
        !isChecked && this.removeFromCart(this.item);

        let message = isChecked ? `Added` : 'Removed';

        this.snackBar.open( this.item.short_name, message,  {
            duration: 500
        } );

    }

    onCountChange(e){

        this.cartService.calculateTotalBalance();

    }

}
