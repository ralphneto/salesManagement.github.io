webpackJsonp([15],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FornecedorServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entity_Utils__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
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





var FornecedorServiceProvider = /** @class */ (function () {
    function FornecedorServiceProvider(http, toast) {
        this.http = http;
        this.toast = toast;
        this.fornecedorUrl = __WEBPACK_IMPORTED_MODULE_1__entity_Utils__["a" /* Utils */].getUrlBackEnd() + "fornecedor/";
    }
    FornecedorServiceProvider.prototype.createItem = function (nomeFantasia, razaoSocial, cnpj, endereco, refEnd, bairro, cidade, estado, telefone, contato, celular, email, site, referencia1) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var data = {
                nomeFantasia: nomeFantasia,
                razaoSocial: razaoSocial,
                cnpj: cnpj,
                endereco: endereco,
                refEnd: refEnd,
                bairro: bairro,
                cidade: cidade,
                estado: estado,
                telefone: telefone,
                contato: contato,
                celular: celular,
                email: email,
                site: site,
                referencia1: referencia1
            };
            _this.http.post(_this.fornecedorUrl + 'register', data)
                .subscribe(function (result) {
                resolve(result.json());
            }, function (error) {
                reject(error.json());
            });
        });
    };
    FornecedorServiceProvider.prototype.listAll = function () {
        return this.http.get(this.fornecedorUrl);
    };
    FornecedorServiceProvider.prototype.getAll = function (page) {
        return this.http.get(this.fornecedorUrl + '10/' + page);
    };
    FornecedorServiceProvider.prototype.get = function (id) {
        var url = this.fornecedorUrl + id;
        return this.http.get(url);
    };
    FornecedorServiceProvider.prototype.insert = function (fornecedor) {
        var url = this.fornecedorUrl;
        return this.http.post(url, fornecedor);
    };
    FornecedorServiceProvider.prototype.update = function (fornecedor) {
        var url = this.fornecedorUrl + fornecedor.id;
        return this.http.put(url, fornecedor);
    };
    FornecedorServiceProvider.prototype.remove = function (id) {
        var url = this.fornecedorUrl + id;
        return this.http.delete(url);
    };
    FornecedorServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* ToastController */]])
    ], FornecedorServiceProvider);
    return FornecedorServiceProvider;
}());

//# sourceMappingURL=fornecedor-service.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutoServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entity_Utils__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
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






var ProdutoServiceProvider = /** @class */ (function () {
    function ProdutoServiceProvider(http, toast) {
        this.http = http;
        this.toast = toast;
        this.produtoUrl = __WEBPACK_IMPORTED_MODULE_1__entity_Utils__["a" /* Utils */].getUrlBackEnd() + "produto/";
    }
    ProdutoServiceProvider.prototype.createProduto = function (codigo, descricao, fornecedor, custo, valorVenda, tipo, imagem) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var data = {
                codigo: codigo,
                descricao: descricao,
                fornecedor: fornecedor,
                custo: custo,
                valorVenda: valorVenda,
                tipo: tipo,
                imagem: imagem
            };
            _this.http.post(_this.produtoUrl + 'register', data)
                .subscribe(function (result) {
                resolve(result.json());
            }, function (error) {
                reject(error.json());
            });
        });
    };
    ProdutoServiceProvider.prototype.listAll = function () {
        return this.http.get(this.produtoUrl);
    };
    ProdutoServiceProvider.prototype.getAll = function (page) {
        return this.http.get(this.produtoUrl + '10/' + page);
    };
    ProdutoServiceProvider.prototype.get = function (id) {
        var url = this.produtoUrl + id;
        return this.http.get(url);
    };
    ProdutoServiceProvider.prototype.pushFilesToStorage = function (id, file1, file2, file3) {
        var formdata = new FormData();
        if (file1 != null)
            formdata.append('files', file1, file1.name);
        if (file2 != null)
            formdata.append('files', file2, file2.name);
        if (file3 != null)
            formdata.append('files', file3, file3.name);
        var uploadUrl = this.produtoUrl + id + "/enviarImagens";
        var req = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["f" /* HttpRequest */]('POST', uploadUrl, formdata, {
            reportProgress: true,
            responseType: 'text'
        });
        return this.http.request(req);
    };
    ProdutoServiceProvider.prototype.pushFileToStorage1 = function (id, file) {
        var formdata = new FormData();
        formdata.append('file', file);
        var uploadUrl = this.produtoUrl + id + "/enviarImagem1";
        var req = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["f" /* HttpRequest */]('POST', uploadUrl, formdata, {
            reportProgress: true,
            responseType: 'text'
        });
        return this.http.request(req);
    };
    ProdutoServiceProvider.prototype.pushFileToStorage2 = function (id, file) {
        var formdata = new FormData();
        formdata.append('file', file);
        var uploadUrl = this.produtoUrl + id + "/enviarImagem2";
        var req = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["f" /* HttpRequest */]('POST', uploadUrl, formdata, {
            reportProgress: true,
            responseType: 'text'
        });
        return this.http.request(req);
    };
    ProdutoServiceProvider.prototype.pushFileToStorage3 = function (id, file) {
        var formdata = new FormData();
        formdata.append('file', file);
        var uploadUrl = this.produtoUrl + id + "/enviarImagem3";
        var req = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["f" /* HttpRequest */]('POST', uploadUrl, formdata, {
            reportProgress: true,
            responseType: 'text'
        });
        return this.http.request(req);
    };
    ProdutoServiceProvider.prototype.insert = function (produto) {
        var url = this.produtoUrl;
        return this.http.post(url, produto);
    };
    ProdutoServiceProvider.prototype.updateFornecedor = function (id, fornecedor_id) {
        var url = this.produtoUrl + 'updForn/' + id + '/' + fornecedor_id;
        return this.http.put(url, fornecedor_id);
    };
    ProdutoServiceProvider.prototype.addItem = function (id, item_id) {
        var url = this.produtoUrl + 'addItem/' + id + '/' + item_id;
        return this.http.put(url, item_id);
    };
    ProdutoServiceProvider.prototype.update = function (produto) {
        var url = this.produtoUrl + produto.id;
        return this.http.put(url, produto);
    };
    ProdutoServiceProvider.prototype.remove = function (id) {
        var url = this.produtoUrl + id;
        return this.http.delete(url);
    };
    ProdutoServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* ToastController */]])
    ], ProdutoServiceProvider);
    return ProdutoServiceProvider;
}());

//# sourceMappingURL=produto-service.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entity_Utils__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
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






