(self["webpackChunkCCS"] = self["webpackChunkCCS"] || []).push([["src_app_demographic_demographic_module_ts"],{

/***/ 83166:
/*!***********************************************************!*\
  !*** ./src/app/demographic/demographic-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemographicPageRoutingModule": () => (/* binding */ DemographicPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _demographic_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demographic.page */ 50997);




const routes = [
    {
        path: '',
        component: _demographic_page__WEBPACK_IMPORTED_MODULE_0__.DemographicPage
    }
];
let DemographicPageRoutingModule = class DemographicPageRoutingModule {
};
DemographicPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DemographicPageRoutingModule);



/***/ }),

/***/ 10717:
/*!***************************************************!*\
  !*** ./src/app/demographic/demographic.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemographicPageModule": () => (/* binding */ DemographicPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _demographic_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demographic-routing.module */ 83166);
/* harmony import */ var _demographic_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demographic.page */ 50997);







let DemographicPageModule = class DemographicPageModule {
};
DemographicPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _demographic_routing_module__WEBPACK_IMPORTED_MODULE_0__.DemographicPageRoutingModule
        ],
        declarations: [_demographic_page__WEBPACK_IMPORTED_MODULE_1__.DemographicPage]
    })
], DemographicPageModule);



/***/ }),

/***/ 50997:
/*!*************************************************!*\
  !*** ./src/app/demographic/demographic.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemographicPage": () => (/* binding */ DemographicPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_demographic_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./demographic.page.html */ 3119);
/* harmony import */ var _demographic_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demographic.page.scss */ 27437);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ 16527);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loader.service */ 98077);
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service.service */ 59353);









let DemographicPage = class DemographicPage {
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
    add() {
        this.navCtrl.navigateForward("/demographic-add");
    }
    detailopen(i) {
        console.log('selected data=> ', this.graphicsdata[i]);
        this.navCtrl.navigateForward(["/demographic-detail", this.graphicsdata[i]]);
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
DemographicPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_4__.ServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService },
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService }
];
DemographicPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-demographic',
        template: _raw_loader_demographic_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_demographic_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DemographicPage);



/***/ }),

