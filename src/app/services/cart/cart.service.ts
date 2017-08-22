import { Injectable } from '@angular/core';

@Injectable()
export class CartService {

  items = this.tryParseAndSafelyReturn();
  totalBalance = 0;

  constructor() {
    this.initItems();
    this.calculateTotalBalance();
  }

  initItems() {

    this.items = this.tryParseAndSafelyReturn();

  }

  tryParseAndSafelyReturn() {

    const itemsInStorageAsString = localStorage.getItem( 'items' ) || '[]';

    let itemsInStorage = [];

    try {
      itemsInStorage = JSON.parse( itemsInStorageAsString ) || [];
    } catch ( e ) {
      localStorage.setItem( 'items', '[]' );
    }

    return itemsInStorage;
  }

  saveInStorage() {

    localStorage.setItem( 'items', JSON.stringify( this.items ) );

  }

  getItems() {

    return this.items;

  }

  add( item ) {

    const index = this.findIndex( item );

    if ( index === -1 ) {

      item.count = 1;

      this.items.push( item );
    }

    this.saveInStorage();
    this.calculateTotalBalance();
  }

  remove( item ) {

    const index = this.findIndex( item );

    item.is_added = false;

    this.items.splice( index, 1 );

    this.saveInStorage();
    this.calculateTotalBalance();

  }

  private findIndex( item ) {

    return this.items.findIndex( i => i.id === item.id );

  }

  calculateTotalBalance() {

    this.totalBalance = this.items.reduce( ( acc, item ) => {

      const price = +item.price || 0;
      const count = +item.count || 0;
      acc += price * count;
      return acc;

    }, 0 );

    return this.totalBalance;

  }

}
