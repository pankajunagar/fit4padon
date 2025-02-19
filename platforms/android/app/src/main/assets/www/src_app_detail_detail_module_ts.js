(self["webpackChunkCCS"] = self["webpackChunkCCS"] || []).push([["src_app_detail_detail_module_ts"],{

/***/ 42080:
/*!*************************************************!*\
  !*** ./src/app/detail/detail-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailPageRoutingModule": () => (/* binding */ DetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.page */ 33495);




const routes = [
    {
        path: '',
        component: _detail_page__WEBPACK_IMPORTED_MODULE_0__.DetailPage
    }
];
let DetailPageRoutingModule = class DetailPageRoutingModule {
};
DetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetailPageRoutingModule);



/***/ }),

/***/ 9251:
/*!*****************************************!*\
  !*** ./src/app/detail/detail.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailPageModule": () => (/* binding */ DetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail-routing.module */ 42080);
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.page */ 33495);







let DetailPageModule = class DetailPageModule {
};
DetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailPageRoutingModule
        ],
        declarations: [_detail_page__WEBPACK_IMPORTED_MODULE_1__.DetailPage]
    })
], DetailPageModule);



/***/ }),

/***/ 33495:
/*!***************************************!*\
  !*** ./src/app/detail/detail.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailPage": () => (/* binding */ DetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./detail.page.html */ 40276);
/* harmony import */ var _detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.page.scss */ 89463);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ 16527);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loader.service */ 98077);
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service.service */ 59353);









let DetailPage = class DetailPage {
    constructor(navCtrl, router, service, alertController, config, loader) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.service = service;
        this.alertController = alertController;
        this.config = config;
        this.loader = loader;
        this.slideOpts = {
            slidesPerView: 4,
            width: 450,
        };
        this.logindata = JSON.parse(localStorage.getItem("ccs_login"));
        console.log(this.logindata);
        this.data = this.router.snapshot.params;
        console.log(this.data);
        // this.nutrition = this.data.nutrition.split(',')
        // console.log(this.nutrition)
    }
    ngOnInit() {
    }
    backbutton() {
        this.navCtrl.pop();
    }
};
DetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_4__.ServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService },
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService }
];
DetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-detail',
        template: _raw_loader_detail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DetailPage);



/***/ }),

/***/ 89463:
/*!*****************************************!*\
  !*** ./src/app/detail/detail.page.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".vertical_centr1 {\n  display: flex !important;\n  justify-content: center;\n  align-items: center;\n  background: #fff;\n  margin-left: 5%;\n  border-radius: 50px;\n}\n\n.title {\n  font-weight: bold;\n  margin-top: 10%;\n}\n\n.subtitle {\n  margin-top: 10%;\n}\n\n.add {\n  float: right;\n  margin-right: 5%;\n  margin-top: 2%;\n}\n\n.roundbox {\n  background-color: #eaeeff;\n  border-radius: 21px;\n  text-align: center;\n  padding: 10px;\n  font-size: 14px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksaUJBQUE7RUFFQSxlQUFBO0FBREo7O0FBSUE7RUFDSSxlQUFBO0FBREo7O0FBSUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBREo7O0FBSUE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFESiIsImZpbGUiOiJkZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZlcnRpY2FsX2NlbnRyMSB7XHJcblxyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuXHJcbi5zdWJ0aXRsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuXHJcbi5hZGQge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG59XHJcblxyXG4ucm91bmRib3gge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWVmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIxcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59Il19 */");

/***/ }),

/***/ 40276:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.page.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"fullback\">\n\n  <div class=\"maindiv\" style=\"height:100%\">\n    <img src=\"assets/imgs/logo.png\" class=\"toplogo\" alt=\"\">\n    <div>\n      <div class=\"ht_45\" style=\"background-color: #fce44c;\"></div>\n      <ion-row style=\"background-color: #fce44c;\">\n        <ion-col size=\"1\" class=\"vertical_centr1\" (click)=\"backbutton()\">\n          <ion-icon name=\"chevron-back-outline\" class=\"backarrow\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"6\">\n\n        </ion-col>\n        <ion-col size=\"3\"></ion-col>\n      </ion-row>\n      <ion-row>\n        <img src=\"{{config.imgapi}}{{data.photo}}\" style=\"width: 100%;\">\n      </ion-row>\n\n      <div style=\"margin-left: 5%;\">\n        <ion-row>\n          <h5 class=\"title\">{{data.name}}</h5>\n\n        </ion-row>\n        <ion-row>\n          <div class=\"subtitle\">\n            Nutrition\n          </div>\n        </ion-row>\n        <ion-slides style=\"margin-top: 5%;margin-right: 5%;\" [options]=\"slideOpts\">\n          <ion-slide>\n            <ion-row class=\"roundbox\">\n              <img style=\"width: 13px;\" src=\"assets/imgs/kal.png\">\n              &nbsp;\n              <span style=\"font-size: 13px;\n              margin: auto;\">{{data.calories}}kal cal</span>\n            </ion-row>\n          </ion-slide>\n          <ion-slide>\n            <ion-row class=\"roundbox\">\n              <img style=\"width: 20px;\" src=\"assets/imgs/protine.png\">&nbsp;\n              <span style=\"font-size: 13px;\n              margin: auto;\">{{data.protein}}g protein</span>\n            </ion-row>\n          </ion-slide>\n          <ion-slide>\n            <ion-row class=\"roundbox\">\n              <img style=\"width: 20px;\" src=\"assets/imgs/egg.png\">&nbsp;\n              <span style=\"font-size: 13px;\n             margin: auto;\">{{data.fats}}g fats</span>\n            </ion-row>\n          </ion-slide>\n          <ion-slide>\n            <ion-row class=\"roundbox\">\n              <img style=\"width: 20px;\" src=\"assets/imgs/carbo.png\">&nbsp;\n              <span style=\"font-size: 13px;\n              margin: auto;\">{{data.carbo}}g carbo</span>\n            </ion-row>\n          </ion-slide>\n          <ion-slide>\n            <ion-row class=\"roundbox\">\n              <img style=\"width: 20px;\" src=\"assets/imgs/carbo.png\">&nbsp;\n              <span style=\"font-size: 13px;\n              margin: auto;\">{{data.iron}}g iron</span>\n            </ion-row>\n          </ion-slide>\n        </ion-slides>\n        <ion-row>\n          <div class=\"subtitle\">\n            Description\n          </div>\n        </ion-row>\n\n        <ion-row style=\"margin-top:5%\">\n          <div>{{data.description}}</div>\n        </ion-row>\n        <img src=\"assets/imgs/add.png\" class=\"add\">\n\n\n      </div>\n\n\n    </div>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_detail_detail_module_ts.js.map