webpackJsonp([0,3],{

/***/ 1138:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(545);


/***/ },

/***/ 130:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CartService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CartService = (function () {
    function CartService() {
        this.items = this.tryParseAndSafelyReturn();
        this.totalBalance = 0;
        this.initItems();
        this.calculateTotalBalance();
    }
    CartService.prototype.initItems = function () {
        this.items = this.tryParseAndSafelyReturn();
    };
    CartService.prototype.tryParseAndSafelyReturn = function () {
        var itemsInStorageAsString = localStorage.getItem('items') || '[]';
        var itemsInStorage = [];
        try {
            itemsInStorage = JSON.parse(itemsInStorageAsString) || [];
        }
        catch (e) {
            localStorage.setItem('items', '[]');
        }
        return itemsInStorage;
    };
    CartService.prototype.saveInStorage = function () {
        localStorage.setItem('items', JSON.stringify(this.items));
    };
    CartService.prototype.getItems = function () {
        return this.items;
    };
    CartService.prototype.add = function (item) {
        var index = this.findIndex(item);
        if (index == -1) {
            item.count = 1;
            this.items.push(item);
        }
        this.saveInStorage();
        this.calculateTotalBalance();
    };
    CartService.prototype.remove = function (item) {
        var index = this.findIndex(item);
        item.is_added = false;
        this.items.splice(index, 1);
        this.saveInStorage();
        this.calculateTotalBalance();
    };
    CartService.prototype.findIndex = function (item) {
        return this.items.findIndex(function (i) { return i.id == item.id; });
    };
    CartService.prototype.calculateTotalBalance = function () {
        var _this = this;
        this.totalBalance = 0;
        this.items.forEach(function (item) {
            _this.totalBalance += (+item.price || 0) * (+item.count || 0);
        });
        return this.totalBalance;
    };
    CartService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], CartService);
    return CartService;
}());
//# sourceMappingURL=F:/Programming/web/my/interview/dubai/shopping-cart/src/cart.service.js.map

/***/ },

/***/ 465:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cart_cart_service__ = __webpack_require__(130);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartComponent = (function () {
    function CartComponent(cartService) {
        this.cartService = cartService;
        this.items = [];
    }
    CartComponent.prototype.ngOnInit = function () {
        this.items = this.cartService.getItems();
    };
    CartComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-cart',
            template: __webpack_require__(874),
            styles: [__webpack_require__(867)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_cart_cart_service__["a" /* CartService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_cart_cart_service__["a" /* CartService */]) === 'function' && _a) || Object])
    ], CartComponent);
    return CartComponent;
    var _a;
}());
//# sourceMappingURL=F:/Programming/web/my/interview/dubai/shopping-cart/src/cart.component.js.map

/***/ },

/***/ 466:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_item_item_service__ = __webpack_require__(467);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CatalogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CatalogComponent = (function () {
    function CatalogComponent(itemService) {
        this.itemService = itemService;
    }
    CatalogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemService.getAllItems().subscribe(function (items) { return _this.items = items; });
    };
    CatalogComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-catalog',
            template: __webpack_require__(876),
            styles: [__webpack_require__(869)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_item_item_service__["a" /* ItemService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_item_item_service__["a" /* ItemService */]) === 'function' && _a) || Object])
    ], CatalogComponent);
    return CatalogComponent;
    var _a;
}());
//# sourceMappingURL=F:/Programming/web/my/interview/dubai/shopping-cart/src/catalog.component.js.map

/***/ },

