import { Component, OnInit } from '@angular/core';

import { Item } from '../../models/item';
import { ItemService } from '../../services/item/item.service';

@Component( {
  selector: 'app-catalog',
  templateUrl: './catalog.component.html'
} )
export class CatalogComponent implements OnInit {
  items: Item[];

  constructor( private itemService: ItemService ) {
  }

  ngOnInit() {
    this.itemService.getAllItems().subscribe( items => this.items = items );
  }
}
