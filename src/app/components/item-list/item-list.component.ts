import {Component, OnInit, Input} from '@angular/core';
import {ItemService} from "../../services/item/item.service";

@Component({
    selector: 'app-item-list',
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {

    @Input() items;
    @Input() deletable;

}
