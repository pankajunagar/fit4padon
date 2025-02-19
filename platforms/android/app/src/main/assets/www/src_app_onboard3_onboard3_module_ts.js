(self["webpackChunkCCS"] = self["webpackChunkCCS"] || []).push([["src_app_onboard3_onboard3_module_ts"],{

/***/ 78429:
/*!*****************************************************!*\
  !*** ./src/app/onboard3/onboard3-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Onboard3PageRoutingModule": () => (/* binding */ Onboard3PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _onboard3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onboard3.page */ 62241);




const routes = [
    {
        path: '',
        component: _onboard3_page__WEBPACK_IMPORTED_MODULE_0__.Onboard3Page
    }
];
let Onboard3PageRoutingModule = class Onboard3PageRoutingModule {
};
Onboard3PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Onboard3PageRoutingModule);



/***/ }),

/***/ 33233:
/*!*********************************************!*\
  !*** ./src/app/onboard3/onboard3.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Onboard3PageModule": () => (/* binding */ Onboard3PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _onboard3_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onboard3-routing.module */ 78429);
/* harmony import */ var _onboard3_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onboard3.page */ 62241);







let Onboard3PageModule = class Onboard3PageModule {
};
Onboard3PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _onboard3_routing_module__WEBPACK_IMPORTED_MODULE_0__.Onboard3PageRoutingModule
        ],
        declarations: [_onboard3_page__WEBPACK_IMPORTED_MODULE_1__.Onboard3Page]
    })
], Onboard3PageModule);



/***/ }),

/***/ 62241:
/*!*******************************************!*\
  !*** ./src/app/onboard3/onboard3.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Onboard3Page": () => (/* binding */ Onboard3Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_onboard3_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./onboard3.page.html */ 55981);
/* harmony import */ var _onboard3_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onboard3.page.scss */ 86781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);





let Onboard3Page = class Onboard3Page {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    finish() {
        this.navCtrl.navigateForward('/login');
    }
};
Onboard3Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
Onboard3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-onboard3',
        template: _raw_loader_onboard3_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_onboard3_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Onboard3Page);



/***/ }),

/***/ 86781:
/*!*********************************************!*\
  !*** ./src/app/onboard3/onboard3.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".heaertitle {\n  margin-top: 10%;\n  margin-left: 10%;\n  font-size: 20px;\n  font-weight: bold;\n  margin-right: 5%;\n}\n\n.description {\n  margin-top: 10%;\n  margin-left: 10%;\n  width: 80%;\n}\n\n.childimgs {\n  margin-top: 15%;\n  float: right;\n  margin-right: 6%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9uYm9hcmQzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBREo7O0FBR0E7RUFFSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBREo7O0FBSUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBREoiLCJmaWxlIjoib25ib2FyZDMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uaGVhZXJ0aXRsZXtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbn1cclxuLmRlc2NyaXB0aW9ue1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4uY2hpbGRpbWdze1xyXG4gICAgbWFyZ2luLXRvcDogMTUlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2JTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 55981:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/onboard3/onboard3.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div>\n    <ion-row>\n      <img src=\"assets/imgs/walk-through-3.png\">\n    </ion-row>\n    <div class=\"heaertitle\">\"Personalized Nutrition Intervention for CSS.\" </div>\n    <div class=\"description\">To optimize an individual health and wellbeing by providing tailored dietary\n      recommendation. </div>\n\n    <img src=\"assets/imgs/next.png\" class=\"childimgs\" (click)=\"finish()\">\n\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_onboard3_onboard3_module_ts.js.map