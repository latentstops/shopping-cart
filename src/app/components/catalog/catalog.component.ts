import {Component, OnInit, AfterViewInit} from '@angular/core';
import {CartService} from "../../services/cart/cart.service";
import {ItemService} from "../../services/item/item.service";
import {Item} from "../../models/item";

@Component({
    selector: 'app-catalog',
    templateUrl: 'catalog.component.html',
    styleUrls: ['catalog.component.css']
})
export class CatalogComponent {
    items;
    constructor( private itemService:ItemService ) {
    }

    ngOnInit() {
        this.itemService.getAllItems().subscribe(items => this.items = items);
    }
}
