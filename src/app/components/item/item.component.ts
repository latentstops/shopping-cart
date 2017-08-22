import { Component, Input } from '@angular/core';
import { MdSnackBar } from '@angular/material';

import { Item } from '../../models/item';
import { CartService } from '../../services/cart/cart.service';

@Component( {
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: [ './item.component.css' ]
} )
export class ItemComponent {


  @Input() item;
  @Input() deletable;

  constructor( private cartService: CartService,
               public snackBar: MdSnackBar ) {
  }

  addToCart( item: Item ) {

    this.cartService.add( item );

  }

  removeFromCart( item: Item ) {

    this.cartService.remove( item );

  }

  onChange( e ) {

    const isChecked = this.item.is_added = e.checked;
    const isNotChecked = !isChecked;

    if ( isChecked ) {
      this.addToCart( this.item );
    } else if ( isNotChecked ) {
      this.removeFromCart( this.item );
    }

    const message = isChecked ? 'Added' : 'Removed';

    this.snackBar.open( this.item.short_name, message, {
      duration: 800
    } );

  }

  onCountChange( e ) {

    this.cartService.calculateTotalBalance();

  }

}
