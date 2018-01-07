webpackJsonp([0],{

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateHomePageModule", function() { return CreateHomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createHome__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_wohnungen_wohnungen_component__ = __webpack_require__(349);
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
                __WEBPACK_IMPORTED_MODULE_4__components_wohnungen_wohnungen_component__["a" /* WohnungenComponent */]
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

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_wohnung_model__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_whoIsWhat_provider__ = __webpack_require__(226);
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
    function CreateHomePage(wiwProvider, toaster) {
        this.wiwProvider = wiwProvider;
        this.toaster = toaster;
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            homeName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            info: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]()
        });
        this.name = "?";
    }
    CreateHomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.wiwProvider.getWohnungen().then(function (wohnungen) { return _this.wohnungen = wohnungen; });
    };
    CreateHomePage.prototype.addHome = function () {
        var _this = this;
        this.wiwProvider.createWohnung(new __WEBPACK_IMPORTED_MODULE_3__models_wohnung_model__["a" /* Wohnung */](this.form.controls['homeName'].value))
            .then(function (wohnung) {
            _this.form.reset();
            _this.wohnungen.push(wohnung);
            _this.toaster.create({
                closeButtonText: 'X',
                dismissOnPageChange: true,
                cssClass: 'success',
                position: 'top',
                message: 'Wohnung "' + wohnung.name + '" wurde erzeugt.'
            }).present();
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
            selector: 'page-createHome',template:/*ion-inline-start:"/home/gabanna/dev/who_is_what/src/pages/createHome/createHome.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'Erzeuge deine Wohnung\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding scroll="false">\n  <h2 color="primary">Gib der Wohnung einen Namen</h2>\n  <form class="create-home-form" *ngIf="form" [formGroup]="form">\n    <ion-input type="text" #fileInput  placeholder="name" formControlName="homeName"> </ion-input>\n    <button ion-button block (click)="addHome()">{{ \'erzeugen\' | translate }}</button>\n  </form>\n\n  <wohnungen [value]="wohnungen"></wohnungen>\n</ion-content>'/*ion-inline-end:"/home/gabanna/dev/who_is_what/src/pages/createHome/createHome.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__providers_whoIsWhat_provider__["a" /* WhoIsWhatProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_whoIsWhat_provider__["a" /* WhoIsWhatProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */]) === "function" && _b || Object])
    ], CreateHomePage);
    return CreateHomePage;
    var _a, _b;
}());

//# sourceMappingURL=createHome.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wohnung; });
var Wohnung = (function () {
    function Wohnung(name, date) {
        if (date === void 0) { date = new Date(); }
        this.name = name;
        this.date = date;
    }
    return Wohnung;
}());

//# sourceMappingURL=wohnung.model.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WohnungenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WohnungenComponent = (function () {
    function WohnungenComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], WohnungenComponent.prototype, "value", void 0);
    WohnungenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'wohnungen',template:/*ion-inline-start:"/home/gabanna/dev/who_is_what/src/components/wohnungen/wohnungen.component.html"*/'<h2 color="primary">angelegte Wohnungen</h2>\n<ion-list class="wohnungen" *ngIf="value?.length > 0">\n    <li *ngFor="let wohnung of value" class="wohnung">\n    <span>{{ wohnung.name }}</span>\n    <span class="date">{{ wohnung.date }}</span>\n    </li>\n</ion-list>\n<p *ngIf="!value || value.length == 0">Es liegen noch keine Wohnungen vor</p>'/*ion-inline-end:"/home/gabanna/dev/who_is_what/src/components/wohnungen/wohnungen.component.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], WohnungenComponent);
    return WohnungenComponent;
}());

//# sourceMappingURL=wohnungen.component.js.map

/***/ })

});
//# sourceMappingURL=0.js.map