/***/ 467:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(881);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart_service__ = __webpack_require__(130);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ItemService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ItemService = (function () {
    function ItemService(http, cartService) {
        this.http = http;
        this.cartService = cartService;
        this.endpoint = 'http://localhost:4200/assets/laptops.json';
        this.items = [];
    }
    ItemService.prototype.getAllItems = function () {
        var _this = this;
        if (this.items.length)
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"](function (observer) {
                observer.next(_this.items);
            });
        else
            return this.requestForItems();
    };
    ItemService.prototype.requestForItems = function () {
        var _this = this;
        return this.http
            .get(this.endpoint)
            .map(function (r) {
            var itemsJSON = r.json();
            _this.cartService.getItems().forEach(function (item) {
                var index = itemsJSON.findIndex(function (itemJSON) { return itemJSON.id == item.id; });
                if (index == -1)
                    return;
                itemsJSON[index] = item;
            });
            return _this.items = itemsJSON;
        });
    };
    ItemService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__cart_cart_service__["a" /* CartService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__cart_cart_service__["a" /* CartService */]) === 'function' && _b) || Object])
    ], ItemService);
    return ItemService;
    var _a, _b;
}());
//# sourceMappingURL=F:/Programming/web/my/interview/dubai/shopping-cart/src/item.service.js.map

/***/ },

/***/ 544:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 544;


/***/ },

/***/ 545:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(702);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_40" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=F:/Programming/web/my/interview/dubai/shopping-cart/src/main.js.map

/***/ },

/***/ 700:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_catalog_catalog_component__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_cart_cart_component__ = __webpack_require__(465);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot([
                    { path: '', redirectTo: 'catalog', pathMatch: 'full' },
                    { path: 'catalog', component: __WEBPACK_IMPORTED_MODULE_2__components_catalog_catalog_component__["a" /* CatalogComponent */] },
                    { path: 'cart', component: __WEBPACK_IMPORTED_MODULE_3__components_cart_cart_component__["a" /* CartComponent */] },
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=F:/Programming/web/my/interview/dubai/shopping-cart/src/app-routing.module.js.map

/***/ },

/***/ 701:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(873),
            styles: [__webpack_require__(866)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=F:/Programming/web/my/interview/dubai/shopping-cart/src/app.component.js.map

/***/ },

/***/ 702:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_catalog_catalog_component__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_cart_cart_component__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_cart_cart_service__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_item_item_service__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_item_item_component__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pipes_cut_after_cut_after_pipe__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_item_item_cart_notification_item_cart_notification_component__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_item_list_item_list_component__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_cart_price_info_price_info_component__ = __webpack_require__(703);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_catalog_catalog_component__["a" /* CatalogComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_cart_cart_component__["a" /* CartComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_item_item_component__["a" /* ItemComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pipes_cut_after_cut_after_pipe__["a" /* CutAfterPipe */],
                __WEBPACK_IMPORTED_MODULE_13__components_item_item_cart_notification_item_cart_notification_component__["a" /* ItemCartNotificationComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_item_list_item_list_component__["a" /* ItemListComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_cart_price_info_price_info_component__["a" /* PriceInfoComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["e" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__services_cart_cart_service__["a" /* CartService */], __WEBPACK_IMPORTED_MODULE_10__services_item_item_service__["a" /* ItemService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_13__components_item_item_cart_notification_item_cart_notification_component__["a" /* ItemCartNotificationComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=F:/Programming/web/my/interview/dubai/shopping-cart/src/app.module.js.map

/***/ },

/***/ 703:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cart_cart_service__ = __webpack_require__(130);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PriceInfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PriceInfoComponent = (function () {
    function PriceInfoComponent(cartService) {
        this.cartService = cartService;
    }
    PriceInfoComponent.prototype.ngOnInit = function () { };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], PriceInfoComponent.prototype, "cartItems", void 0);
    PriceInfoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-price-info',
            template: __webpack_require__(875),
            styles: [__webpack_require__(868)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_cart_cart_service__["a" /* CartService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_cart_cart_service__["a" /* CartService */]) === 'function' && _a) || Object])
    ], PriceInfoComponent);
    return PriceInfoComponent;
    var _a;
}());
//# sourceMappingURL=F:/Programming/web/my/interview/dubai/shopping-cart/src/price-info.component.js.map

/***/ },

