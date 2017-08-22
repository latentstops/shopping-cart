import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Item } from '../../models/item';
import { Observable } from 'rxjs';
import { CartService } from '../cart/cart.service';

@Injectable()
export class ItemService {

  private endpoint = '/assets/laptops.json';
  private items: Item[] = [];

  constructor( private http: Http,
               private cartService: CartService ) {
  }

  getAllItems() {

    if ( this.items.length ) {
      return Observable.of( this.items );
    } else {
      return this.requestForItems();
    }

  }

  requestForItems() {

    return this.http
      .get( this.endpoint )
      .map( r => {

        const itemsJSON = r.json();

        this.cartService.getItems().forEach( item => {

          const index = itemsJSON.findIndex( itemJSON => itemJSON.id === item.id );

          if ( index === -1 ) { return; }

          itemsJSON[ index ] = item;

        } );

        return this.items = itemsJSON;
      } );

  }

}
