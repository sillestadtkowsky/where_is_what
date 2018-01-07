webpackJsonp([1],{

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateHomePageModule", function() { return CreateHomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createHome__ = __webpack_require__(327);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CreateHomePageModule = (function () {
    function CreateHomePageModule() {
    }
    CreateHomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__createHome__["a" /* CreateHomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__createHome__["a" /* CreateHomePage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__createHome__["a" /* CreateHomePage */]
            ]
        })
    ], CreateHomePageModule);
    return CreateHomePageModule;
}());

//# sourceMappingURL=createHome.module.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_wohnung_model__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_whoIsWhat_provider__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateHomePage = (function () {
    function CreateHomePage(navCtl, wiwProvider, toaster) {
        this.navCtl = navCtl;
        this.wiwProvider = wiwProvider;
        this.toaster = toaster;
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            homeName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            info: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
        this.name = "?";
    }
    CreateHomePage.prototype.addHome = function () {
        var _this = this;
        this.wiwProvider.createWohnung(new __WEBPACK_IMPORTED_MODULE_3__models_wohnung_model__["a" /* Wohnung */](this.form.controls['homeName'].value))
            .then(function (wohnung) {
            _this.form.reset();
            _this.toaster.create({
                closeButtonText: 'X',
                dismissOnPageChange: false,
                cssClass: 'success',
                position: 'top',
                duration: 5000,
                message: 'Wohnung "' + wohnung.name + '" wurde erzeugt.'
            }).present();
            _this.navCtl.pop();
        })
            .catch(function (error) {
            _this.toaster.create({
                closeButtonText: 'X',
                dismissOnPageChange: true,
                cssClass: 'error',
                duration: 5000,
                position: 'top',
                message: 'Es ist ein Fehler aufgetreten: ' + JSON.stringify(error)
            }).present();
            console.error(error);
        });
    };
    CreateHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-createHome',template:/*ion-inline-start:"/home/gabanna/dev/who_is_what/src/pages/createHome/createHome.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{ \'Erzeuge deine Wohnung\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding scroll="false">\n  <h2 color="primary">Gib der Wohnung einen Namen</h2>\n  <form class="create-home-form" *ngIf="form" [formGroup]="form">\n    <ion-input type="text" #fileInput  placeholder="name" formControlName="homeName"> </ion-input>\n    <button ion-button block (click)="addHome()">{{ \'erzeugen\' | translate }}</button>\n  </form>\n</ion-content>'/*ion-inline-end:"/home/gabanna/dev/who_is_what/src/pages/createHome/createHome.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_whoIsWhat_provider__["a" /* WhoIsWhatProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */]])
    ], CreateHomePage);
    return CreateHomePage;
}());

//# sourceMappingURL=createHome.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wohnung; });
/* unused harmony export Raum */
/* unused harmony export Gegenstand */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BaseEntity = (function () {
    function BaseEntity(name) {
        this.date = new Date();
        this.name = name;
    }
    return BaseEntity;
}());
var Wohnung = (function (_super) {
    __extends(Wohnung, _super);
    function Wohnung() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.raeume = new Array();
        return _this;
    }
    return Wohnung;
}(BaseEntity));

var Raum = (function (_super) {
    __extends(Raum, _super);
    function Raum() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Raum;
}(BaseEntity));

var Gegenstand = (function (_super) {
    __extends(Gegenstand, _super);
    function Gegenstand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Gegenstand;
}(BaseEntity));

//# sourceMappingURL=wohnung.model.js.map

/***/ })

});
//# sourceMappingURL=1.js.map