webpackJsonp([6],{

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KitEditPageModule", function() { return KitEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__kit_edit__ = __webpack_require__(343);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var KitEditPageModule = /** @class */ (function () {
    function KitEditPageModule() {
    }
    KitEditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__kit_edit__["a" /* KitEditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__kit_edit__["a" /* KitEditPage */]),
            ],
        })
    ], KitEditPageModule);
    return KitEditPageModule;
}());

//# sourceMappingURL=kit-edit.module.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KitEditPage; });
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
 * Generated class for the KitEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var KitEditPage = /** @class */ (function () {
    function KitEditPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    KitEditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad KitEditPage');
    };
    KitEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-kit-edit',template:/*ion-inline-start:"/home/ralph/Dev/ionic/salesManagementX/src/pages/kit-edit/kit-edit.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Kits\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>  \n    <ion-item>\n      <ion-label stacked>Nome</ion-label>\n      <ion-input type="text" name="nome" [(ngModel)]="model.nome"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Descrição</ion-label>\n      <ion-input type="text" name="descricao" [(ngModel)]="model.descricao"></ion-input>\n    </ion-item>    \n    \n    <ion-item>\n      <ion-label stacked>Fornecedor</ion-label>\n      <ion-input type="text" name="fornecedor" [(ngModel)]="model.fornecedor"></ion-input>\n    </ion-item>\n        \n    <ion-item>\n      <ion-label stacked>Código do Fornecedor</ion-label>\n      <ion-input type="text" name="codFornecedor" [(ngModel)]="model.codFornecedor"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label stacked>Custo</ion-label>\n      <ion-input type="number" name="custo" [(ngModel)]="model.custo"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Valor de Venda</ion-label>\n      <ion-input type="number" name="valorVenda" [(ngModel)]="model.valorVenda"></ion-input>\n    </ion-item>    \n    \n    <ion-item>\n      <ion-label stacked>Tipo [Categoria] da Peça</ion-label>\n      <ion-input type="text" name="tipo" [(ngModel)]="model.tipo"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-item *ngIf="currentFileUpload1">\n    <ion-label stacked>{{progress1.percentage}}%</ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked>Imagem 1: \n      <input type="file" (change)="selectFile1($event)" id="file-input">\n    </ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked>Imagem 2: \n      <input type="file" (change)="selectFile2($event)" id="file-input">\n    </ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked>Imagem 3: \n      <input type="file" (change)="selectFile3($event)" id="file-input">\n    </ion-label>\n  </ion-item>\n\n  <button class="button btn-info" ion-button *ngIf=\'showFile\'\n	(click)=\'showFiles(false)\'>Ocultar Imagens</button>\n\n  <button class="button btn-info" ion-button *ngIf=\'!showFile\'\n	(click)=\'showFiles(true)\'>Exibir Imagens</button>\n\n  <div [hidden]="!showFile">\n	  <div class="panel panel-primary">\n		  <h2>Imagens:</h2>\n			  <div class="panel-body">\n          <table>\n            <tr>\n              <td *ngIf=\'showImage1\'>\n                  <img [src]="\'data:image/JPEG;base64,\' + model.imagem1" style="max-width:150px"/>\n              </td>\n              <td *ngIf=\'showImage2\'>\n                  <img [src]="\'data:image/JPEG;base64,\' + model.imagem2" style="max-width:150px"/>\n              </td>\n              <td *ngIf=\'showImage3\'>\n                  <img [src]="\'data:image/JPEG;base64,\' + model.imagem3" style="max-width:150px"/>\n              </td>\n            </tr>\n          </table>\n			  </div>\n	  </div>\n  </div>\n    \n  <button ion-button block (click)="save()" color="primary">Salvar</button>\n</ion-content>\n\n'/*ion-inline-end:"/home/ralph/Dev/ionic/salesManagementX/src/pages/kit-edit/kit-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], KitEditPage);
    return KitEditPage;
}());

//# sourceMappingURL=kit-edit.js.map

/***/ })

});
//# sourceMappingURL=6.js.map