import { Component, OnInit, Input } from '@angular/core';

import { CartService } from '../../../services/cart/cart.service';

@Component( {
  selector: 'app-price-info',
  templateUrl: 'price-info.component.html',
  styleUrls: [ 'price-info.component.css' ]
} )
export class PriceInfoComponent implements OnInit {

  constructor( public cartService: CartService ) {
  }

  ngOnInit() {
  }

  @Input() items;

}
