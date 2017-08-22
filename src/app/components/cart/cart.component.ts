import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { ItemService } from '../../services/item/item.service';

@Component( {
  selector: 'app-cart',
  templateUrl: './cart.component.html'
} )
export class CartComponent implements OnInit {

  items = [];

  constructor( private cartService: CartService ) {
  }

  ngOnInit() {

    this.items = this.cartService.getItems();

  }

}
