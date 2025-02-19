(self["webpackChunkCCS"] = self["webpackChunkCCS"] || []).push([["src_app_onboard2_onboard2_module_ts"],{

/***/ 93960:
/*!*****************************************************!*\
  !*** ./src/app/onboard2/onboard2-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Onboard2PageRoutingModule": () => (/* binding */ Onboard2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _onboard2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onboard2.page */ 84416);




const routes = [
    {
        path: '',
        component: _onboard2_page__WEBPACK_IMPORTED_MODULE_0__.Onboard2Page
    }
];
let Onboard2PageRoutingModule = class Onboard2PageRoutingModule {
};
Onboard2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Onboard2PageRoutingModule);



/***/ }),

/***/ 60111:
/*!*********************************************!*\
  !*** ./src/app/onboard2/onboard2.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Onboard2PageModule": () => (/* binding */ Onboard2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _onboard2_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onboard2-routing.module */ 93960);
/* harmony import */ var _onboard2_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onboard2.page */ 84416);







let Onboard2PageModule = class Onboard2PageModule {
};
Onboard2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _onboard2_routing_module__WEBPACK_IMPORTED_MODULE_0__.Onboard2PageRoutingModule
        ],
        declarations: [_onboard2_page__WEBPACK_IMPORTED_MODULE_1__.Onboard2Page]
    })
], Onboard2PageModule);



/***/ }),

/***/ 84416:
/*!*******************************************!*\
  !*** ./src/app/onboard2/onboard2.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Onboard2Page": () => (/* binding */ Onboard2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_onboard2_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./onboard2.page.html */ 8238);
/* harmony import */ var _onboard2_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onboard2.page.scss */ 90458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);





let Onboard2Page = class Onboard2Page {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    next() {
        this.navCtrl.navigateForward('/onboard3');
    }
};
Onboard2Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
Onboard2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-onboard2',
        template: _raw_loader_onboard2_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_onboard2_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Onboard2Page);



/***/ }),

/***/ 90458:
/*!*********************************************!*\
  !*** ./src/app/onboard2/onboard2.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".heaertitle {\n  margin-top: 10%;\n  margin-left: 10%;\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.description {\n  margin-top: 10%;\n  margin-left: 10%;\n  width: 80%;\n}\n\n.childimgs {\n  margin-top: 15%;\n  float: right;\n  margin-right: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9uYm9hcmQyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQURKOztBQUdBO0VBRUksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQURKOztBQUlBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQURKIiwiZmlsZSI6Im9uYm9hcmQyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmhlYWVydGl0bGV7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmRlc2NyaXB0aW9ue1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4uY2hpbGRpbWdze1xyXG4gICAgbWFyZ2luLXRvcDogMTUlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyJTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 8238:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/onboard2/onboard2.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div>\n    <ion-row>\n      <img src=\"assets/imgs/walk-through-2.png\">\n    </ion-row>\n    <div class=\"heaertitle\">\"Only you can make it possible.\" </div>\n    <div class=\"description\">Exercise is crucial component of a healthy lifestyle. Numerous positive effects on physical\n      and mental well-being. We wil establish exercise training schedule.</div>\n    <img src=\"assets/imgs/next.png\" class=\"childimgs\" (click)=\"next()\">\n\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_onboard2_onboard2_module_ts.js.map