import {Injectable} from '@angular/core';

@Injectable()
export class CartService {

    items = this.tryParseAndSafelyReturn();
    totalBalance = 0;

    constructor() {
        this.initItems();
        this.calculateTotalBalance();
    }

    initItems(){

        this.items = this.tryParseAndSafelyReturn();

    }

    tryParseAndSafelyReturn(){

        let itemsInStorageAsString = localStorage.getItem('items') || '[]';

        let itemsInStorage = [];

        try {
            itemsInStorage = JSON.parse(itemsInStorageAsString) || [];
        }catch (e){
            localStorage.setItem('items', '[]');
        }

        return itemsInStorage;
    }

    saveInStorage(){

        localStorage.setItem('items', JSON.stringify(this.items));

    }

    getItems(){

        return this.items;

    }

    add( item ){

        let index = this.findIndex(item);

        if(index == -1) {

            item.count = 1;

            this.items.push(item);
        }

        this.saveInStorage();
        this.calculateTotalBalance();
    }

    remove( item ){

        let index = this.findIndex(item);

        item.is_added = false;

        this.items.splice(index, 1);

        this.saveInStorage();
        this.calculateTotalBalance();

    }

    private findIndex(item){

        return this.items.findIndex( i => i.id == item.id);

    }

    calculateTotalBalance(){

        this.totalBalance = 0;
        // this.totalBalance = this.items.map((item) => +item.price || 0).reduce( ( p, n ) => p + n );

        this.items.forEach( ( item ) => {

            this.totalBalance += ( +item.price || 0) * ( +item.count || 0 );

        } );

        return this.totalBalance;

    }

}