var ItemServiceProvider = /** @class */ (function () {
    function ItemServiceProvider(http, toast) {
        this.http = http;
        this.toast = toast;
        this.itemUrl = __WEBPACK_IMPORTED_MODULE_1__entity_Utils__["a" /* Utils */].getUrlBackEnd() + "item/";
    }
    ItemServiceProvider.prototype.createItem = function (codigo, descricao, fornecedor, codFornecedor, custo, tipo, imagem1) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var data = {
                codigo: codigo,
                descricao: descricao,
                fornecedor: fornecedor,
                codFornecedor: codFornecedor,
                custo: custo,
                tipo: tipo,
                imagem1: imagem1
            };
            _this.http.post(_this.itemUrl + 'register', data)
                .subscribe(function (result) {
                resolve(result.json());
            }, function (error) {
                reject(error.json());
            });
        });
    };
    ItemServiceProvider.prototype.listAll = function () {
        return this.http.get(this.itemUrl);
    };
    ItemServiceProvider.prototype.getAll = function (page) {
        return this.http.get(this.itemUrl + '10/' + page);
    };
    ItemServiceProvider.prototype.get = function (id) {
        var url = this.itemUrl + id;
        return this.http.get(url);
    };
    ItemServiceProvider.prototype.pushFilesToStorage = function (id, file1) {
        var formdata = new FormData();
        if (file1 != null)
            formdata.append('files', file1, file1.name);
        var uploadUrl = this.itemUrl + id + "/enviarImagens";
        var req = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["f" /* HttpRequest */]('POST', uploadUrl, formdata, {
            reportProgress: true,
            responseType: 'text'
        });
        return this.http.request(req);
    };
    ItemServiceProvider.prototype.insert = function (item) {
        var url = this.itemUrl;
        return this.http.post(url, item);
    };
    ItemServiceProvider.prototype.updateFornecedor = function (id, fornecedor_id) {
        var url = this.itemUrl + 'updForn/' + id + '/' + fornecedor_id;
        return this.http.put(url, fornecedor_id);
    };
    ItemServiceProvider.prototype.update = function (item) {
        var url = this.itemUrl + item.id;
        return this.http.put(url, item);
    };
    ItemServiceProvider.prototype.remove = function (id) {
        var url = this.itemUrl + id;
        return this.http.delete(url);
    };
    ItemServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* ToastController */]])
    ], ItemServiceProvider);
    return ItemServiceProvider;
}());

//# sourceMappingURL=item-service.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComprasPage; });
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
 * Generated class for the ComprasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ComprasPage = /** @class */ (function () {
    function ComprasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ComprasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ComprasPage');
    };
    ComprasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-compras',template:/*ion-inline-start:"/home/ralph/Dev/ionic/salesManagementX/src/pages/compras/compras.html"*/'<!--\n  Generated template for the ComprasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Compras</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/ralph/Dev/ionic/salesManagementX/src/pages/compras/compras.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ComprasPage);
    return ComprasPage;
}());

//# sourceMappingURL=compras.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FornecedorListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_fornecedor_service_fornecedor_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tabs_tabs__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FornecedorListPage = /** @class */ (function () {
    function FornecedorListPage(navCtrl, navParams, toast, fornecedorProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.fornecedorProvider = fornecedorProvider;
    }
    FornecedorListPage.prototype.ionViewDidEnter = function () {
        this.fornecedores = [];
        this.page = 1;
        this.infiniteScroll.enable(true);
        this.getAllFornecedor(this.page);
    };
    FornecedorListPage.prototype.getAllFornecedor = function (page) {
        var _this = this;
        this.fornecedorProvider.listAll().subscribe(function (response) { return _this.fornecedores = response; });
    };
    FornecedorListPage.prototype.getFornecedor = function () {
        var _this = this;
        setTimeout(function () {
            _this.page += 1;
            _this.getAllFornecedor(_this.page);
        }, 500);
    };
    FornecedorListPage.prototype.openFornecedor = function (id) {
        var _this = this;
        this.fornecedorProvider.get(id).subscribe(function (res) { return _this.navCtrl.push('FornecedorEditPage', { fornecedor: res }); });
    };
    FornecedorListPage.prototype.openCreateFornecedor = function () {
        this.navCtrl.push('FornecedorEditPage');
    };
    FornecedorListPage.prototype.openEditFornecedor = function (id) {
        var _this = this;
        this.fornecedorProvider.get(id).subscribe(function (res) { return _this.navCtrl.push('FornecedorEditPage', { fornecedor: res }); }, function (error) {
            _this.toast.create({ message: 'Erro ao recuperar o fornecedor. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
        });
    };
    FornecedorListPage.prototype.deleteFornecedor = function (fornecedor) {
        var _this = this;
        this.fornecedorProvider.remove(fornecedor.id).subscribe(function (result) {
            var index = _this.fornecedores.indexOf(fornecedor);
            _this.fornecedores.splice(index, 1);
            _this.toast.create({ message: 'Fornecedor excluído com sucesso.', position: 'botton', duration: 3000 }).present();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__tabs_tabs__["a" /* TabsPage */]);
        }, function (error) {
            _this.toast.create({ message: 'Erro ao excluir o fornecedor. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* InfiniteScroll */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* InfiniteScroll */])
    ], FornecedorListPage.prototype, "infiniteScroll", void 0);
    FornecedorListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-fornecedor-list',template:/*ion-inline-start:"/home/ralph/Dev/ionic/salesManagementX/src/pages/fornecedor-list/fornecedor-list.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>\n        SalesManagement - Fornecedores\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <button ion-button color="primary" (click)="openCreateFornecedor()">\n      <ion-icon name="create"></ion-icon>\n      Cadastrar\n    </button>\n  \n    <ion-list>\n      <ion-item-sliding *ngFor="let fornecedor of fornecedores">\n        <ion-item (click)="openFornecedor(fornecedor.id)">\n          <ion-icon name="ionic" item-left></ion-icon>\n          <h2>{{ fornecedor.nomeFantasia }}</h2>\n          <p>{{ fornecedor.cnpj }}</p>\n        </ion-item>\n        <ion-item-options side="right">\n          <button ion-button color="primary" (click)="openEditFornecedor(fornecedor.id)">\n              <ion-icon name="create"></ion-icon>\n              Editar\n          </button>\n          <button ion-button color="danger" (click)="deleteFornecedor(fornecedor)">\n              <ion-icon name="trash"></ion-icon>\n              Excluir\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n  \n    </ion-list>\n  \n    <ion-infinite-scroll (ionInfinite)="getFornecedor($event)">\n      <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Aguarde...">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  \n    <ion-fab right bottom>\n      <button ion-fab color="light" (click)="openCreateFornecedor()"><ion-icon name="add"></ion-icon></button>\n    </ion-fab>\n  </ion-content>'/*ion-inline-end:"/home/ralph/Dev/ionic/salesManagementX/src/pages/fornecedor-list/fornecedor-list.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_0__providers_fornecedor_service_fornecedor_service__["a" /* FornecedorServiceProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_0__providers_fornecedor_service_fornecedor_service__["a" /* FornecedorServiceProvider */]])
    ], FornecedorListPage);
    return FornecedorListPage;
}());