/***/ 27437:
/*!***************************************************!*\
  !*** ./src/app/demographic/demographic.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".backarrow {\n  color: #000;\n  font-size: 18px;\n  margin-left: 24px;\n}\n\n.heaertitle {\n  font-size: 15px;\n  font-weight: 500;\n  color: #000;\n  text-align: center;\n}\n\n.Childrenpadd {\n  padding: 0 40px;\n}\n\n.ChildrenPam {\n  border-radius: 16px;\n  padding: 0 0 0 10px;\n  background: linear-gradient(135deg, #ebf2ff 24%, #eaeeff 60%);\n}\n\n.addbBtn {\n  font-size: 14px;\n  color: #fff;\n  background: linear-gradient(135deg, #9bbdfe 24%, #93a9fd 60%);\n  padding: 8px 16px;\n  border-radius: 30px;\n  width: -moz-fit-content;\n  width: fit-content;\n  float: right;\n  margin: 6px 10px;\n}\n\n.addbBtn:active {\n  font-size: 15px;\n  color: #fff;\n  background: linear-gradient(135deg, #74a4ff 24%, #708dff 60%);\n  padding: 9px 17px 10px;\n  border-radius: 30px;\n  width: -moz-fit-content;\n  width: fit-content;\n  float: right;\n  margin: 4px 9px;\n}\n\n.childimgs {\n  width: 60px;\n  height: 60px;\n  border-radius: 14px;\n}\n\n.listpadd {\n  padding: 0 14px;\n}\n\n.clidename {\n  font-size: 15px;\n  color: #000;\n  font-weight: 400;\n  padding-top: 6px;\n}\n\n.clidedetail {\n  font-size: 13px;\n  color: #a5a5a5;\n  padding-top: 5px;\n}\n\n.playcercul {\n  font-size: 24px;\n  color: #888888;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW9ncmFwaGljLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUFBO0VBQ0ksZUFBQTtBQUdKOztBQURBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZEQUFBO0FBSUo7O0FBRkE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDZEQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFLSjs7QUFIQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsNkRBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBTUo7O0FBSkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBT0o7O0FBTEE7RUFDSSxlQUFBO0FBUUo7O0FBTkE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFTSjs7QUFQQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFVSjs7QUFSQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBV0oiLCJmaWxlIjoiZGVtb2dyYXBoaWMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2thcnJvd3tcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI0cHg7XHJcbn1cclxuLmhlYWVydGl0bGV7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLkNoaWxkcmVucGFkZHtcclxuICAgIHBhZGRpbmc6IDAgNDBweDtcclxufVxyXG4uQ2hpbGRyZW5QYW17XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgcGFkZGluZzogMCAwIDAgMTBweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlYmYyZmYgMjQlLCAjZWFlZWZmIDYwJSk7XHJcbn1cclxuLmFkZGJCdG57XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM5YmJkZmUgMjQlLCAjOTNhOWZkIDYwJSk7XHJcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW46IDZweCAxMHB4O1xyXG59XHJcbi5hZGRiQnRuOmFjdGl2ZXtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzc0YTRmZiAyNCUsICM3MDhkZmYgNjAlKTtcclxuICAgIHBhZGRpbmc6IDlweCAxN3B4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luOiA0cHggOXB4O1xyXG59XHJcbi5jaGlsZGltZ3N7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbn1cclxuLmxpc3RwYWRke1xyXG4gICAgcGFkZGluZzogMCAxNHB4O1xyXG59XHJcbi5jbGlkZW5hbWV7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG59XHJcbi5jbGlkZWRldGFpbHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjYTVhNWE1O1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxufVxyXG4ucGxheWNlcmN1bHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGNvbG9yOiAjODg4ODg4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 3119:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demographic/demographic.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"fullback\">\n\n  <div class=\"maindiv\" style=\"height:100%\">\n    <img src=\"assets/imgs/logo.png\" class=\"toplogo\" alt=\"\">\n\n    <div>\n      <div class=\"ht_45\"></div>\n      <ion-row>\n        <ion-col size=\"3\" class=\"vertical_centr\" (click)=\"backbutton()\">\n          <ion-icon name=\"chevron-back-outline\" class=\"backarrow\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"6\">\n          <div class=\"heaertitle\">Demographic Data</div>\n        </ion-col>\n        <ion-col size=\"3\"></ion-col>\n      </ion-row>\n      <div class=\"ht_60\"></div>\n\n      <div class=\"Childrenpadd\">\n        <ion-row class=\"ChildrenPam\">\n          <ion-col size=\"7\" class=\"vertical_centrC\">\n            <div class=\"deitephic\">Children Details</div>\n          </ion-col>\n\n          <ion-col size=\"5\">\n            <div class=\"addbBtn\" (click)=\"add()\">ADD</div>\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <div class=\"ht_40\"></div>\n      <div *ngIf=\"!graphicsdata\">\n        <div style=\"text-align: center;\">No data added..</div>\n      </div>\n      <div class=\"listpadd\">\n        <ion-row *ngFor=\"let c of graphicsdata;let i = index;\">\n          <ion-col size=\"3\" class=\"ion-no-padding\" (click)=\"detailopen(i)\">\n            <img *ngIf=\"c.image == ''\" src=\"assets/imgs/child.png\" class=\"childimgs\">\n            <img *ngIf=\"c.image != ''\" src=\"{{config.api}}{{c.image}}\" class=\"childimgs\">\n          </ion-col>\n          <ion-col size=\"8\" (click)=\"detailopen(i)\">\n            <div class=\"clidename\">{{c.name}}</div>\n            <div class=\"clidedetail\" *ngIf=\"c.detail != null\">{{chkyear(c.dob)}} yrs | H:{{c.detail.height}} | W:{{c.detail.weight}}</div>\n          </ion-col>\n          <ion-col size=\"1\" class=\"ion-no-padding vertical_centrC\" (click)=\"detailopen(i)\">\n            <ion-icon name=\"play-circle-outline\" class=\"playcercul\"></ion-icon>\n          </ion-col>\n        </ion-row>\n        <div class=\"ht_5\"></div>\n        <!-- <ion-row (click)=\"detailopen()\">\n          <ion-col size=\"3\" class=\"ion-no-padding\">\n            <img src=\"assets/imgs/child.png\" class=\"childimgs\">\n          </ion-col>\n          <ion-col size=\"8\">\n            <div class=\"clidename\">Radha shiva</div>\n            <div class=\"clidedetail\">13 yrs | H:110 | W:64</div>\n          </ion-col>\n          <ion-col size=\"1\" class=\"ion-no-padding vertical_centrC\">\n            <ion-icon name=\"play-circle-outline\" class=\"playcercul\"></ion-icon>\n          </ion-col>\n        </ion-row> -->\n      </div>\n    </div>\n\n  </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_demographic_demographic_module_ts.js.map