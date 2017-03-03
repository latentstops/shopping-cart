import {Component, OnInit, Input, ComponentFactoryResolver, ViewContainerRef} from '@angular/core';
import {MdSnackBar} from "@angular/material";

@Component({
    selector: 'app-item-cart-notification',
    templateUrl: 'item-cart-notification.component.html',
    styleUrls: ['item-cart-notification.component.css']
})
export class ItemCartNotificationComponent implements OnInit {



    @Input() message;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
                private viewContainerRef: ViewContainerRef
    ) {
    }

    ngOnInit() {}

    private sayHello() {
        const factory = this.componentFactoryResolver.resolveComponentFactory ( MdSnackBar );
        const ref = this.viewContainerRef.createComponent(factory);
        ref.changeDetectorRef.detectChanges();
    }

}