//# sourceMappingURL=fornecedor-list.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VendasPage; });
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
 * Generated class for the VendasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VendasPage = /** @class */ (function () {
    function VendasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    VendasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VendasPage');
    };
    VendasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-vendas',template:/*ion-inline-start:"/home/ralph/Dev/ionic/salesManagementX/src/pages/vendas/vendas.html"*/'<!--\n  Generated template for the VendasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>vendas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/ralph/Dev/ionic/salesManagementX/src/pages/vendas/vendas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], VendasPage);
    return VendasPage;
}());

//# sourceMappingURL=vendas.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepresentanteListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabs_tabs__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_representante_service_representante_service__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RepresentanteListPage = /** @class */ (function () {
    function RepresentanteListPage(navCtrl, navParams, toast, representanteProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.representanteProvider = representanteProvider;
    }
    RepresentanteListPage.prototype.ionViewDidEnter = function () {
        this.representantes = [];
        this.page = 1;
        this.infiniteScroll.enable(true);
        this.getAllRepresentante(this.page);
    };
    RepresentanteListPage.prototype.getAllRepresentante = function (page) {
        var _this = this;
        this.representanteProvider.listAll().subscribe(function (response) { return _this.representantes = response; });
    };
    RepresentanteListPage.prototype.getRepresentante = function () {
        var _this = this;
        setTimeout(function () {
            _this.page += 1;
            _this.getAllRepresentante(_this.page);
        }, 500);
    };
    RepresentanteListPage.prototype.openRepresentante = function (id) {
        var _this = this;
        this.representanteProvider.get(id).subscribe(function (res) { return _this.navCtrl.push('RepresentanteEditPage', { representante: res }); });
    };
    RepresentanteListPage.prototype.openCreateRepresentante = function () {
        this.navCtrl.push('RepresentanteEditPage');
    };
    RepresentanteListPage.prototype.openEditRepresentante = function (id) {
        var _this = this;
        this.representanteProvider.get(id).subscribe(function (res) { return _this.navCtrl.push('RepresentanteEditPage', { representante: res }); }, function (error) {
            _this.toast.create({ message: 'Erro ao recuperar o representante. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
        });
    };
    RepresentanteListPage.prototype.deleteRepresentante = function (representante) {
        var _this = this;
        this.representanteProvider.remove(representante.id).subscribe(function (result) {
            var index = _this.representantes.indexOf(representante);
            _this.representantes.splice(index, 1);
            _this.toast.create({ message: 'Representante excluído com sucesso.', position: 'botton', duration: 3000 }).present();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__tabs_tabs__["a" /* TabsPage */]);
        }, function (error) {
            _this.toast.create({ message: 'Erro ao excluir o representante. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* InfiniteScroll */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* InfiniteScroll */])
    ], RepresentanteListPage.prototype, "infiniteScroll", void 0);
    RepresentanteListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-representante-list',template:/*ion-inline-start:"/home/ralph/Dev/ionic/salesManagementX/src/pages/representante-list/representante-list.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      SalesManagement - Representantes\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button color="primary" (click)="openCreateRepresentante()">\n    <ion-icon name="create"></ion-icon>\n    Cadastrar\n  </button>\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let representante of representantes">\n      <ion-item *ngIf="representante.avaliacao == 1" (click)="openRepresentante(representante.id)" style="background-color: tomato">\n        <ion-icon name="ionic" item-left></ion-icon>\n        <h2>{{ representante.nome }}</h2>\n        <p>{{ representante.cidadeRes }}</p>\n      </ion-item>\n      <ion-item *ngIf="representante.avaliacao == 2" (click)="openRepresentante(representante.id)" style="background-color: orange">\n        <ion-icon name="ionic" item-left></ion-icon>\n        <h2>{{ representante.nome }}</h2>\n        <p>{{ representante.cidadeRes }}</p>\n      </ion-item>\n      <ion-item *ngIf="representante.avaliacao == 3" (click)="openRepresentante(representante.id)" style="background-color: white">\n        <ion-icon name="ionic" item-left></ion-icon>\n        <h2>{{ representante.nome }}</h2>\n        <p>{{ representante.cidadeRes }}</p>\n      </ion-item>\n      <ion-item *ngIf="representante.avaliacao == 4" (click)="openRepresentante(representante.id)" style="background-color: yellowgreen">\n        <ion-icon name="ionic" item-left></ion-icon>\n        <h2>{{ representante.nome }}</h2>\n        <p>{{ representante.cidadeRes }}</p>\n      </ion-item>\n      <ion-item *ngIf="representante.avaliacao == 5" (click)="openRepresentante(representante.id)" style="background-color: deepskyblue">\n        <ion-icon name="ionic" item-left></ion-icon>\n        <h2>{{ representante.nome }}</h2>\n        <p>{{ representante.cidadeRes }}</p>\n      </ion-item>\n      <ion-item *ngIf="!representante.avaliacao" (click)="openRepresentante(representante.id)" style="background-color: white">\n        <ion-icon name="ionic" item-left></ion-icon>\n        <h2>{{ representante.nome }}</h2>\n        <p>{{ representante.cidadeRes }}</p>\n      </ion-item>\n\n      <ion-item-options side="right">\n        <button ion-button color="primary" (click)="openEditRepresentante(representante.id)">\n            <ion-icon name="create"></ion-icon>\n            Editar\n        </button>\n        <button ion-button color="danger" (click)="deleteRepresentante(representante)">\n            <ion-icon name="trash"></ion-icon>\n            Excluir\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="getRepresentante($event)">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Aguarde...">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n  <ion-fab right bottom>\n    <button ion-fab color="light" (click)="openCreateUser()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"/home/ralph/Dev/ionic/salesManagementX/src/pages/representante-list/representante-list.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1__providers_representante_service_representante_service__["a" /* RepresentanteServiceProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1__providers_representante_service_representante_service__["a" /* RepresentanteServiceProvider */]])
    ], RepresentanteListPage);
    return RepresentanteListPage;
}());

