webpackJsonp([0],{

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_wohnungen_wohnungen_component__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_splash_splash_component__ = __webpack_require__(331);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MainPageModule = (function () {
    function MainPageModule() {
    }
    MainPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__main__["a" /* MainPage */],
                __WEBPACK_IMPORTED_MODULE_4__components_wohnungen_wohnungen_component__["a" /* WohnungenComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_splash_splash_component__["a" /* SplashComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__main__["a" /* MainPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__main__["a" /* MainPage */]
            ]
        })
    ], MainPageModule);
    return MainPageModule;
}());

//# sourceMappingURL=main.module.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_whoIsWhat_provider__ = __webpack_require__(219);
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
 * Die Main Page ist die erste Seite welche angezeigt wir.
 * Eventuell wurde bereits eine Wohnung angelegt,
 * oder es wird die Erzeugung einer Wohnung vorgeschlagen.
*/
var MainPage = (function () {
    function MainPage(navCtrl, wiwProvider) {
        this.navCtrl = navCtrl;
        this.wiwProvider = wiwProvider;
        this.addCreateHome = true;
    }
    MainPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.wiwProvider.getWohnungen().then(function (wohnungen) { return _this.wohnungen = wohnungen; });
    };
    MainPage.prototype.createHome = function () {
        this.navCtrl.push('CreateHomePage');
    };
    MainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-main',template:/*ion-inline-start:"/home/gabanna/dev/who_is_what/src/pages/main/main.html"*/'<ion-content scroll="false">\n  <splash></splash>\n  <div padding>\n      <button *ngIf="addCreateHome"  ion-button block (click)="createHome()">{{ \'Erstelle deine Wohnung\' | translate }}</button>\n  </div>\n  <wohnungen [value]="wohnungen"></wohnungen>\n</ion-content>\n'/*ion-inline-end:"/home/gabanna/dev/who_is_what/src/pages/main/main.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_whoIsWhat_provider__["a" /* WhoIsWhatProvider */]])
    ], MainPage);
    return MainPage;
}());

//# sourceMappingURL=main.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WohnungenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_nav_controller__ = __webpack_require__(21);
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
    function WohnungenComponent(navCtl) {
        this.navCtl = navCtl;
    }
    WohnungenComponent.prototype.openWohnung = function (wohnung) {
        this.navCtl.push('ViewHomePage', wohnung);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], WohnungenComponent.prototype, "value", void 0);
    WohnungenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'wohnungen',template:/*ion-inline-start:"/home/gabanna/dev/who_is_what/src/components/wohnungen/wohnungen.component.html"*/'<h2 color="primary">angelegte Wohnungen</h2>\n<ion-list class="wohnungen" *ngIf="value?.length > 0">\n    <li *ngFor="let wohnung of value" class="wohnung" (click)="openWohnung(wohnung)">\n    <span>{{ wohnung.name }}</span>\n    <span class="date">{{ wohnung.date }}</span>\n    </li>\n</ion-list>\n<p *ngIf="!value || value.length == 0">Es liegen noch keine Wohnungen vor</p>'/*ion-inline-end:"/home/gabanna/dev/who_is_what/src/components/wohnungen/wohnungen.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_nav_controller__["a" /* NavController */]])
    ], WohnungenComponent);
    return WohnungenComponent;
}());

//# sourceMappingURL=wohnungen.component.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_nav_controller__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SplashComponent = (function () {
    function SplashComponent(navCtl) {
        this.navCtl = navCtl;
    }
    SplashComponent.prototype.openWohnung = function (wohnung) {
        this.navCtl.push('ViewHomePage', wohnung);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], SplashComponent.prototype, "value", void 0);
    SplashComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'splash',template:/*ion-inline-start:"/home/gabanna/dev/who_is_what/src/components/splash/splash.component.html"*/'<div class="splash-bg"></div>\n<div class="splash-info">\n    <div class="splash-logo"></div>\n    <div class="splash-intro">\n        {{ \'Gesucht gefunden - where is what?\' | translate }}\n    </div>\n</div>'/*ion-inline-end:"/home/gabanna/dev/who_is_what/src/components/splash/splash.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_nav_controller__["a" /* NavController */]])
    ], SplashComponent);
    return SplashComponent;
}());

//# sourceMappingURL=splash.component.js.map

/***/ })

});
//# sourceMappingURL=0.js.map