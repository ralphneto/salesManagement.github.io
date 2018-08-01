webpackJsonp([5],{

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KitListPageModule", function() { return KitListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__kit_list__ = __webpack_require__(344);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var KitListPageModule = /** @class */ (function () {
    function KitListPageModule() {
    }
    KitListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__kit_list__["a" /* KitListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__kit_list__["a" /* KitListPage */]),
            ],
        })
    ], KitListPageModule);
    return KitListPageModule;
}());

//# sourceMappingURL=kit-list.module.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KitListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the KitListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var KitListPage = /** @class */ (function () {
    function KitListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    KitListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad KitListPage');
    };
    KitListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-kit-list',template:/*ion-inline-start:"/home/ralph/Dev/ionic/salesManagementX/src/pages/kit-list/kit-list.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      SalesManagement - Kits\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button color="primary" (click)="openCreateKit()">\n    <ion-icon name="create"></ion-icon>\n    Cadastrar\n  </button>\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let kit of kits">\n      <ion-item>\n        <h2 (click)="openKit(kit.id)">{{ kit.nome }}</h2>\n        <p>{{ kit.descricao }}</p>\n      </ion-item>\n\n      <ion-item-options side="right">\n        <button ion-button color="primary" (click)="openEditKit(kit.id)">\n            <ion-icon name="create"></ion-icon>\n            Editar\n        </button>\n        <button ion-button color="danger" (click)="deleteKit(kit)">\n            <ion-icon name="trash"></ion-icon>\n            Excluir\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="getKit($event)">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Aguarde...">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n  <ion-fab right bottom>\n    <button ion-fab color="light" (click)="openCreateKit()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"/home/ralph/Dev/ionic/salesManagementX/src/pages/kit-list/kit-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], KitListPage);
    return KitListPage;
}());

//# sourceMappingURL=kit-list.js.map

/***/ })

});
//# sourceMappingURL=5.js.map