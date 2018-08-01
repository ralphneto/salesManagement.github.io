webpackJsonp([2],{

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoImagesPageModule", function() { return ProdutoImagesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__produto_images__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProdutoImagesPageModule = /** @class */ (function () {
    function ProdutoImagesPageModule() {
    }
    ProdutoImagesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__produto_images__["a" /* ProdutoImagesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__produto_images__["a" /* ProdutoImagesPage */]),
            ],
        })
    ], ProdutoImagesPageModule);
    return ProdutoImagesPageModule;
}());

//# sourceMappingURL=produto-images.module.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Produto; });
var Produto = /** @class */ (function () {
    function Produto() {
    }
    return Produto;
}());

//# sourceMappingURL=Produto.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutoImagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity_Produto__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_produto_service_produto_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entity_Utils__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProdutoImagesPage = /** @class */ (function () {
    function ProdutoImagesPage(navCtrl, toastCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.produtoUrl = __WEBPACK_IMPORTED_MODULE_2__entity_Utils__["a" /* Utils */].getUrlBackEnd() + "produto/";
        if (this.navParams.data.produto) {
            this.model = this.navParams.data.produto;
            if (this.model.imagem1 != null)
                this.showImage1 = true;
            else
                this.showImage1 = false;
            if (this.model.imagem2 != null)
                this.showImage2 = true;
            else
                this.showImage2 = false;
            if (this.model.imagem3 != null)
                this.showImage3 = true;
            else
                this.showImage3 = false;
        }
        else {
            this.model = new __WEBPACK_IMPORTED_MODULE_0__entity_Produto__["a" /* Produto */]();
        }
    }
    ProdutoImagesPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ProdutoImagesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProdutoEditPage');
    };
    ProdutoImagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-produto-images',template:/*ion-inline-start:"/home/ralph/Dev/ionic/salesManagementX/src/pages/produto-images/produto-images.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>\n        Produtos - Detalhes\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <ion-list>  \n      <ion-item>\n        <ion-label stacked>Codigo: {{model.codigo}}</ion-label>\n      </ion-item> \n      <ion-item>\n        <ion-label stacked>Valor: {{model.valorVenda}}</ion-label>\n      </ion-item>    \n      <div class="panel panel-primary">\n        <h2>Imagens:</h2>\n          <div class="panel-body">\n            <img *ngIf=\'showImage1\' [src]="\'data:image/JPEG;base64,\' + model.imagem1" style="max-width:300px"/>\n            <img *ngIf=\'showImage2\' [src]="\'data:image/JPEG;base64,\' + model.imagem2" style="max-width:300px"/>\n            <img *ngIf=\'showImage3\' [src]="\'data:image/JPEG;base64,\' + model.imagem3" style="max-width:300px"/>\n          </div>\n      </div>\n    </ion-list>\n  </ion-content>\n  \n  '/*ion-inline-end:"/home/ralph/Dev/ionic/salesManagementX/src/pages/produto-images/produto-images.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1__providers_produto_service_produto_service__["a" /* ProdutoServiceProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */]])
    ], ProdutoImagesPage);
    return ProdutoImagesPage;
}());

//# sourceMappingURL=produto-images.js.map

/***/ })

});
//# sourceMappingURL=2.js.map