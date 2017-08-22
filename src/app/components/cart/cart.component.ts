import { Component, OnInit } from '@angular/core';

import { Item } from '../../models/item';
import { CartService } from '../../services/cart/cart.service';

@Component( {
  selector: 'app-cart',
  templateUrl: './cart.component.html'
} )
export class CartComponent implements OnInit {

  items: Item[] = [];

  constructor( private cartService: CartService ) {
  }

  ngOnInit() {

    this.items = this.cartService.getItems();

  }

}