//# sourceMappingURL=representante-list.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepresentanteServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entity_Utils__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RepresentanteServiceProvider = /** @class */ (function () {
    function RepresentanteServiceProvider(http) {
        this.http = http;
        this.representanteUrl = __WEBPACK_IMPORTED_MODULE_1__entity_Utils__["a" /* Utils */].getUrlBackEnd() + "representante/";
    }
    RepresentanteServiceProvider.prototype.createRepresentante = function (nome, cpf, email, celular) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var data = {
                nome: nome,
                cpf: cpf,
                email: email,
                celular: celular
            };
            _this.http.post(_this.representanteUrl + 'register', data)
                .subscribe(function (result) {
                resolve(result.json());
            }, function (error) {
                reject(error.json());
            });
        });
    };
    RepresentanteServiceProvider.prototype.listAll = function () {
        return this.http.get(this.representanteUrl);
    };
    RepresentanteServiceProvider.prototype.getAll = function (page) {
        return this.http.get(this.representanteUrl + '10/' + page);
    };
    RepresentanteServiceProvider.prototype.get = function (id) {
        var url = this.representanteUrl + id;
        return this.http.get(url);
    };
    RepresentanteServiceProvider.prototype.insert = function (user) {
        var url = this.representanteUrl;
        return this.http.post(url, user);
    };
    RepresentanteServiceProvider.prototype.update = function (representante) {
        var url = this.representanteUrl + representante.id;
        return this.http.put(url, representante);
    };
    RepresentanteServiceProvider.prototype.remove = function (id) {
        var url = this.representanteUrl + id;
        return this.http.delete(url);
    };
    RepresentanteServiceProvider.prototype.addKit = function (id, kit_id) {
        var url = this.representanteUrl + 'addKit/' + id + '/' + kit_id;
        return this.http.put(url, kit_id);
    };
    RepresentanteServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], RepresentanteServiceProvider);
    return RepresentanteServiceProvider;
}());

//# sourceMappingURL=representante-service.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutoListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_produto_service_produto_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tabs_tabs__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProdutoListPage = /** @class */ (function () {
    function ProdutoListPage(navCtrl, navParams, toast, produtoProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.produtoProvider = produtoProvider;
    }
    ProdutoListPage.prototype.ionViewDidEnter = function () {
        this.produtos = [];
        this.page = 1;
        this.infiniteScroll.enable(true);
        this.showImage = false;
        this.getAllProduto(this.page);
    };
    ProdutoListPage.prototype.showFullscreenImage = function (enable) {
        this.showImage = enable;
    };
    /*openImage(id: number) {
      let produto: Produto;
      this.produtoProvider.get(id).subscribe(
        (response: Produto) => produto = response,
        () => {},
        () => {
          this.toast.create({ message: 'Produto: ' + produto.codigo, position: 'botton', duration: 3000 }).present();
          this.fullScreenImage = produto.imagem1;
          this.showFullscreenImage(true);
        }
  
      );
      
    }*/
    ProdutoListPage.prototype.getAllProduto = function (page) {
        var _this = this;
        this.produtoProvider.listAll().subscribe(function (response) { return _this.produtos = response; });
    };
    ProdutoListPage.prototype.getProduto = function () {
        var _this = this;
        setTimeout(function () {
            _this.page += 1;
            _this.getAllProduto(_this.page);
        }, 500);
    };
    ProdutoListPage.prototype.openProdutoDetail = function (id) {
        var _this = this;
        this.produtoProvider.get(id).subscribe(function (res) { return _this.navCtrl.push('ProdutoImagesPage', { produto: res }); });
    };
    ProdutoListPage.prototype.openProduto = function (id) {
        var _this = this;
        this.produtoProvider.get(id).subscribe(function (res) { return _this.navCtrl.push('ProdutoEditPage', { produto: res }); });
    };
    ProdutoListPage.prototype.openCreateProduto = function () {
        this.navCtrl.push('ProdutoEditPage');
    };
    ProdutoListPage.prototype.openEditProduto = function (id) {
        var _this = this;
        this.produtoProvider.get(id).subscribe(function (res) { return _this.navCtrl.push('ProdutoEditPage', { produto: res }); }, function (error) {
            _this.toast.create({ message: 'Erro ao recuperar o produto. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
        });
    };
    ProdutoListPage.prototype.deleteProduto = function (produto) {
        var _this = this;
        this.produtoProvider.remove(produto.id).subscribe(function (result) {
            var index = _this.produtos.indexOf(produto);
            _this.produtos.splice(index, 1);
            _this.toast.create({ message: 'Produto excluído com sucesso.', position: 'botton', duration: 3000 }).present();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__tabs_tabs__["a" /* TabsPage */]);
        }, function (error) {
            _this.toast.create({ message: 'Erro ao excluir o produto. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* InfiniteScroll */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* InfiniteScroll */])
    ], ProdutoListPage.prototype, "infiniteScroll", void 0);
    ProdutoListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-produto-list',template:/*ion-inline-start:"/home/ralph/Dev/ionic/salesManagementX/src/pages/produto-list/produto-list.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      SalesManagement - Produtos\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button color="primary" (click)="openCreateProduto()">\n    <ion-icon name="create"></ion-icon>\n    Cadastrar\n  </button>\n\n  <!--<ion-content [hidden]="!showImage" >\n    <div class="flex-content">\n      <img (click)="showFullscreenImage(false)" id="image-fullscreen" [src]="\'data:image/JPEG;base64,\' + fullScreenImage"/>\n    </div>\n  </ion-content>-->\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let produto of produtos">\n      <ion-item>\n        <ion-thumbnail item-left (click)="openProdutoDetail(produto.id)">\n              <img [src]="\'data:image/JPEG;base64,\' + produto.imagem1">\n        </ion-thumbnail>\n        <h2 (click)="openProduto(produto.id)">{{ produto.codigo }}</h2>\n        <p>{{ produto.tipo }} - {{ produto.valorVenda }} </p>\n      </ion-item>\n\n      <ion-item-options side="right">\n        <button ion-button color="primary" (click)="openEditProduto(produto.id)">\n            <ion-icon name="create"></ion-icon>\n            Editar\n        </button>\n        <button ion-button color="danger" (click)="deleteProduto(produto)">\n            <ion-icon name="trash"></ion-icon>\n            Excluir\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="getProduto($event)">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Aguarde...">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n  <ion-fab right bottom>\n    <button ion-fab color="light" (click)="openCreateProduto()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"/home/ralph/Dev/ionic/salesManagementX/src/pages/produto-list/produto-list.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_0__providers_produto_service_produto_service__["a" /* ProdutoServiceProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_produto_service_produto_service__["a" /* ProdutoServiceProvider */]])
    ], ProdutoListPage);
    return ProdutoListPage;
}());

