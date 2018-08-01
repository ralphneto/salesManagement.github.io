webpackJsonp([4],{

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FornecedorEditPageModule", function() { return FornecedorEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fornecedor_edit__ = __webpack_require__(340);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FornecedorEditPageModule = /** @class */ (function () {
    function FornecedorEditPageModule() {
    }
    FornecedorEditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__fornecedor_edit__["a" /* FornecedorEditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__fornecedor_edit__["a" /* FornecedorEditPage */]),
            ],
        })
    ], FornecedorEditPageModule);
    return FornecedorEditPageModule;
}());

//# sourceMappingURL=fornecedor-edit.module.js.map

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

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FornecedorEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity_Fornecedor__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_fornecedor_service_fornecedor_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FornecedorEditPage = /** @class */ (function () {
    function FornecedorEditPage(navCtrl, navParams, toast, fornecedorProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.fornecedorProvider = fornecedorProvider;
        if (this.navParams.data.fornecedor) {
            this.model = this.navParams.data.fornecedor;
        }
        else {
            this.model = new __WEBPACK_IMPORTED_MODULE_0__entity_Fornecedor__["a" /* Fornecedor */]();
        }
    }
    FornecedorEditPage.prototype.save = function () {
        var _this = this;
        this.saveFornecedor().subscribe(function () {
            _this.toast.create({ message: 'Fornecedor salvo com sucesso.', position: 'botton', duration: 3000 }).present();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
            //this.navCtrl.pop();
        }, function (error) {
            _this.toast.create({ message: 'Erro ao salvar o fornecedor. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
        });
    };
    FornecedorEditPage.prototype.saveFornecedor = function () {
        if (this.model.id) {
            return this.fornecedorProvider.update(this.model);
        }
        else {
            return this.fornecedorProvider.insert(this.model);
        }
    };
    FornecedorEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-fornecedor-edit',template:/*ion-inline-start:"/home/ralph/Dev/ionic/salesManagementX/src/pages/fornecedor-edit/fornecedor-edit.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>\n        Fornecedores\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n  \n    <ion-list>\n      <ion-item>\n        <ion-label stacked>Nome Fantasia</ion-label>\n        <ion-input type="text" name="nomeFantasia" [(ngModel)]="model.nomeFantasia"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Razão Social</ion-label>\n        <ion-input type="text" name="razaoSocial" [(ngModel)]="model.razaoSocial"></ion-input>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label stacked>CNPJ</ion-label>\n        <ion-input type="text" name="cnpj" [(ngModel)]="model.cnpj"></ion-input>\n      </ion-item>    \n          \n      <ion-item>\n        <ion-label stacked>Endereço</ion-label>\n        <ion-input type="text" name="endereco" [(ngModel)]="model.endereco"></ion-input>\n      </ion-item>\n      \n      <ion-item>\n        <ion-label stacked>Referência do Endereço</ion-label>\n        <ion-input type="text" name="refEnd" [(ngModel)]="model.refEnd"></ion-input>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label stacked>Bairro</ion-label>\n        <ion-input type="text" name="bairro" [(ngModel)]="model.bairro"></ion-input>\n      </ion-item>    \n      \n      <ion-item>\n        <ion-label stacked>Cidade</ion-label>\n        <ion-input type="text" name="cidade" [(ngModel)]="model.cidade"></ion-input>\n      </ion-item>\n      \n      <ion-item>\n        <ion-label stacked>Estado</ion-label>\n        <ion-input type="text" name="estado" [(ngModel)]="model.estado"></ion-input>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label stacked>CEP</ion-label>\n        <ion-input type="text" name="cep" [(ngModel)]="model.cep"></ion-input>\n      </ion-item>\n      \n      <ion-item>\n        <ion-label stacked>Telefone</ion-label>\n        <ion-input type="text" name="telefone" [(ngModel)]="model.telefone"></ion-input>\n      </ion-item>    \n\n      <ion-item>\n        <ion-label stacked>Contato</ion-label>\n        <ion-input type="text" name="contato" [(ngModel)]="model.contato"></ion-input>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label stacked>Celular</ion-label>\n        <ion-input type="text" name="celular" [(ngModel)]="model.celular"></ion-input>\n      </ion-item>\n      \n      <ion-item>\n        <ion-label stacked>E-mail</ion-label>\n        <ion-input type="text" name="email" [(ngModel)]="model.email"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Site</ion-label>\n        <ion-input type="text" name="site" [(ngModel)]="model.site"></ion-input>\n      </ion-item>\n      \n      <ion-item>\n        <ion-label stacked>Referência 1</ion-label>\n        <ion-input type="text" name="referencia1" [(ngModel)]="model.referencia1"></ion-input>\n      </ion-item>\n                  \n    </ion-list>\n  \n    <button ion-button block (click)="save()" color="primary">Salvar</button>\n  </ion-content>'/*ion-inline-end:"/home/ralph/Dev/ionic/salesManagementX/src/pages/fornecedor-edit/fornecedor-edit.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1__providers_fornecedor_service_fornecedor_service__["a" /* FornecedorServiceProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1__providers_fornecedor_service_fornecedor_service__["a" /* FornecedorServiceProvider */]])
    ], FornecedorEditPage);
    return FornecedorEditPage;
}());

//# sourceMappingURL=fornecedor-edit.js.map

/***/ })

});
//# sourceMappingURL=4.js.map