/***/ 704:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ItemListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ItemListComponent = (function () {
    function ItemListComponent() {
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], ItemListComponent.prototype, "items", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], ItemListComponent.prototype, "deletable", void 0);
    ItemListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-item-list',
            template: __webpack_require__(877),
            styles: [__webpack_require__(870)]
        }), 
        __metadata('design:paramtypes', [])
    ], ItemListComponent);
    return ItemListComponent;
}());
//# sourceMappingURL=F:/Programming/web/my/interview/dubai/shopping-cart/src/item-list.component.js.map

/***/ },

/***/ 705:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(269);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ItemCartNotificationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemCartNotificationComponent = (function () {
    function ItemCartNotificationComponent(componentFactoryResolver, viewContainerRef) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.viewContainerRef = viewContainerRef;
    }
    ItemCartNotificationComponent.prototype.ngOnInit = function () { };
    ItemCartNotificationComponent.prototype.sayHello = function () {
        var factory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdSnackBar */]);
        var ref = this.viewContainerRef.createComponent(factory);
        ref.changeDetectorRef.detectChanges();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], ItemCartNotificationComponent.prototype, "message", void 0);
    ItemCartNotificationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-item-cart-notification',
            template: __webpack_require__(878),
            styles: [__webpack_require__(871)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ComponentFactoryResolver */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ComponentFactoryResolver */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ViewContainerRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ViewContainerRef */]) === 'function' && _b) || Object])
    ], ItemCartNotificationComponent);
    return ItemCartNotificationComponent;
    var _a, _b;
}());
//# sourceMappingURL=F:/Programming/web/my/interview/dubai/shopping-cart/src/item-cart-notification.component.js.map

/***/ },

/***/ 706:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cart_cart_service__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(269);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemComponent = (function () {
    function ItemComponent(cartService, snackBar) {
        this.cartService = cartService;
        this.snackBar = snackBar;
    }
    ItemComponent.prototype.ngOnInit = function () {
    };
    ItemComponent.prototype.addToCart = function (item) {
        this.cartService.add(item);
    };
    ItemComponent.prototype.removeFromCart = function (item) {
        this.cartService.remove(item);
    };
    ItemComponent.prototype.onChange = function (e) {
        var isChecked = this.item.is_added = e.checked;
        isChecked && this.addToCart(this.item);
        !isChecked && this.removeFromCart(this.item);
        var message = isChecked ? "Added" : 'Removed';
        this.snackBar.open(this.item.short_name, message, {
            duration: 500
        });
    };
    ItemComponent.prototype.onCountChange = function (e) {
        this.cartService.calculateTotalBalance();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], ItemComponent.prototype, "item", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], ItemComponent.prototype, "deletable", void 0);
    ItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-item',
            template: __webpack_require__(879),
            styles: [__webpack_require__(872)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_cart_cart_service__["a" /* CartService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_cart_cart_service__["a" /* CartService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdSnackBar */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdSnackBar */]) === 'function' && _b) || Object])
    ], ItemComponent);
    return ItemComponent;
    var _a, _b;
}());
//# sourceMappingURL=F:/Programming/web/my/interview/dubai/shopping-cart/src/item.component.js.map

/***/ },

/***/ 707:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CutAfterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CutAfterPipe = (function () {
    function CutAfterPipe() {
    }
    CutAfterPipe.prototype.transform = function (value, args) {
        return value.substr(0, args) + (args < value.length ? '...' : '');
    };
    CutAfterPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Pipe */])({
            name: 'cutAfter'
        }), 
        __metadata('design:paramtypes', [])
    ], CutAfterPipe);
    return CutAfterPipe;
}());
//# sourceMappingURL=F:/Programming/web/my/interview/dubai/shopping-cart/src/cut-after.pipe.js.map

/***/ },

/***/ 708:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=F:/Programming/web/my/interview/dubai/shopping-cart/src/environment.js.map

/***/ },

/***/ 709:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=F:/Programming/web/my/interview/dubai/shopping-cart/src/polyfills.js.map

/***/ },