//# sourceMappingURL=produto-list.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelatoriosPage; });
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
 * Generated class for the RelatoriosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RelatoriosPage = /** @class */ (function () {
    function RelatoriosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RelatoriosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RelatoriosPage');
    };
    RelatoriosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-relatorios',template:/*ion-inline-start:"/home/ralph/Dev/ionic/salesManagementX/src/pages/relatorios/relatorios.html"*/'<!--\n  Generated template for the RelatoriosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Relatórios</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/ralph/Dev/ionic/salesManagementX/src/pages/relatorios/relatorios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], RelatoriosPage);
    return RelatoriosPage;
}());

//# sourceMappingURL=relatorios.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabs_tabs__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_item_service_item_service__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ItemListPage = /** @class */ (function () {
    function ItemListPage(navCtrl, navParams, toast, itemProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.itemProvider = itemProvider;
    }
    ItemListPage.prototype.ionViewDidEnter = function () {
        this.itens = [];
        this.page = 1;
        this.infiniteScroll.enable(true);
        this.showImage = false;
        this.getAllItem(this.page);
    };
    ItemListPage.prototype.showFullscreenImage = function (enable) {
        this.showImage = enable;
    };
    ItemListPage.prototype.getAllItem = function (page) {
        var _this = this;
        this.itemProvider.listAll().subscribe(function (response) { return _this.itens = response; });
    };
    ItemListPage.prototype.getItem = function () {
        var _this = this;
        setTimeout(function () {
            _this.page += 1;
            _this.getAllItem(_this.page);
        }, 500);
    };
    ItemListPage.prototype.openItem = function (id) {
        var _this = this;
        this.itemProvider.get(id).subscribe(function (res) { return _this.navCtrl.push('ItemEditPage', { item: res }); });
    };
    ItemListPage.prototype.openCreateItem = function () {
        this.navCtrl.push('ItemEditPage');
    };
    ItemListPage.prototype.openEditItem = function (id) {
        var _this = this;
        this.itemProvider.get(id).subscribe(function (res) { return _this.navCtrl.push('ItemEditPage', { item: res }); }, function (error) {
            _this.toast.create({ message: 'Erro ao recuperar item. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
        });
    };
    ItemListPage.prototype.deleteItem = function (item) {
        var _this = this;
        this.itemProvider.remove(item.id).subscribe(function (result) {
            var index = _this.itens.indexOf(item);
            _this.itens.splice(index, 1);
            _this.toast.create({ message: 'Item excluído com sucesso.', position: 'botton', duration: 3000 }).present();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__tabs_tabs__["a" /* TabsPage */]);
        }, function (error) {
            _this.toast.create({ message: 'Erro ao excluir item. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* InfiniteScroll */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* InfiniteScroll */])
    ], ItemListPage.prototype, "infiniteScroll", void 0);
    ItemListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-item-list',template:/*ion-inline-start:"/home/ralph/Dev/ionic/salesManagementX/src/pages/item-list/item-list.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      SalesManagement - Itens\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button color="primary" (click)="openCreateItem()">\n    <ion-icon name="create"></ion-icon>\n    Cadastrar\n  </button>\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let item of itens">\n      <ion-item>\n        <ion-thumbnail item-left>\n              <img [src]="\'data:image/JPEG;base64,\' + item.imagem1">\n        </ion-thumbnail>\n        <h2 (click)="openItem(item.id)">{{ item.codigo }}</h2>\n        <p>{{ item.tipo }}</p>\n      </ion-item>\n\n      <ion-item-options side="right">\n        <button ion-button color="primary" (click)="openEditItem(item.id)">\n            <ion-icon name="create"></ion-icon>\n            Editar\n        </button>\n        <button ion-button color="danger" (click)="deleteItem(item)">\n            <ion-icon name="trash"></ion-icon>\n            Excluir\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="getItem($event)">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Aguarde...">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n  <ion-fab right bottom>\n    <button ion-fab color="light" (click)="openCreateItem()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"/home/ralph/Dev/ionic/salesManagementX/src/pages/item-list/item-list.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_item_service_item_service__["a" /* ItemServiceProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_item_service_item_service__["a" /* ItemServiceProvider */]])
    ], ItemListPage);
    return ItemListPage;
}());

//# sourceMappingURL=item-list.js.map

/***/ }),

/***/ 131:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 131;

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/compras/compras.module": [
		323,
		14
	],
	"../pages/estoque/estoque.module": [
		324,
		13
	],
	"../pages/fornecedor-edit/fornecedor-edit.module": [
		325,
		4
	],
	"../pages/fornecedor-list/fornecedor-list.module": [
		326,
		12
	],
	"../pages/item-edit/item-edit.module": [
		327,
		3
	],
	"../pages/item-list/item-list.module": [
		328,
		11
	],
	"../pages/kit-edit/kit-edit.module": [
		329,
		6
	],
	"../pages/kit-list/kit-list.module": [
		330,
		5
	],
	"../pages/login/login.module": [
		177
	],
	"../pages/produto-edit/produto-edit.module": [
		331,
		0
	],
	"../pages/produto-images/produto-images.module": [
		332,
		2
	],
	"../pages/produto-list/produto-list.module": [
		333,
		10
	],
	"../pages/relatorios/relatorios.module": [
		334,
		9
	],
	"../pages/representante-edit/representante-edit.module": [
		335,
		1
	],
	"../pages/representante-list/representante-list.module": [
		336,
		8
	],
	"../pages/vendas/vendas.module": [
		337,
		7
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 173;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__);
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

