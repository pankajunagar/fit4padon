(self["webpackChunkCCS"] = self["webpackChunkCCS"] || []).push([["src_app_anthropometry_anthropometry_module_ts"],{

/***/ 38999:
/*!***************************************************************!*\
  !*** ./src/app/anthropometry/anthropometry-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnthropometryPageRoutingModule": () => (/* binding */ AnthropometryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _anthropometry_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anthropometry.page */ 63641);




const routes = [
    {
        path: '',
        component: _anthropometry_page__WEBPACK_IMPORTED_MODULE_0__.AnthropometryPage
    }
];
let AnthropometryPageRoutingModule = class AnthropometryPageRoutingModule {
};
AnthropometryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AnthropometryPageRoutingModule);



/***/ }),

/***/ 80891:
/*!*******************************************************!*\
  !*** ./src/app/anthropometry/anthropometry.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnthropometryPageModule": () => (/* binding */ AnthropometryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _anthropometry_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anthropometry-routing.module */ 38999);
/* harmony import */ var _anthropometry_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./anthropometry.page */ 63641);







let AnthropometryPageModule = class AnthropometryPageModule {
};
AnthropometryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _anthropometry_routing_module__WEBPACK_IMPORTED_MODULE_0__.AnthropometryPageRoutingModule
        ],
        declarations: [_anthropometry_page__WEBPACK_IMPORTED_MODULE_1__.AnthropometryPage]
    })
], AnthropometryPageModule);



/***/ }),

/***/ 63641:
/*!*****************************************************!*\
  !*** ./src/app/anthropometry/anthropometry.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnthropometryPage": () => (/* binding */ AnthropometryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_anthropometry_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./anthropometry.page.html */ 73939);
/* harmony import */ var _anthropometry_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./anthropometry.page.scss */ 96581);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ 16527);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loader.service */ 98077);
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service.service */ 59353);









let AnthropometryPage = class AnthropometryPage {
    constructor(alertController, navCtrl, service, router, config, loader) {
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.service = service;
        this.router = router;
        this.config = config;
        this.loader = loader;
        this.logindata = JSON.parse(localStorage.getItem("ccs_login"));
        console.log(this.logindata);
    }
    ngOnInit() {
        this.getdemographicdata();
    }
    backbutton() {
        this.navCtrl.pop();
    }
    detailopen(i) {
        console.log('selected data=> ', this.graphicsdata[i]);
        this.navCtrl.navigateForward(["/anthropometry-detail", this.graphicsdata[i]]);
    }
    getdemographicdata() {
        this.loader.showLoader();
        var params = {
            user_id: this.logindata.id
        };
        console.log(params);
        this.service.getdemographicdata(params)
            .then((result) => this.setdemographicdata(result));
    }
    setdemographicdata(res) {
        console.log('setdemographicdata=> ', res);
        this.loader.dissmissLoader();
        if (res.ResponseCode == '1') {
            this.graphicsdata = res.data;
            console.log('graphicsdata=>', this.graphicsdata);
        }
    }
    chkyear(date) {
        let d = new Date(new Date(date));
        d.setMonth(d.getMonth());
        this.date2 = d.toISOString().slice(0, 4);
        let newd = new Date(new Date());
        newd.setMonth(newd.getMonth());
        this.date1 = newd.toISOString().slice(0, 4);
        var chkd = this.date1 - this.date2;
        return chkd;
    }
};
AnthropometryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_4__.ServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService },
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService }
];
AnthropometryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-anthropometry',
        template: _raw_loader_anthropometry_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_anthropometry_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AnthropometryPage);



/***/ }),

