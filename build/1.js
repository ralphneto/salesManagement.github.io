webpackJsonp([1],{

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepresentanteEditPageModule", function() { return RepresentanteEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__representante_edit__ = __webpack_require__(347);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RepresentanteEditPageModule = /** @class */ (function () {
    function RepresentanteEditPageModule() {
    }
    RepresentanteEditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__representante_edit__["a" /* RepresentanteEditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__representante_edit__["a" /* RepresentanteEditPage */]),
            ],
        })
    ], RepresentanteEditPageModule);
    return RepresentanteEditPageModule;
}());

//# sourceMappingURL=representante-edit.module.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepresentanteEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_kit_service_kit_service__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tabs_tabs__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_representante_service_representante_service__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entity_Representante__ = __webpack_require__(348);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RepresentanteEditPage = /** @class */ (function () {
    function RepresentanteEditPage(navCtrl, navParams, toast, representanteProvider, kitProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.representanteProvider = representanteProvider;
        this.kitProvider = kitProvider;
        this.showKits = false;
        if (this.navParams.data.representante) {
            this.model = this.navParams.data.representante;
        }
        else {
            this.model = new __WEBPACK_IMPORTED_MODULE_5__entity_Representante__["a" /* Representante */]();
        }
    }
    RepresentanteEditPage.prototype.changeShowKits = function (enable) {
        this.showKits = enable;
    };
    RepresentanteEditPage.prototype.save = function () {
        var _this = this;
        this.saveRepresentante().subscribe(function () {
            _this.toast.create({ message: 'Representante salvo com sucesso.', position: 'botton', duration: 3000 }).present();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__tabs_tabs__["a" /* TabsPage */]);
            //this.navCtrl.pop();
        }, function (error) {
            _this.toast.create({ message: 'Erro ao salvar o representante. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
        });
    };
    RepresentanteEditPage.prototype.saveRepresentante = function () {
        if (this.model.id) {
            return this.representanteProvider.update(this.model);
        }
        else {
            return this.representanteProvider.insert(this.model);
        }
    };
    RepresentanteEditPage.prototype.getAllKits = function () {
        var _this = this;
        this.kitProvider.listAll().subscribe(function (response) { return _this.kits = response; });
    };
    RepresentanteEditPage.prototype.addKit = function () {
        var _this = this;
        this.saveRepresentante().subscribe(function (res) {
            _this.model = res;
        }, function (error) {
            _this.toast.create({ message: 'Erro ao salvar o representante. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
        }, function () {
            if (_this.kit_id)
                _this.representanteProvider.addKit(_this.model.id, _this.kit_id).subscribe(function (res) { return console.log(res); });
            _this.toast.create({ message: 'Kit adicionado ao representante.', position: 'botton', duration: 3000 }).present();
        });
    };
    RepresentanteEditPage.prototype.ionViewDidEnter = function () {
        this.kits = [];
        this.getAllKits();
    };
    RepresentanteEditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RepresentanteEditPage');
        //this.getAllKits();
    };
    RepresentanteEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-representante-edit',template:/*ion-inline-start:"/home/ralph/Dev/ionic/salesManagementX/src/pages/representante-edit/representante-edit.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Representantes\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item>\n      <ion-label stacked>Nome</ion-label>\n      <ion-input type="text" name="nome" [(ngModel)]="model.nome"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>CPF</ion-label>\n      <ion-input type="text" name="cpf" [(ngModel)]="model.cpf"></ion-input>\n    </ion-item>    \n    \n    <ion-item>\n      <ion-label stacked>RG</ion-label>\n      <ion-input type="text" name="rg" [(ngModel)]="model.rg"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label>Data de Nascimento</ion-label>\n      <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="model.dtNascimento"></ion-datetime>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label stacked>Endereço Residencial</ion-label>\n      <ion-input type="text" name="endRes" [(ngModel)]="model.endRes"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label stacked>Referência do Endereço Residencial</ion-label>\n      <ion-input type="text" name="refEndRes" [(ngModel)]="model.refEndRes"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Bairro</ion-label>\n      <ion-input type="text" name="bairroRes" [(ngModel)]="model.bairroRes"></ion-input>\n    </ion-item>    \n    \n    <ion-item>\n      <ion-label stacked>Cidade</ion-label>\n      <ion-input type="text" name="cidadeRes" [(ngModel)]="model.cidadeRes"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label stacked>Estado</ion-label>\n      <ion-input type="text" name="estadoRes" [(ngModel)]="model.estadoRes"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>CEP</ion-label>\n      <ion-input type="text" name="cepRes" [(ngModel)]="model.cepRes"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label stacked>Telefone Residencial</ion-label>\n      <ion-input type="text" name="telRes" [(ngModel)]="model.telRes"></ion-input>\n    </ion-item>    \n    \n    <ion-item>\n      <ion-label stacked>Empresa</ion-label>\n      <ion-input type="text" name="empresa" [(ngModel)]="model.empresa"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label stacked>Endereço Comercial</ion-label>\n      <ion-input type="text" name="endCom" [(ngModel)]="model.endCom"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label stacked>Referência Endereço Comercial</ion-label>\n      <ion-input type="text" name="refEndCom" [(ngModel)]="model.refEndCom"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label stacked>Bairro</ion-label>\n      <ion-input type="text" name="bairroCom" [(ngModel)]="model.bairroCom"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label stacked>Cidade</ion-label>\n      <ion-input type="text" name="cidadeCom" [(ngModel)]="model.cidadeCom"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label stacked>Estado</ion-label>\n      <ion-input type="text" name="estadoCom" [(ngModel)]="model.estadoCom"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label stacked>CEP</ion-label>\n      <ion-input type="text" name="cepCom" [(ngModel)]="model.cepCom"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label stacked>Telefone Comercial</ion-label>\n      <ion-input type="text" name="telCom" [(ngModel)]="model.telCom"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label stacked>Celular</ion-label>\n      <ion-input type="text" name="celular" [(ngModel)]="model.celular"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label stacked>E-mail</ion-label>\n      <ion-input type="text" name="email" [(ngModel)]="model.email"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label stacked>Referência 1</ion-label>\n      <ion-input type="text" name="referencia1" [(ngModel)]="model.referencia1"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label stacked>Referência 2</ion-label>\n      <ion-input type="text" name="referencia2" [(ngModel)]="model.referencia2"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label stacked>Referência 3</ion-label>\n      <ion-input type="text" name="referencia3" [(ngModel)]="model.referencia3"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label stacked>Situação CPF</ion-label>\n      <ion-input type="text" name="situacaoCpf" [(ngModel)]="model.situacaoCpf"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label stacked>Observações</ion-label>\n      <ion-input type="text" name="descricaoSituacao" [(ngModel)]="model.descricaoSituacao"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Avaliação</ion-label>\n      <ion-select [(ngModel)]="model.avaliacao">\n        <ion-option value="5">Ótimo</ion-option>\n        <ion-option value="4">Bom</ion-option>\n        <ion-option value="3">Regular</ion-option>\n        <ion-option value="2">Ruim</ion-option>\n        <ion-option value="1">Péssimo</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Motivo Avaliação:</ion-label>\n      <ion-input type="text" name="descAvaliacao" [(ngModel)]="model.descAvaliacao"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-grid>\n    <ion-row>\n      <ion-label stacked>Kits do Representante</ion-label>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-select [(ngModel)]="kit_id">\n            <ion-option *ngFor="let kit of kits" value="{{ kit.id }}">{{ kit.nome }}</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <button ion-button class="button btn-add" (click)=\'addKit()\'>\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <br>\n\n  <button class="button btn-info" ion-button *ngIf=\'showKits\'\n	(click)=\'changeShowKits(false)\'>Ocultar Kits</button>\n\n  <button class="button btn-info" ion-button *ngIf=\'!showKits\'\n	(click)=\'changeShowKits(true)\'>Exibir Kits</button>\n\n  <div [hidden]="!showKits">\n	  <div class="panel panel-primary">\n		  <h2>Kits:</h2>\n			  <div class="panel-body">\n            <ion-list>\n                <ion-item-sliding *ngFor="let kit of model.kits">\n                  <ion-item>\n                    <h2>{{ kit.nome }}</h2>\n                    <p>{{ kit.descricao }}</p>\n                  </ion-item>\n                </ion-item-sliding>\n                <ion-item-options side="right">\n                  <button ion-button color="danger" (click)="removeKit(kit)">\n                      <ion-icon name="trash"></ion-icon>\n                      Excluir\n                  </button>\n                </ion-item-options>\n              </ion-list>\n			  </div>\n	  </div>\n  </div>\n\n\n  <button ion-button block (click)="save()" color="primary">Salvar</button>\n</ion-content>'/*ion-inline-end:"/home/ralph/Dev/ionic/salesManagementX/src/pages/representante-edit/representante-edit.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_representante_service_representante_service__["a" /* RepresentanteServiceProvider */], __WEBPACK_IMPORTED_MODULE_0__providers_kit_service_kit_service__["a" /* KitServiceProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_representante_service_representante_service__["a" /* RepresentanteServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_kit_service_kit_service__["a" /* KitServiceProvider */]])
    ], RepresentanteEditPage);
    return RepresentanteEditPage;
}());

//# sourceMappingURL=representante-edit.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Representante; });
var Representante = /** @class */ (function () {
    function Representante() {
    }
    return Representante;
}());

//# sourceMappingURL=Representante.js.map

/***/ })

});
//# sourceMappingURL=1.js.map