//import { ComponentInicial } from './../../app/app.component';




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, cookieService, requestOptions) {
        this.navCtrl = navCtrl;
        this.cookieService = cookieService;
        this.requestOptions = requestOptions;
    }
    HomePage.prototype.logout = function () {
        this.cookieService.removeAll();
        this.requestOptions.headers.set('Authorization', "Bearer ");
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__login_login__["a" /* LoginPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/home/ralph/Dev/ionic/salesManagementX/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Início</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <img src="./assets/imgs/Horus.png"/>\n  <h2>Bem vindo ao SalesManagement!</h2>\n  <p>\n    Esta aplicação visa auxiliar no gerenciamento de suas vendas, onde, de maneira\n    fácil e intuitiva, poderá acompanhar seu desempenho, metas atingidas, distância\n    para próxima meta, faixa de comissão atual, ranking e muito mais.\n  </p>\n  <button ion-button color="danger" (click)="logout()">Logout</button>\n</ion-content>\n'/*ion-inline-end:"/home/ralph/Dev/ionic/salesManagementX/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__["CookieService"],
            __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KitServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entity_Utils__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
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





var KitServiceProvider = /** @class */ (function () {
    function KitServiceProvider(http, toast) {
        this.http = http;
        this.toast = toast;
        this.kitUrl = __WEBPACK_IMPORTED_MODULE_1__entity_Utils__["a" /* Utils */].getUrlBackEnd() + "kit/";
    }
    KitServiceProvider.prototype.createKit = function (id, nome, descricao) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var data = {
                id: id,
                nome: nome,
                descricao: descricao,
            };
            _this.http.post(_this.kitUrl + 'register', data)
                .subscribe(function (result) {
                resolve(result.json());
            }, function (error) {
                reject(error.json());
            });
        });
    };
    KitServiceProvider.prototype.listAll = function () {
        return this.http.get(this.kitUrl);
    };
    KitServiceProvider.prototype.getAll = function (page) {
        return this.http.get(this.kitUrl + '10/' + page);
    };
    KitServiceProvider.prototype.get = function (id) {
        var url = this.kitUrl + id;
        return this.http.get(url);
    };
    KitServiceProvider.prototype.insert = function (kit) {
        var url = this.kitUrl;
        return this.http.post(url, kit);
    };
    KitServiceProvider.prototype.update = function (kit) {
        var url = this.kitUrl + kit.id;
        return this.http.put(url, kit);
    };
    KitServiceProvider.prototype.remove = function (id) {
        var url = this.kitUrl + id;
        return this.http.delete(url);
    };
    KitServiceProvider.prototype.addProduto = function (id, produto_id) {
        var url = this.kitUrl + 'addProduto/' + id + '/' + produto_id;
        return this.http.put(url, produto_id);
    };
    KitServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* ToastController */]])
    ], KitServiceProvider);
    return KitServiceProvider;
}());

//# sourceMappingURL=kit-service.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstoquePage; });
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
 * Generated class for the EstoquePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EstoquePage = /** @class */ (function () {
    function EstoquePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EstoquePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EstoquePage');
    };
    EstoquePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-estoque',template:/*ion-inline-start:"/home/ralph/Dev/ionic/salesManagementX/src/pages/estoque/estoque.html"*/'<!--\n  Generated template for the EstoquePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Estoque</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/ralph/Dev/ionic/salesManagementX/src/pages/estoque/estoque.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], EstoquePage);
    return EstoquePage;
}());

//# sourceMappingURL=estoque.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(244);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.getUrlBackEnd = function () {
        //return "http://localhost:8080/";
        //return "http://192.168.0.20:8080/";
        return "https://tranquil-lowlands-23192.herokuapp.com/";
    };
    Utils = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], Utils);
    return Utils;
}());