/***/ 96581:
/*!*******************************************************!*\
  !*** ./src/app/anthropometry/anthropometry.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".backarrow {\n  color: #000;\n  font-size: 18px;\n  margin-left: 24px;\n}\n\n.heaertitle {\n  font-size: 15px;\n  font-weight: 500;\n  color: #000;\n  text-align: center;\n}\n\n.childimgs {\n  width: 60px;\n  height: 60px;\n  border-radius: 14px;\n}\n\n.listpadd {\n  padding: 0 14px;\n}\n\n.clidename {\n  font-size: 15px;\n  color: #000;\n  font-weight: 400;\n  padding-top: 6px;\n}\n\n.clidedetail {\n  font-size: 13px;\n  color: #a5a5a5;\n  padding-top: 5px;\n}\n\n.playcercul {\n  font-size: 24px;\n  color: #888888;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGhyb3BvbWV0cnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBR0o7O0FBREE7RUFDSSxlQUFBO0FBSUo7O0FBRkE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFLSjs7QUFIQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFNSjs7QUFKQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBT0oiLCJmaWxlIjoiYW50aHJvcG9tZXRyeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2Fycm93e1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjRweDtcclxufVxyXG4uaGVhZXJ0aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY2hpbGRpbWdze1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG59XHJcbi5saXN0cGFkZHtcclxuICAgIHBhZGRpbmc6IDAgMTRweDtcclxufVxyXG4uY2xpZGVuYW1le1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgcGFkZGluZy10b3A6IDZweDtcclxufVxyXG4uY2xpZGVkZXRhaWx7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogI2E1YTVhNTtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbn1cclxuLnBsYXljZXJjdWx7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBjb2xvcjogIzg4ODg4ODtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 73939:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/anthropometry/anthropometry.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"fullback\">\n\n  <div class=\"maindiv\" style=\"height:100%\">\n    <img src=\"assets/imgs/logo.png\" class=\"toplogo\" alt=\"\">\n\n    <div>\n      <div class=\"ht_45\"></div>\n      <ion-row>\n        <ion-col size=\"3\" class=\"vertical_centr\" (click)=\"backbutton()\">\n          <ion-icon name=\"chevron-back-outline\" class=\"backarrow\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"6\">\n          <div class=\"heaertitle\">Anthropometry Data</div>\n        </ion-col>\n        <ion-col size=\"3\"></ion-col>\n      </ion-row>\n      <div class=\"ht_60\"></div>\n      <div *ngIf=\"!graphicsdata\">\n        <div style=\"text-align: center;\">No data added..</div>\n      </div>\n      <div class=\"listpadd\">\n        <ion-row *ngFor=\"let c of graphicsdata;let i = index;\">\n          <ion-col size=\"3\" class=\"ion-no-padding\" (click)=\"detailopen(i)\">\n            <img *ngIf=\"c.image == ''\" src=\"assets/imgs/child.png\" class=\"childimgs\">\n            <img *ngIf=\"c.image != ''\" src=\"{{config.api}}{{c.image}}\" class=\"childimgs\">\n          </ion-col>\n          <ion-col size=\"8\" (click)=\"detailopen(i)\">\n            <div class=\"clidename\">{{c.name}}</div>\n            <div class=\"clidedetail\" *ngIf=\"c.detail != null\">{{chkyear(c.dob)}} yrs | H:{{c.detail.height}} | W:{{c.detail.weight}}</div>\n          </ion-col>\n          <ion-col size=\"1\" class=\"ion-no-padding vertical_centrC\" (click)=\"detailopen(i)\">\n            <ion-icon name=\"play-circle-outline\" class=\"playcercul\"></ion-icon>\n          </ion-col>\n        </ion-row>\n        <div class=\"ht_5\"></div>\n        <!-- <ion-row (click)=\"detailopen()\">\n          <ion-col size=\"3\" class=\"ion-no-padding\">\n            <img src=\"assets/imgs/child.png\" class=\"childimgs\">\n          </ion-col>\n          <ion-col size=\"8\">\n            <div class=\"clidename\">Radha shiva</div>\n            <div class=\"clidedetail\">13 yrs | H:110 | W:64</div>\n          </ion-col>\n          <ion-col size=\"1\" class=\"ion-no-padding vertical_centrC\">\n            <ion-icon name=\"play-circle-outline\" class=\"playcercul\"></ion-icon>\n          </ion-col>\n        </ion-row> -->\n      </div>\n    </div>\n\n  </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_anthropometry_anthropometry_module_ts.js.map