/***/ 866:
/***/ function(module, exports) {

module.exports = ".container-fluid {\r\n    margin-top: 15px;\r\n}\r\n\r\nmd-toolbar {\r\n    margin-bottom: 15px;\r\n}"

/***/ },

/***/ 867:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 868:
/***/ function(module, exports) {

module.exports = "body {\r\n    padding-top: 40px;\r\n    padding-bottom: 40px;\r\n\r\n}\r\n\r\n/* COMMON PRICING STYLES */\r\n.panel.price,\r\n.panel.price>.panel-heading{\r\n    border-radius:0px;\r\n    -moz-transition: all .3s ease;\r\n    -o-transition:  all .3s ease;\r\n    -webkit-transition:  all .3s ease;\r\n}\r\n.panel.price:hover{\r\n    box-shadow: 0px 0px 30px rgba(0,0,0, .2);\r\n}\r\n.panel.price:hover>.panel-heading{\r\n    box-shadow: 0px 0px 30px rgba(0,0,0, .2) inset;\r\n}\r\n\r\n\r\n.panel.price>.panel-heading{\r\n    box-shadow: 0px 5px 0px rgba(50,50,50, .2) inset;\r\n    text-shadow:0px 3px 0px rgba(50,50,50, .6);\r\n}\r\n\r\n.price .list-group-item{\r\n    border-bottom-:1px solid rgba(250,250,250, .5);\r\n}\r\n\r\n.panel.price .list-group-item:last-child {\r\n    border-bottom-right-radius: 0px;\r\n    border-bottom-left-radius: 0px;\r\n}\r\n.panel.price .list-group-item:first-child {\r\n    border-top-right-radius: 0px;\r\n    border-top-left-radius: 0px;\r\n}\r\n\r\n.price .panel-footer {\r\n    color: #fff;\r\n    border-bottom:0px;\r\n    background-color:  rgba(0,0,0, .1);\r\n    box-shadow: 0px 3px 0px rgba(0,0,0, .3);\r\n}\r\n\r\n\r\n.panel.price .btn{\r\n    box-shadow: 0 -1px 0px rgba(50,50,50, .2) inset;\r\n    border:0px;\r\n}\r\n\r\n/* green panel */\r\n\r\n\r\n.price.panel-green>.panel-heading {\r\n    color: #fff;\r\n    background-color: #57AC57;\r\n    border-color: #71DF71;\r\n    border-bottom: 1px solid #71DF71;\r\n}\r\n\r\n\r\n.price.panel-green>.panel-body {\r\n    color: #fff;\r\n    background-color: #65C965;\r\n}\r\n\r\n\r\n.price.panel-green>.panel-body .lead{\r\n    text-shadow: 0px 3px 0px rgba(50,50,50, .3);\r\n}\r\n\r\n.price.panel-green .list-group-item {\r\n    color: #333;\r\n    background-color: rgba(50,50,50, .01);\r\n    font-weight:600;\r\n    text-shadow: 0px 1px 0px rgba(250,250,250, .75);\r\n}\r\n\r\n/* blue panel */\r\n\r\n\r\n.price.panel-blue>.panel-heading {\r\n    color: #fff;\r\n    background-color: #608BB4;\r\n    border-color: #78AEE1;\r\n    border-bottom: 1px solid #78AEE1;\r\n}\r\n\r\n\r\n.price.panel-blue>.panel-body {\r\n    color: #fff;\r\n    background-color: #73A3D4;\r\n}\r\n\r\n\r\n.price.panel-blue>.panel-body .lead{\r\n    text-shadow: 0px 3px 0px rgba(50,50,50, .3);\r\n}\r\n\r\n.price.panel-blue .list-group-item {\r\n    color: #333;\r\n    background-color: rgba(50,50,50, .01);\r\n    font-weight:600;\r\n    text-shadow: 0px 1px 0px rgba(250,250,250, .75);\r\n}\r\n\r\n/* red price */\r\n\r\n\r\n.price.panel-red>.panel-heading {\r\n    color: #fff;\r\n    background-color: #D04E50;\r\n    border-color: #FF6062;\r\n    border-bottom: 1px solid #FF6062;\r\n}\r\n\r\n\r\n.price.panel-red>.panel-body {\r\n    color: #fff;\r\n    background-color: #EF5A5C;\r\n}\r\n\r\n\r\n\r\n\r\n.price.panel-red>.panel-body .lead{\r\n    text-shadow: 0px 3px 0px rgba(50,50,50, .3);\r\n}\r\n\r\n.price.panel-red .list-group-item {\r\n    color: #333;\r\n    background-color: rgba(50,50,50, .01);\r\n    font-weight:600;\r\n    text-shadow: 0px 1px 0px rgba(250,250,250, .75);\r\n}\r\n\r\n/* grey price */\r\n\r\n\r\n.price.panel-grey>.panel-heading {\r\n    color: #fff;\r\n    background-color: #6D6D6D;\r\n    border-color: #B7B7B7;\r\n    border-bottom: 1px solid #B7B7B7;\r\n}\r\n\r\n\r\n.price.panel-grey>.panel-body {\r\n    color: #fff;\r\n    background-color: #808080;\r\n}\r\n\r\n\r\n\r\n.price.panel-grey>.panel-body .lead{\r\n    text-shadow: 0px 3px 0px rgba(50,50,50, .3);\r\n}\r\n\r\n.price.panel-grey .list-group-item {\r\n    color: #333;\r\n    background-color: rgba(50,50,50, .01);\r\n    font-weight:600;\r\n    text-shadow: 0px 1px 0px rgba(250,250,250, .75);\r\n}\r\n\r\n/* white price */\r\n\r\n\r\n.price.panel-white>.panel-heading {\r\n    color: #333;\r\n    background-color: #f9f9f9;\r\n    border-color: #ccc;\r\n    border-bottom: 1px solid #ccc;\r\n    text-shadow: 0px 2px 0px rgba(250,250,250, .7);\r\n}\r\n\r\n.panel.panel-white.price:hover>.panel-heading{\r\n    box-shadow: 0px 0px 30px rgba(0,0,0, .05) inset;\r\n}\r\n\r\n.price.panel-white>.panel-body {\r\n    color: #fff;\r\n    background-color: #dfdfdf;\r\n}\r\n\r\n.price.panel-white>.panel-body .lead{\r\n    text-shadow: 0px 2px 0px rgba(250,250,250, .8);\r\n    color:#666;\r\n}\r\n\r\n.price:hover.panel-white>.panel-body .lead{\r\n    text-shadow: 0px 2px 0px rgba(250,250,250, .9);\r\n    color:#333;\r\n}\r\n\r\n.price.panel-white .list-group-item {\r\n    color: #333;\r\n    background-color: rgba(50,50,50, .01);\r\n    font-weight:600;\r\n    text-shadow: 0px 1px 0px rgba(250,250,250, .75);\r\n}"

/***/ },