//# sourceMappingURL=Utils.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_kit_service_kit_service__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_fornecedor_list_fornecedor_list__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_item_list_item_list__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_estoque_estoque__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_produto_list_produto_list__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_image_picker__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_base64__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_perfil_perfil__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_cookie_core__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__entity_Utils__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login_module__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_component__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_about_about__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_home_home__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_tabs_tabs__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_login_service_login_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_sm_http_interceptor_sm_http_interceptor__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_representante_service_representante_service__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_representante_list_representante_list__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_produto_service_produto_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_compras_compras__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_vendas_vendas__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_relatorios_relatorios__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_item_service_item_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_fornecedor_service_fornecedor_service__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_15__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* ComponentInicial */],
                __WEBPACK_IMPORTED_MODULE_19__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_item_list_item_list__["a" /* ItemListPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_produto_list_produto_list__["a" /* ProdutoListPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_fornecedor_list_fornecedor_list__["a" /* FornecedorListPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_representante_list_representante_list__["a" /* RepresentanteListPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_compras_compras__["a" /* ComprasPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_vendas_vendas__["a" /* VendasPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_estoque_estoque__["a" /* EstoquePage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_relatorios_relatorios__["a" /* RelatoriosPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_25__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_17_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* ComponentInicial */], {}, {
                    links: [
                        { loadChildren: '../pages/compras/compras.module#ComprasPageModule', name: 'ComprasPage', segment: 'compras', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/estoque/estoque.module#EstoquePageModule', name: 'EstoquePage', segment: 'estoque', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fornecedor-edit/fornecedor-edit.module#FornecedorEditPageModule', name: 'FornecedorEditPage', segment: 'fornecedor-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fornecedor-list/fornecedor-list.module#FornecedorListPageModule', name: 'FornecedorListPage', segment: 'fornecedor-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-edit/item-edit.module#ItemEditPageModule', name: 'ItemEditPage', segment: 'item-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-list/item-list.module#ItemListPageModule', name: 'ItemListPage', segment: 'item-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/kit-edit/kit-edit.module#KitEditPageModule', name: 'KitEditPage', segment: 'kit-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/kit-list/kit-list.module#KitListPageModule', name: 'KitListPage', segment: 'kit-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/produto-edit/produto-edit.module#ProdutoEditPageModule', name: 'ProdutoEditPage', segment: 'produto-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/produto-images/produto-images.module#ProdutoImagesPageModule', name: 'ProdutoImagesPage', segment: 'produto-images', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/produto-list/produto-list.module#ProdutoListPageModule', name: 'ProdutoListPage', segment: 'produto-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/relatorios/relatorios.module#RelatoriosPageModule', name: 'RelatoriosPage', segment: 'relatorios', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/representante-edit/representante-edit.module#RepresentanteEditPageModule', name: 'RepresentanteEditPage', segment: 'representante-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/representante-list/representante-list.module#RepresentanteListPageModule', name: 'RepresentanteListPage', segment: 'representante-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vendas/vendas.module#VendasPageModule', name: 'VendasPage', segment: 'vendas', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_17_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* ComponentInicial */],
                __WEBPACK_IMPORTED_MODULE_19__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_item_list_item_list__["a" /* ItemListPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_produto_list_produto_list__["a" /* ProdutoListPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_fornecedor_list_fornecedor_list__["a" /* FornecedorListPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_representante_list_representante_list__["a" /* RepresentanteListPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_compras_compras__["a" /* ComprasPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_vendas_vendas__["a" /* VendasPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_estoque_estoque__["a" /* EstoquePage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_relatorios_relatorios__["a" /* RelatoriosPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11_angular2_cookie_core__["CookieService"],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_12__entity_Utils__["a" /* Utils */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_25__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_26__providers_sm_http_interceptor_sm_http_interceptor__["a" /* SMHttpInterceptor */], multi: true
                },
                { provide: __WEBPACK_IMPORTED_MODULE_15__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_17_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_24__providers_login_service_login_service__["a" /* LoginServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_representante_service_representante_service__["a" /* RepresentanteServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_image_picker__["a" /* ImagePicker */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_base64__["a" /* Base64 */],
                __WEBPACK_IMPORTED_MODULE_29__providers_produto_service_produto_service__["a" /* ProdutoServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["b" /* FileTransferObject */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_33__providers_item_service_item_service__["a" /* ItemServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_34__providers_fornecedor_service_fornecedor_service__["a" /* FornecedorServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_0__providers_kit_service_kit_service__["a" /* KitServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fornecedor_list_fornecedor_list__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vendas_vendas__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__compras_compras__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__representante_list_representante_list__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__produto_list_produto_list__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__relatorios_relatorios__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__item_list_item_list__ = __webpack_require__(120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_0__fornecedor_list_fornecedor_list__["a" /* FornecedorListPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_5__representante_list_representante_list__["a" /* RepresentanteListPage */];
        //tab3Root = ContactPage;
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_8__item_list_item_list__["a" /* ItemListPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_6__produto_list_produto_list__["a" /* ProdutoListPage */];
        this.tab6Root = __WEBPACK_IMPORTED_MODULE_2__compras_compras__["a" /* ComprasPage */];
        this.tab7Root = __WEBPACK_IMPORTED_MODULE_1__vendas_vendas__["a" /* VendasPage */];
        this.tab9Root = __WEBPACK_IMPORTED_MODULE_7__relatorios_relatorios__["a" /* RelatoriosPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({template:/*ion-inline-start:"/home/ralph/Dev/ionic/salesManagementX/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <!--<ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>-->\n  <!--<ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>-->\n  <ion-tab [root]="tab2Root" tabTitle="Fornecedores" tabIcon="contact"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Representantes" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Itens" tabIcon="list-box"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Produtos" tabIcon="star"></ion-tab>\n  <!--<ion-tab [root]="tab4Root" tabTitle="Perfis" tabIcon="contacts"></ion-tab>-->\n  <ion-tab [root]="tab6Root" tabTitle="Compras" tabIcon="basket"></ion-tab>\n  <ion-tab [root]="tab7Root" tabTitle="Vendas" tabIcon="cash"></ion-tab>\n  <ion-tab [root]="tab8Root" tabTitle="Estoque" tabIcon="clipboard"></ion-tab>\n  <ion-tab [root]="tab9Root" tabTitle="Relatórios" tabIcon="analytics"></ion-tab>\n\n</ion-tabs>\n'/*ion-inline-end:"/home/ralph/Dev/ionic/salesManagementX/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_perfil_service_perfil_service__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PerfilPage = /** @class */ (function () {
    function PerfilPage(navCtrl, perfilService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.perfilService = perfilService;
        this.toastCtrl = toastCtrl;
    }
    PerfilPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.perfis = [];
        this.toastCtrl.create({ message: 'Getting Perfis', position: 'botton', duration: 3000 }).present();
        this.perfilService.getPerfis().subscribe(function (response) {
            _this.perfis = response;
            _this.toastCtrl.create({ message: 'Perfil[0]: ' + _this.perfis[0].nome, position: 'botton', duration: 3000 }).present(),
                function (err) { return _this.toastCtrl.create({ message: 'Perfil.ts - getPerfis Erro: ' + err.error, position: 'botton', duration: 3000 }).present(); };
        });
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'perfil-page',template:/*ion-inline-start:"/home/ralph/Dev/ionic/salesManagementX/src/pages/perfil/perfil.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Perfis\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Perfis</ion-list-header>\n    <ion-item *ngFor="let perfil of perfis">\n      <ion-icon name="ionic" item-left></ion-icon>\n      {{perfil.nome}}\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/ralph/Dev/ionic/salesManagementX/src/pages/perfil/perfil.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_0__providers_perfil_service_perfil_service__["a" /* PerfilServiceProvider */]]
        }),
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_perfil_service_perfil_service__["a" /* PerfilServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */]])
    ], PerfilPage);
    return PerfilPage;
}());

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entity_Utils__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PerfilServiceProvider = /** @class */ (function () {
    function PerfilServiceProvider(http, toastCtrl) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.perfilUrl = __WEBPACK_IMPORTED_MODULE_3__entity_Utils__["a" /* Utils */].getUrlBackEnd() + "perfil/";
    }
    PerfilServiceProvider.prototype.getPerfis = function () {
        this.toastCtrl.create({ message: 'Perfil Service - GetPerfis()', position: 'botton', duration: 3000 }).present();
        return this.http.get(this.perfilUrl);
    };
    PerfilServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */]])
    ], PerfilServiceProvider);
    return PerfilServiceProvider;
}());

