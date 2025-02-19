(self["webpackChunkCCS"] = self["webpackChunkCCS"] || []).push([["src_app_startslide_startslide_module_ts"],{

/***/ 87237:
/*!*********************************************************!*\
  !*** ./src/app/startslide/startslide-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartslidePageRoutingModule": () => (/* binding */ StartslidePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _startslide_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startslide.page */ 27304);




const routes = [
    {
        path: '',
        component: _startslide_page__WEBPACK_IMPORTED_MODULE_0__.StartslidePage
    }
];
let StartslidePageRoutingModule = class StartslidePageRoutingModule {
};
StartslidePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StartslidePageRoutingModule);



/***/ }),

/***/ 74788:
/*!*************************************************!*\
  !*** ./src/app/startslide/startslide.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartslidePageModule": () => (/* binding */ StartslidePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _startslide_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startslide-routing.module */ 87237);
/* harmony import */ var _startslide_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startslide.page */ 27304);







let StartslidePageModule = class StartslidePageModule {
};
StartslidePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _startslide_routing_module__WEBPACK_IMPORTED_MODULE_0__.StartslidePageRoutingModule
        ],
        declarations: [_startslide_page__WEBPACK_IMPORTED_MODULE_1__.StartslidePage]
    })
], StartslidePageModule);



/***/ }),

/***/ 27304:
/*!***********************************************!*\
  !*** ./src/app/startslide/startslide.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartslidePage": () => (/* binding */ StartslidePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_startslide_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./startslide.page.html */ 95196);
/* harmony import */ var _startslide_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startslide.page.scss */ 35072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);





let StartslidePage = class StartslidePage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    GetStart() {
        this.navCtrl.navigateRoot('/onboard');
    }
};
StartslidePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
StartslidePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-startslide',
        template: _raw_loader_startslide_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_startslide_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StartslidePage);



/***/ }),

/***/ 35072:
/*!*************************************************!*\
  !*** ./src/app/startslide/startslide.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".fullback {\n  background: #fce44c;\n  --background: #fce44c;\n}\n\n.ht100p {\n  height: 100% !important;\n}\n\n.toplogo {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  z-index: 111;\n}\n\n.buttondiv {\n  position: absolute;\n  bottom: 20px;\n  left: 0px;\n  width: 100%;\n}\n\n.getstart {\n  text-transform: none;\n  --text-transform: none;\n  background: #ff9a98;\n  --background: #ff9a98;\n  color: #000;\n  --color: #000;\n  font-size: 15px;\n  --font-size: 15px;\n  border-radius: 50px;\n  --border-radius: 50px;\n  box-shadow: none;\n  --box-shadow: none;\n  font-weight: 500;\n  --font-weight: 500;\n  height: 50px;\n  --height: 50px;\n  width: 70%;\n  --width: 70%;\n  margin: auto;\n  display: table;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXJ0c2xpZGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUNBO0VBQ0ksdUJBQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBR0o7O0FBREE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUlKOztBQUZBO0VBQ0ksb0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUtKIiwiZmlsZSI6InN0YXJ0c2xpZGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGxiYWNre1xyXG4gICAgYmFja2dyb3VuZDogI2ZjZTQ0YztcclxuICAgIC0tYmFja2dyb3VuZDogI2ZjZTQ0YztcclxufVxyXG4uaHQxMDBwe1xyXG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRvcGxvZ297XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICB6LWluZGV4OiAxMTE7XHJcbn1cclxuLmJ1dHRvbmRpdntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMjBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5nZXRzdGFydHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgLS10ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICNmZjlhOTg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZjlhOTg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIC0tY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAtLWZvbnQtc2l6ZTogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIC0tZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIC0taGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIC0td2lkdGg6IDcwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG59Il19 */");

/***/ }),

/***/ 95196:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/startslide/startslide.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"fullback\">\n\n    <div class=\"fullback ht100p\">\n        <img src=\"assets/imgs/logo.png\" class=\"toplogo\" alt=\"\">\n        <div class=\"ht100p vertical_centr\">\n            <img src=\"assets/imgs/ccslogo.png\" alt=\"\">\n        </div>\n\n        <div class=\"buttondiv\">\n            <ion-button class=\"getstart\" (click)=\"GetStart()\">Get Started</ion-button>\n        </div>\n    </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_startslide_startslide_module_ts.js.map