/***/ 869:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 870:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 871:
/***/ function(module, exports) {

module.exports = "p {\r\n    color: red;\r\n}"

/***/ },

/***/ 872:
/***/ function(module, exports) {

module.exports = "input{\r\n    width: 60px;\r\n}"

/***/ },

/***/ 873:
/***/ function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n    <div class=\"row\">\n        <div class=\"col-md-2\"></div>\n        <div class=\"col-md-8\">\n            <md-toolbar>\n                <nav>\n                    <a routerLink=\"cart\" >\n                        <a md-raised-button> Cart </a>\n                    </a>\n                    <a routerLink=\"catalog\" >\n                        <a md-raised-button> Catalog </a>\n                    </a>\n                </nav>\n            </md-toolbar>\n        </div>\n        <div class=\"col-md-2\"></div>\n    </div>\n\n    <router-outlet></router-outlet>\n\n</div>"

/***/ },

/***/ 874:
/***/ function(module, exports) {

module.exports = "<app-item-list [items]=\"items\" [deletable]=\"true\"></app-item-list>\r\n<app-price-info [cartItems]=\"items\"></app-price-info>"

/***/ },

/***/ 875:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-2\"></div>\n    <div class=\"col-md-2\">\n        <div class=\"panel price panel-grey\">\n            <div class=\"panel-heading arrow_box text-center\">\n                <h3>Selected items {{cartItems.length}}</h3>\n            </div>\n            <div class=\"panel-body text-center\">\n                <p class=\"lead\" style=\"font-size:40px\"><strong>{{cartService.totalBalance}} $</strong></p>\n            </div>\n            <div class=\"panel-footer\">\n                <button class=\"btn btn-lg btn-block btn-primary\" href=\"#\">BUY</button>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-md-8\"></div>\n</div>"