//# sourceMappingURL=perfil-service.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentInicial; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ComponentInicial = /** @class */ (function () {
    function ComponentInicial(platform, statusBar, splashScreen, requestOptions, cookieService) {
        this.requestOptions = requestOptions;
        this.cookieService = cookieService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */];
        if (this.cookieService.getObject("usuarioAtual")) {
            this.requestOptions.headers.set('Authorization', "Bearer " + this.cookieService.get("accessToken"));
            this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */];
        }
        else {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */];
        }
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* Nav */])
    ], ComponentInicial.prototype, "nav", void 0);
    ComponentInicial = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({template:/*ion-inline-start:"/home/ralph/Dev/ionic/salesManagementX/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/ralph/Dev/ionic/salesManagementX/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */],
            __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"]])
    ], ComponentInicial);
    return ComponentInicial;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
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


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about',template:/*ion-inline-start:"/home/ralph/Dev/ionic/salesManagementX/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/ralph/Dev/ionic/salesManagementX/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SMHttpInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_cookie_core__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service_login_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_finally__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_finally___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_finally__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_filter__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_take__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_take__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var SMHttpInterceptor = /** @class */ (function () {
    function SMHttpInterceptor(cookieService, loginService, toastCtrl) {
        this.cookieService = cookieService;
        this.loginService = loginService;
        this.toastCtrl = toastCtrl;
    }
    SMHttpInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        //this.toastCtrl.create({ message: 'Interceptor - AccessToken: ' + this.cookieService.get("accessToken"), position: 'botton', duration: 3000 }).present();
        var authReq = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + this.cookieService.get("accessToken"))
        });
        //this.toastCtrl.create({ message: 'Interceptor - req Keys: ' + authReq.headers.keys(), position: 'botton', duration: 3000 }).present();
        return next.handle(authReq)
            .catch(function (error) {
            if (error instanceof __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["d" /* HttpErrorResponse */]) {
                switch (error.status) {
                    case 401:
                        _this.toastCtrl.create({ message: 'Interceptor - Error 401', position: 'botton', duration: 3000 }).present();
                        return _this.getAccessToken(req, next);
                    case 0:
                        _this.toastCtrl.create({ message: 'Interceptor - Error 0', position: 'botton', duration: 3000 }).present();
                        return _this.getAccessToken(req, next);
                }
                _this.toastCtrl.create({ message: 'Interceptor - Error: ' + error.error, position: 'botton', duration: 3000 }).present();
                __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw(error);
            }
            else {
                _this.toastCtrl.create({ message: 'Interceptor - Error: ' + error.error, position: 'botton', duration: 3000 }).present();
                __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw(error);
            }
        });
    };
    SMHttpInterceptor.prototype.getAccessToken = function (req, next) {
        var _this = this;
        //this.toastCtrl.create({ message: 'Interceptor - RefreshToken: ' + this.cookieService.get("refreshToken"), position: 'botton', duration: 3000 }).present();
        this.loginService.getAccessToken(this.cookieService.get("refreshToken")).switchMap(function (resp) {
            _this.cookieService.put("accessToken", resp.access_token);
            //this.toastCtrl.create({ message: 'Interceptor - AccessToken: ' + this.cookieService.get("accessToken"), position: 'botton', duration: 3000 }).present();
            return next.handle(req.clone({
                setHeaders: { Authorization: 'Bearer ' + _this.cookieService.get("accessToken") }
            }));
        }).catch(function (err) { return _this.toastCtrl.create({ message: 'Interceptor - getAccessToken Error: ' + err.error, position: 'botton', duration: 3000 }).present(); });
        return next.handle(req.clone({
            setHeaders: { Authorization: 'Bearer ' + this.cookieService.get("accessToken") }
        }));
    };
    SMHttpInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angular2_cookie_core__["CookieService"], __WEBPACK_IMPORTED_MODULE_2__login_service_login_service__["a" /* LoginServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], SMHttpInterceptor);
    return SMHttpInterceptor;
}());

//# sourceMappingURL=sm-http-interceptor.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabs_tabs__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_login_service_login_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_cookie_core__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_cookie_core__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, toast, formBuilder, nav, cookieService, loginService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.formBuilder = formBuilder;
        this.nav = nav;
        this.cookieService = cookieService;
        this.loginService = loginService;
        this.loginForm = formBuilder.group({
            nome: [''],
            senha: ['']
        });
    }
    LoginPage.prototype.loginUser = function () {
        var _this = this;
        if (this.loginForm.valid) {
            this.loginService.login(this.loginForm.value).subscribe(function (response) { return _this.loginSuccess(response); }, function (error) {
                _this.toast.create({ message: 'Usuário ou senha inválido!', position: 'botton', duration: 3000 }).present();
                _this.loginForm.reset();
            });
        }
        else {
            this.loading.present();
        }
    };
    LoginPage.prototype.loginSuccess = function (res) {
        var _this = this;
        this.cookieService.removeAll;
        this.cookieService.put("accessToken", res.access_token);
        this.cookieService.put("refreshToken", res.refresh_token);
        this.loginService.getUsuarioAtual(res.access_token).subscribe(function (res) { return _this.redirectPage(res); });
    };
    LoginPage.prototype.redirectPage = function (res) {
        this.cookieService.putObject("usuarioAtual", res);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__tabs_tabs__["a" /* TabsPage */]);
    };
    LoginPage.prototype.redirectUser = function (response) {
        this.cookieService.removeAll();
        this.cookieService.put("accessToken", response.access_token);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/home/ralph/Dev/ionic/salesManagementX/src/pages/login/login.html"*/'<ion-content id="login">\n  <form [formGroup]="loginForm" (submit)="loginUser()" novalidate>\n    <div class="row responsive-md">\n      <div class="col col-50 col-offset-25">\n\n        <ion-item>\n          <ion-label stacked>Nome</ion-label>\n          <ion-input formControlName="nome" type="text" placeholder="Seu usuário"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>Senha</ion-label>\n          <ion-input #password formControlName="senha" type="password" placeholder="Sua senha"></ion-input>\n        </ion-item>\n\n        <button ion-button block type="submit">\n        Login\n      </button>\n        <button ion-button block clear (click)="goToSignup()">\n        Criar uma nova conta\n      </button>\n\n      </div>\n    </div>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/ralph/Dev/ionic/salesManagementX/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_cookie_core__["CookieService"],
            __WEBPACK_IMPORTED_MODULE_1__providers_login_service_login_service__["a" /* LoginServiceProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entity_Utils__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginServiceProvider = /** @class */ (function () {
    function LoginServiceProvider(http, requestOptions, toast) {
        this.http = http;
        this.requestOptions = requestOptions;
        this.toast = toast;
        this.loginUrl = __WEBPACK_IMPORTED_MODULE_1__entity_Utils__["a" /* Utils */].getUrlBackEnd() + "oauth/token?grant_type=password&username=";
        this.refreshUrl = __WEBPACK_IMPORTED_MODULE_1__entity_Utils__["a" /* Utils */].getUrlBackEnd() + "oauth/token?grant_type=refresh_token&refresh_token=";
        this.userUrl = __WEBPACK_IMPORTED_MODULE_1__entity_Utils__["a" /* Utils */].getUrlBackEnd() + "usuario/logado";
    }
    LoginServiceProvider.prototype.login = function (usuario) {
        this.loginUrl + usuario.nome + "&password=" + encodeURIComponent(usuario.senha);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            "Authorization": "Basic " + btoa("myapp" + ':' + "123")
        });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.loginUrl + usuario.nome + "&password=" +
            usuario.senha, {}, options)
            .map(function (res) { return res.json(); });
    };
    LoginServiceProvider.prototype.getUsuarioAtual = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Authorization': "Bearer " + token });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.requestOptions.headers.set('Authorization', "Bearer " + token);
        return this.http.get(this.userUrl, options)
            .map(function (res) { return res.json; });
    };
    LoginServiceProvider.prototype.getAccessToken = function (refreshToken) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            "Authorization": "Basic " + btoa("myapp" + ':' + "123")
        });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        console.log("RefreshUrl: " + this.refreshUrl + refreshToken);
        return this.http.post(this.refreshUrl + refreshToken, {}, options)
            .map(function (res) { return res.json(); });
    };
    LoginServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* ToastController */]])
    ], LoginServiceProvider);
    return LoginServiceProvider;
}());

//# sourceMappingURL=login-service.js.map

/***/ })

},[223]);
//# sourceMappingURL=main.js.map