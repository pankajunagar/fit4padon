(self["webpackChunkCCS"] = self["webpackChunkCCS"] || []).push([["src_app_onboard_onboard_module_ts"],{

/***/ 23986:
/*!***************************************************!*\
  !*** ./src/app/onboard/onboard-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnboardPageRoutingModule": () => (/* binding */ OnboardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _onboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onboard.page */ 48644);




const routes = [
    {
        path: '',
        component: _onboard_page__WEBPACK_IMPORTED_MODULE_0__.OnboardPage
    }
];
let OnboardPageRoutingModule = class OnboardPageRoutingModule {
};
OnboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OnboardPageRoutingModule);



/***/ }),

/***/ 91341:
/*!*******************************************!*\
  !*** ./src/app/onboard/onboard.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnboardPageModule": () => (/* binding */ OnboardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _onboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onboard-routing.module */ 23986);
/* harmony import */ var _onboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onboard.page */ 48644);







let OnboardPageModule = class OnboardPageModule {
};
OnboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _onboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.OnboardPageRoutingModule
        ],
        declarations: [_onboard_page__WEBPACK_IMPORTED_MODULE_1__.OnboardPage]
    })
], OnboardPageModule);



/***/ }),

/***/ 48644:
/*!*****************************************!*\
  !*** ./src/app/onboard/onboard.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnboardPage": () => (/* binding */ OnboardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_onboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./onboard.page.html */ 3175);
/* harmony import */ var _onboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onboard.page.scss */ 10469);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);





let OnboardPage = class OnboardPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    next() {
        this.navCtrl.navigateForward('/onboard2');
    }
};
OnboardPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
OnboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-onboard',
        template: _raw_loader_onboard_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_onboard_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OnboardPage);



/***/ }),

/***/ 10469:
/*!*******************************************!*\
  !*** ./src/app/onboard/onboard.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".heaertitle {\n  margin-top: 10%;\n  margin-left: 10%;\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.description {\n  margin-top: 10%;\n  margin-left: 10%;\n  width: 80%;\n}\n\n.childimgs {\n  margin-top: 15%;\n  float: right;\n  margin-right: 6%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9uYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBREo7O0FBR0E7RUFFSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBREo7O0FBSUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBREoiLCJmaWxlIjoib25ib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5oZWFlcnRpdGxle1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5kZXNjcmlwdGlvbntcclxuXHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLmNoaWxkaW1nc3tcclxuICAgIG1hcmdpbi10b3A6IDE1JTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogNiU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 3175:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/onboard/onboard.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n<div>  \n  <ion-row>\n    <img src=\"assets/imgs/walk-throug-1.png\">\n  </ion-row>\n  <div class=\"heaertitle\">\"Make it happen, shock everyone.\" </div>\n  <div class=\"description\">Improve the quality of sleep. Establish a regular bedtime and wakeup time.Promoting overall health and well-being.</div>\n\n  <img src=\"assets/imgs/next.png\" class=\"childimgs\"  (click)=\"next()\">\n\n</div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_onboard_onboard_module_ts.js.map