/***/ },

/***/ 876:
/***/ function(module, exports) {

module.exports = "<app-item-list [items]=\"items\"></app-item-list>"

/***/ },

/***/ 877:
/***/ function(module, exports) {

module.exports = "<ng-container *ngFor=\"let item of items; let i = index;\">\n\n  <div *ngIf=\"i % 4 == 0\" class=\"row\">\n\n    <div class=\"col-md-2\"></div>\n    <div class=\"col-md-2\" >\n      <app-item [deletable]=\"deletable\" [item]=\"items[i]\"></app-item>\n    </div>\n\n    <div class=\"col-md-2\" >\n      <app-item [deletable]=\"deletable\" [item]=\"items[i + 1]\"></app-item>\n    </div>\n\n    <div class=\"col-md-2\" >\n      <app-item [deletable]=\"deletable\" [item]=\"items[i + 2]\"></app-item>\n    </div>\n\n    <div class=\"col-md-2\" >\n      <app-item [deletable]=\"deletable\" [item]=\"items[i + 3]\"></app-item>\n    </div>\n    <div class=\"col-md-2\"></div>\n\n  </div>\n  <br>\n</ng-container>\n"

/***/ },

/***/ 878:
/***/ function(module, exports) {

module.exports = "<p>\r\n    {{ message }}\r\n</p>"

/***/ },

/***/ 879:
/***/ function(module, exports) {

module.exports = "<md-card class=\"example-card\"  *ngIf=\"item\">\n\n    <md-card-header>\n        <div md-card-avatar class=\"example-header-image\"></div>\n        <md-card-title>{{ item.short_name }}</md-card-title>\n        <md-card-subtitle>{{item.display_size}}</md-card-subtitle>\n    </md-card-header>\n\n    <img md-card-image [src]=\"item.image_url\">\n\n    <md-card-content>\n\n        <div class=\"example-tooltip-host\" mdTooltip=\"{{ item.description.length > 55 ? item.description: ''}}\" [mdTooltipPosition]=\"'above'\">\n            <span>{{ item.description | cutAfter: 55 }}</span>\n            <br><br>\n            <span> {{ item.price }} $</span>\n        </div>\n\n    </md-card-content>\n\n    <md-card-actions *ngIf=\"!deletable\">\n\n            <md-checkbox *ngIf=\"!deletable\"\n                         class=\"example-margin\"\n                         [(ngModel)]=\"item.is_added\"\n                         (change)=\"onChange($event)\">\n                Add to cart\n            </md-checkbox>\n\n    </md-card-actions>\n\n    <md-card-actions *ngIf=\"deletable\">\n\n\n\n        <button\n                md-button\n                (click)=\"removeFromCart(item)\">\n            <md-icon>delete</md-icon>\n        </button>\n\n        <md-input-container class=\"example-margin\">\n            <input mdInput\n                   type=\"number\"\n                   placeholder=\"Count\"\n                   minlength=\"1\" maxlength=\"10\"\n                   (ngModelChange)=\"onCountChange($event)\"\n                   [(ngModel)]=\"item.count\">\n        </md-input-container>\n\n    </md-card-actions>\n\n</md-card>"

/***/ }

},[1138]);
//# sourceMappingURL=main.bundle.map