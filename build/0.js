webpackJsonp([0],{

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoEditPageModule", function() { return ProdutoEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__produto_edit__ = __webpack_require__(345);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProdutoEditPageModule = /** @class */ (function () {
    function ProdutoEditPageModule() {
    }
    ProdutoEditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__produto_edit__["a" /* ProdutoEditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__produto_edit__["a" /* ProdutoEditPage */]),
            ],
        })
    ], ProdutoEditPageModule);
    return ProdutoEditPageModule;
}());

//# sourceMappingURL=produto-edit.module.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Fornecedor; });
var Fornecedor = /** @class */ (function () {
    function Fornecedor() {
    }
    return Fornecedor;
}());

//# sourceMappingURL=Fornecedor.js.map

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

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutoEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_item_service_item_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entity_Fornecedor__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entity_Produto__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_produto_service_produto_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entity_Utils__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_fornecedor_service_fornecedor_service__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { Observable } from 'rxjs/Observable';
//import { Base64 } from '@ionic-native/base64';






//import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer';


var ProdutoEditPage = /** @class */ (function () {
    function ProdutoEditPage(navCtrl, loadingCtrl, toastCtrl, navParams, produtoProvider, fornecedorProvider, itemProvider) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.produtoProvider = produtoProvider;
        this.fornecedorProvider = fornecedorProvider;
        this.itemProvider = itemProvider;
        this.imgPreview = 'assets/imgs/blank-avatar.jpg';
        this.progress1 = { percentage: 0 };
        this.progress2 = { percentage: 0 };
        this.progress3 = { percentage: 0 };
        this.produtoUrl = __WEBPACK_IMPORTED_MODULE_5__entity_Utils__["a" /* Utils */].getUrlBackEnd() + "produto/";
        if (this.navParams.data.produto) {
            this.model = this.navParams.data.produto;
            if (this.model.fornecedor == null) {
                this.model.fornecedor = new __WEBPACK_IMPORTED_MODULE_1__entity_Fornecedor__["a" /* Fornecedor */]();
            }
            else {
                this.fornecedor_id = this.model.fornecedor.id;
            }
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
            this.model = new __WEBPACK_IMPORTED_MODULE_2__entity_Produto__["a" /* Produto */]();
        }
    }
    ProdutoEditPage.prototype.save = function () {
        var _this = this;
        this.saveProduto().subscribe(function (res) {
            _this.model = res;
        }, function (error) {
            _this.toastCtrl.create({ message: 'Erro ao salvar o produto. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
        }, function () {
            if (_this.fornecedor_id)
                _this.updateFornecedor(_this.model.id, _this.fornecedor_id);
            _this.uploadImages(_this.model.id);
            _this.toastCtrl.create({ message: 'Produto salvo com sucesso. Id: ' + _this.model.id, position: 'botton', duration: 3000 }).present();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
        });
    };
    ProdutoEditPage.prototype.updateFornecedor = function (id, fornecedor_id) {
        this.produtoProvider.updateFornecedor(id, fornecedor_id).subscribe(function (res) { return console.log(res); });
        console.log("updateFornecedor");
    };
    ProdutoEditPage.prototype.addItem = function () {
        var _this = this;
        this.saveProduto().subscribe(function (res) {
            _this.model = res;
        }, function (error) {
            _this.toastCtrl.create({ message: 'Erro ao salvar o produto. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
        }, function () {
            if (_this.item_id)
                _this.produtoProvider.addItem(_this.model.id, _this.item_id).subscribe(function (res) { return console.log(res); });
            _this.toastCtrl.create({ message: 'Item adicionado ao produto.', position: 'botton', duration: 3000 }).present();
        });
    };
    ProdutoEditPage.prototype.selectFile1 = function (event) {
        this.selectedFiles1 = event.target.files;
    };
    ProdutoEditPage.prototype.selectFile2 = function (event) {
        this.selectedFiles2 = event.target.files;
    };
    ProdutoEditPage.prototype.selectFile3 = function (event) {
        this.selectedFiles3 = event.target.files;
    };
    ProdutoEditPage.prototype.upload1 = function () {
        var _this = this;
        if (!this.model.id) {
            this.saveProduto().subscribe(function (res) {
                _this.model = res;
            }, function (error) {
                _this.toastCtrl.create({ message: 'Erro ao salvar o produto. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
            }, function () {
                _this.uploadImage1(_this.model.id);
            });
        }
        else {
            this.uploadImage1(this.model.id);
        }
    };
    ProdutoEditPage.prototype.upload2 = function () {
        var _this = this;
        if (!this.model.id) {
            this.saveProduto().subscribe(function (res) {
                _this.model = res;
            }, function (error) {
                _this.toastCtrl.create({ message: 'Erro ao salvar o produto. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
            }, function () {
                _this.uploadImage2(_this.model.id);
            });
        }
        else {
            this.uploadImage2(this.model.id);
        }
    };
    ProdutoEditPage.prototype.showFiles = function (enable) {
        this.showFile = enable;
    };
    ProdutoEditPage.prototype.changeShowItens = function (enable) {
        this.showItens = enable;
    };
    ProdutoEditPage.prototype.upload3 = function () {
        var _this = this;
        if (!this.model.id) {
            this.saveProduto().subscribe(function (res) {
                _this.model = res;
            }, function (error) {
                _this.toastCtrl.create({ message: 'Erro ao salvar o produto. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
            }, function () {
                _this.uploadImage3(_this.model.id);
            });
        }
        else {
            this.uploadImage3(this.model.id);
        }
    };
    ProdutoEditPage.prototype.uploadImages = function (id) {
        var _this = this;
        this.progress1.percentage = 0;
        if (this.selectedFiles1 != undefined)
            this.currentFileUpload1 = this.selectedFiles1.item(0);
        if (this.selectedFiles2 != undefined)
            this.currentFileUpload2 = this.selectedFiles2.item(0);
        if (this.selectedFiles3 != undefined)
            this.currentFileUpload3 = this.selectedFiles3.item(0);
        console.log(this.currentFileUpload1);
        console.log(this.currentFileUpload2);
        console.log(this.currentFileUpload3);
        this.produtoProvider.pushFilesToStorage(id, this.currentFileUpload1, this.currentFileUpload2, this.currentFileUpload3).subscribe(function (event) {
            if (event.type === __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["e" /* HttpEventType */].UploadProgress) {
                _this.progress1.percentage = Math.round(100 * event.loaded / event.total);
            }
            else if (event instanceof __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["g" /* HttpResponse */]) {
                console.log('Files are completely uploaded!');
            }
        });
        this.selectedFiles1 = undefined;
    };
    ProdutoEditPage.prototype.uploadImage1 = function (id) {
        var _this = this;
        this.progress1.percentage = 0;
        this.currentFileUpload1 = this.selectedFiles1.item(0);
        this.produtoProvider.pushFileToStorage1(id, this.currentFileUpload1).subscribe(function (event) {
            if (event.type === __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["e" /* HttpEventType */].UploadProgress) {
                _this.progress1.percentage = Math.round(100 * event.loaded / event.total);
            }
            else if (event instanceof __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["g" /* HttpResponse */]) {
                console.log('File is completely uploaded!');
            }
        });
        this.selectedFiles1 = undefined;
    };
    ProdutoEditPage.prototype.uploadImage2 = function (id) {
        var _this = this;
        this.progress2.percentage = 0;
        this.currentFileUpload2 = this.selectedFiles2.item(0);
        this.produtoProvider.pushFileToStorage2(id, this.currentFileUpload2).subscribe(function (event) {
            if (event.type === __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["e" /* HttpEventType */].UploadProgress) {
                _this.progress2.percentage = Math.round(100 * event.loaded / event.total);
            }
            else if (event instanceof __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["g" /* HttpResponse */]) {
                console.log('File is completely uploaded!');
            }
        });
        this.selectedFiles2 = undefined;
    };
    ProdutoEditPage.prototype.uploadImage3 = function (id) {
        var _this = this;
        this.progress3.percentage = 0;
        this.currentFileUpload3 = this.selectedFiles3.item(0);
        this.produtoProvider.pushFileToStorage3(id, this.currentFileUpload3).subscribe(function (event) {
            if (event.type === __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["e" /* HttpEventType */].UploadProgress) {
                _this.progress3.percentage = Math.round(100 * event.loaded / event.total);
            }
            else if (event instanceof __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["g" /* HttpResponse */]) {
                console.log('File is completely uploaded!');
            }
        });
        this.selectedFiles3 = undefined;
    };
    ProdutoEditPage.prototype.saveProduto = function () {
        if (this.model.id) {
            return this.produtoProvider.update(this.model);
        }
        else {
            return this.produtoProvider.insert(this.model);
        }
    };
    ProdutoEditPage.prototype.presentToast = function (msg) {
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
    ProdutoEditPage.prototype.getAllFornecedores = function () {
        var _this = this;
        this.fornecedorProvider.listAll().subscribe(function (response) { return _this.fornecedores = response; });
    };
    ProdutoEditPage.prototype.getAllItens = function () {
        var _this = this;
        this.itemProvider.listAll().subscribe(function (response) { return _this.itens = response; });
    };
    ProdutoEditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProdutoEditPage');
        this.getAllFornecedores();
        this.getAllItens();
    };
    ProdutoEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Component"])({
            selector: 'page-produto-edit',template:/*ion-inline-start:"/home/ralph/Dev/ionic/salesManagementX/src/pages/produto-edit/produto-edit.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Produtos\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>  \n    <ion-item>\n      <ion-label stacked>Codigo</ion-label>\n      <ion-input type="text" name="codigo" [(ngModel)]="model.codigo"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Descrição</ion-label>\n      <ion-input type="text" name="descricao" [(ngModel)]="model.descricao"></ion-input>\n    </ion-item>    \n    \n    <ion-item>\n      <ion-label stacked>Fornecedor</ion-label>\n      <ion-select [(ngModel)]="fornecedor_id" (change)="selectFornecedor(fornecedor)">\n        <ion-option *ngFor="let fornecedor of fornecedores" value="{{ fornecedor.id }}">{{ fornecedor.nomeFantasia }}</ion-option>\n      </ion-select>\n    </ion-item>\n        \n    <ion-item>\n      <ion-label stacked>Código do Fornecedor</ion-label>\n      <ion-input type="text" name="codFornecedor" [(ngModel)]="model.codFornecedor"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label stacked>Custo</ion-label>\n      <ion-input type="number" name="custo" [(ngModel)]="model.custo"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Valor de Venda</ion-label>\n      <ion-input type="number" name="valorVenda" [(ngModel)]="model.valorVenda"></ion-input>\n    </ion-item>    \n    \n    <ion-item>\n      <ion-label stacked>Tipo [Categoria] da Peça</ion-label>\n      <ion-input type="text" name="tipo" [(ngModel)]="model.tipo"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-item *ngIf="currentFileUpload1">\n    <ion-label stacked>{{progress1.percentage}}%</ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked>Imagem 1: \n      <input type="file" (change)="selectFile1($event)" id="file-input">\n    </ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked>Imagem 2: \n      <input type="file" (change)="selectFile2($event)" id="file-input">\n    </ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked>Imagem 3: \n      <input type="file" (change)="selectFile3($event)" id="file-input">\n    </ion-label>\n  </ion-item>\n\n  <button class="button btn-info" ion-button *ngIf=\'showFile\'\n	(click)=\'showFiles(false)\'>Ocultar Imagens</button>\n\n  <button class="button btn-info" ion-button *ngIf=\'!showFile\'\n	(click)=\'showFiles(true)\'>Exibir Imagens</button>\n\n  <div [hidden]="!showFile">\n	  <div class="panel panel-primary">\n		  <h2>Imagens:</h2>\n			  <div class="panel-body">\n          <table>\n            <tr>\n              <td *ngIf=\'showImage1\'>\n                  <img [src]="\'data:image/JPEG;base64,\' + model.imagem1" style="max-width:150px"/>\n              </td>\n              <td *ngIf=\'showImage2\'>\n                  <img [src]="\'data:image/JPEG;base64,\' + model.imagem2" style="max-width:150px"/>\n              </td>\n              <td *ngIf=\'showImage3\'>\n                  <img [src]="\'data:image/JPEG;base64,\' + model.imagem3" style="max-width:150px"/>\n              </td>\n            </tr>\n          </table>\n			  </div>\n	  </div>\n  </div>\n\n  <ion-grid>\n    <ion-row>\n      <ion-label stacked>Itens do Produto</ion-label>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-select [(ngModel)]="item_id">\n            <ion-option *ngFor="let item of itens" value="{{ item.id }}">{{ item.codigo }}</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <button ion-button class="button btn-add" (click)=\'addItem()\'>\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n  \n  <br>\n\n  <button class="button btn-info" ion-button *ngIf=\'showItens\'\n	(click)=\'changeShowItens(false)\'>Ocultar Itens</button>\n\n  <button class="button btn-info" ion-button *ngIf=\'!showItens\'\n	(click)=\'changeShowItens(true)\'>Exibir Itens</button>\n\n  <div [hidden]="!showItens">\n	  <div class="panel panel-primary">\n		  <h2>Itens:</h2>\n			  <div class="panel-body">\n            <ion-list>\n                <ion-item-sliding *ngFor="let item of model.itens">\n                  <ion-item>\n                    <ion-thumbnail item-left>\n                          <img [src]="\'data:image/JPEG;base64,\' + item.imagem1">\n                    </ion-thumbnail>\n                    <h2>{{ item.codigo }}</h2>\n                    <p>{{ item.descricao }}</p>\n                  </ion-item>\n                  <ion-item-options side="right">\n                    <button ion-button color="danger" (click)="removeItem(item)">\n                        <ion-icon name="trash"></ion-icon>\n                        Excluir\n                    </button>\n                  </ion-item-options>  \n                </ion-item-sliding>\n              </ion-list>\n			  </div>\n	  </div>\n  </div>\n\n  <button ion-button block (click)="save()" color="primary">Salvar</button>\n</ion-content>\n\n'/*ion-inline-end:"/home/ralph/Dev/ionic/salesManagementX/src/pages/produto-edit/produto-edit.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_produto_service_produto_service__["a" /* ProdutoServiceProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_fornecedor_service_fornecedor_service__["a" /* FornecedorServiceProvider */], __WEBPACK_IMPORTED_MODULE_0__providers_item_service_item_service__["a" /* ItemServiceProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_produto_service_produto_service__["a" /* ProdutoServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_fornecedor_service_fornecedor_service__["a" /* FornecedorServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_item_service_item_service__["a" /* ItemServiceProvider */]])
    ], ProdutoEditPage);
    return ProdutoEditPage;
}());

//# sourceMappingURL=produto-edit.js.map

/***/ })

});
//# sourceMappingURL=0.js.map