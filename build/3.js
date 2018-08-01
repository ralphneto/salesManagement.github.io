webpackJsonp([3],{

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemEditPageModule", function() { return ItemEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_edit__ = __webpack_require__(341);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ItemEditPageModule = /** @class */ (function () {
    function ItemEditPageModule() {
    }
    ItemEditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__item_edit__["a" /* ItemEditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__item_edit__["a" /* ItemEditPage */]),
            ],
        })
    ], ItemEditPageModule);
    return ItemEditPageModule;
}());

//# sourceMappingURL=item-edit.module.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_fornecedor_service_fornecedor_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entity_Utils__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_item_service_item_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entity_Item__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ItemEditPage = /** @class */ (function () {
    function ItemEditPage(navCtrl, loadingCtrl, toastCtrl, navParams, itemProvider, fornecedorProvider) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.itemProvider = itemProvider;
        this.fornecedorProvider = fornecedorProvider;
        this.progress1 = { percentage: 0 };
        this.itemUrl = __WEBPACK_IMPORTED_MODULE_3__entity_Utils__["a" /* Utils */].getUrlBackEnd() + "item/";
        if (this.navParams.data.item) {
            this.model = this.navParams.data.item;
            if (this.model.fornecedor)
                this.model.fornecedor_id = this.navParams.data.item.fornecedor.id;
            else
                this.model.fornecedor_id = -1;
            if (this.model.imagem1 != null)
                this.showImage1 = true;
            else
                this.showImage1 = false;
        }
        else {
            this.model = new __WEBPACK_IMPORTED_MODULE_5__entity_Item__["a" /* Item */]();
        }
    }
    ItemEditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ItemEditPage');
        this.fornecedores = [];
        this.page = 1;
        this.getAllFornecedores();
    };
    ItemEditPage.prototype.getAllFornecedores = function () {
        var _this = this;
        this.fornecedorProvider.listAll().subscribe(function (response) {
            _this.fornecedores = response;
            console.log('Fornecedores: ' + _this.fornecedores);
        });
    };
    ItemEditPage.prototype.save = function () {
        var _this = this;
        var fornecedor = this.model.fornecedor_id;
        this.saveItem().subscribe(function (res) {
            _this.model = res;
        }, function (error) {
            _this.toastCtrl.create({ message: 'Erro ao salvar item. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
        }, function () {
            if (fornecedor)
                _this.updateFornecedor(_this.model.id, fornecedor);
            _this.uploadImages(_this.model.id);
            _this.toastCtrl.create({ message: 'Item salvo com sucesso. Id: ' + _this.model.id, position: 'botton', duration: 3000 }).present();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
        });
    };
    ItemEditPage.prototype.saveItem = function () {
        if (this.model.id) {
            return this.itemProvider.update(this.model);
        }
        else {
            return this.itemProvider.insert(this.model);
        }
    };
    ItemEditPage.prototype.updateFornecedor = function (id, fornecedor_id) {
        //this.itemProvider.updateFornecedor(id, fornecedor_id).subscribe();
        this.itemProvider.updateFornecedor(id, fornecedor_id).subscribe(function (res) { return console.log(res); });
        console.log("updateFornecedor");
    };
    ItemEditPage.prototype.uploadImages = function (id) {
        var _this = this;
        this.progress1.percentage = 0;
        if (this.selectedFiles1 != undefined)
            this.currentFileUpload1 = this.selectedFiles1.item(0);
        this.itemProvider.pushFilesToStorage(id, this.currentFileUpload1).subscribe(function (event) {
            if (event.type === __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpEventType */].UploadProgress) {
                _this.progress1.percentage = Math.round(100 * event.loaded / event.total);
            }
            else if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["g" /* HttpResponse */]) {
                console.log('Files are completely uploaded!');
            }
        });
        this.selectedFiles1 = undefined;
    };
    ItemEditPage.prototype.selectFile1 = function (event) {
        this.selectedFiles1 = event.target.files;
    };
    ItemEditPage.prototype.showFiles = function (enable) {
        this.showFile = enable;
    };
    ItemEditPage.prototype.presentToast = function (msg) {
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
    ItemEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Component"])({
            selector: 'page-item-edit',template:/*ion-inline-start:"/home/ralph/Dev/ionic/salesManagementX/src/pages/item-edit/item-edit.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Itens\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n  \n<ion-content padding>\n  <ion-list>  \n    <ion-item>\n      <ion-label stacked>Codigo</ion-label>\n      <ion-input type="text" name="codigo" [(ngModel)]="model.codigo"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Descrição</ion-label>\n      <ion-input type="text" name="descricao" [(ngModel)]="model.descricao"></ion-input>\n    </ion-item>    \n    \n    <ion-item>\n      <ion-label stacked>Fornecedor</ion-label>\n      <ion-select [(ngModel)]="model.fornecedor_id">\n        <ion-option *ngFor="let fornecedor of fornecedores" value="{{ fornecedor.id }}">{{ fornecedor.nomeFantasia }}</ion-option>\n      </ion-select>\n    </ion-item>\n        \n    <ion-item>\n      <ion-label stacked>Código no Fornecedor</ion-label>\n      <ion-input type="text" name="codFornecedor" [(ngModel)]="model.codFornecedor"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label stacked>Custo</ion-label>\n      <ion-input type="number" name="custo" [(ngModel)]="model.custo"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Valor de Venda</ion-label>\n      <ion-input type="number" name="valorVenda" [(ngModel)]="model.valorVenda"></ion-input>\n    </ion-item>    \n    \n    <ion-item>\n      <ion-label stacked>Tipo [Categoria] da Peça</ion-label>\n      <ion-input type="text" name="tipo" [(ngModel)]="model.tipo"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-item *ngIf="currentFileUpload1">\n    <ion-label stacked>{{progress1.percentage}}%</ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked>Imagem 1: \n      <input type="file" (change)="selectFile1($event)" id="file-input">\n    </ion-label>\n  </ion-item>\n\n  <button class="button btn-info" ion-button *ngIf=\'showFile\'\n  (click)=\'showFiles(false)\'>Ocultar Imagens</button>\n\n  <button class="button btn-info" ion-button *ngIf=\'!showFile\'\n  (click)=\'showFiles(true)\'>Exibir Imagens</button>\n\n  <div [hidden]="!showFile">\n    <div class="panel panel-primary">\n      <h2>Imagens:</h2>\n        <div class="panel-body">\n          <table>\n            <tr>\n              <td *ngIf=\'showImage1\'>\n                  <img [src]="\'data:image/JPEG;base64,\' + model.imagem1" style="max-width:150px"/>\n              </td>\n            </tr>\n          </table>\n        </div>\n    </div>\n  </div>\n\n  <button ion-button block (click)="save()" color="primary">Salvar</button>\n</ion-content>  '/*ion-inline-end:"/home/ralph/Dev/ionic/salesManagementX/src/pages/item-edit/item-edit.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_item_service_item_service__["a" /* ItemServiceProvider */], __WEBPACK_IMPORTED_MODULE_0__providers_fornecedor_service_fornecedor_service__["a" /* FornecedorServiceProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_item_service_item_service__["a" /* ItemServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_fornecedor_service_fornecedor_service__["a" /* FornecedorServiceProvider */]])
    ], ItemEditPage);
    return ItemEditPage;
}());

//# sourceMappingURL=item-edit.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
var Item = /** @class */ (function () {
    function Item() {
    }
    return Item;
}());

//# sourceMappingURL=Item.js.map

/***/ })

});
//# sourceMappingURL=3.js.map