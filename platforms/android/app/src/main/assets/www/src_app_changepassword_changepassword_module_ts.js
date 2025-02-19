(self["webpackChunkCCS"] = self["webpackChunkCCS"] || []).push([["src_app_changepassword_changepassword_module_ts"],{

/***/ 67736:
/*!*****************************************************************!*\
  !*** ./src/app/changepassword/changepassword-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangepasswordPageRoutingModule": () => (/* binding */ ChangepasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _changepassword_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changepassword.page */ 10579);




const routes = [
    {
        path: '',
        component: _changepassword_page__WEBPACK_IMPORTED_MODULE_0__.ChangepasswordPage
    }
];
let ChangepasswordPageRoutingModule = class ChangepasswordPageRoutingModule {
};
ChangepasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChangepasswordPageRoutingModule);



/***/ }),

/***/ 27133:
/*!*********************************************************!*\
  !*** ./src/app/changepassword/changepassword.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangepasswordPageModule": () => (/* binding */ ChangepasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _changepassword_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changepassword-routing.module */ 67736);
/* harmony import */ var _changepassword_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changepassword.page */ 10579);







let ChangepasswordPageModule = class ChangepasswordPageModule {
};
ChangepasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _changepassword_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChangepasswordPageRoutingModule
        ],
        declarations: [_changepassword_page__WEBPACK_IMPORTED_MODULE_1__.ChangepasswordPage]
    })
], ChangepasswordPageModule);



/***/ }),

/***/ 10579:
/*!*******************************************************!*\
  !*** ./src/app/changepassword/changepassword.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangepasswordPage": () => (/* binding */ ChangepasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_changepassword_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./changepassword.page.html */ 37447);
/* harmony import */ var _changepassword_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changepassword.page.scss */ 21959);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service.service */ 59353);






let ChangepasswordPage = class ChangepasswordPage {
    constructor(navCtrl, service) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.logindata = JSON.parse(localStorage.getItem("ccs_login"));
    }
    ngOnInit() {
    }
    backbutton() {
        this.navCtrl.pop();
    }
    submit() {
        if (!this.old_password) {
            alert('Please enter old password');
        }
        else if (!this.new_password) {
            alert('Please enter new password');
        }
        else if (!this.cpassword) {
            alert('Please Confirm password');
        }
        else if (this.cpassword != this.new_password) {
            alert('New password and confirm password must be same');
        }
        else {
            var param = {
                old_password: this.old_password,
                new_password: this.new_password,
                user_id: this.logindata.id
            };
            console.log(param);
            this.service.changepassword(param)
                .then((results) => this.handlechangepassword(results));
        }
    }
    handlechangepassword(res) {
        if (res.ResponseCode == '1') {
            alert('Your password successfully changed');
            this.navCtrl.pop();
        }
        else {
            alert('Your old password not matched');
        }
    }
};
ChangepasswordPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService }
];
ChangepasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-changepassword',
        template: _raw_loader_changepassword_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_changepassword_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ChangepasswordPage);



/***/ }),

/***/ 21959:
/*!*********************************************************!*\
  !*** ./src/app/changepassword/changepassword.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".backarrow {\n  color: #000;\n  font-size: 18px;\n  margin-left: 24px;\n}\n\n.heaertitle {\n  font-size: 15px;\n  font-weight: 500;\n  color: #000;\n  text-align: center;\n  font-weight: bold;\n}\n\n.childimgs {\n  width: 60px;\n  height: 60px;\n  border-radius: 40px;\n}\n\n.listpadd {\n  padding: 0 14px;\n}\n\n.borderdiv {\n  background: transparent;\n  width: 100%;\n  margin-bottom: 5px;\n  border-bottom: 1px solid #afafaf;\n}\n\n.clidename {\n  font-size: 15px;\n  color: #000;\n  font-weight: 400;\n  padding-top: 6px;\n}\n\n.clidedetail {\n  font-size: 13px;\n  color: #a5a5a5;\n  padding-top: 5px;\n}\n\n.playcercul {\n  font-size: 24px;\n  color: #888888;\n}\n\n.fm {\n  font-size: 16px;\n  color: #fff;\n  background: #ff9a98;\n  padding: 8px;\n  border-radius: 30px;\n  width: 90%;\n  text-align: center;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBR0o7O0FBREE7RUFDSSxlQUFBO0FBSUo7O0FBRkE7RUFDSSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0FBS0o7O0FBSEE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFNSjs7QUFKQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFPSjs7QUFMQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBUUo7O0FBTkE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQVNKIiwiZmlsZSI6ImNoYW5nZXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrYXJyb3d7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xyXG59XHJcbi5oZWFlcnRpdGxle1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmNoaWxkaW1nc3tcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxufVxyXG4ubGlzdHBhZGR7XHJcbiAgICBwYWRkaW5nOiAwIDE0cHg7XHJcbn1cclxuLmJvcmRlcmRpdntcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FmYWZhZjtcclxufVxyXG4uY2xpZGVuYW1le1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgcGFkZGluZy10b3A6IDZweDtcclxufVxyXG4uY2xpZGVkZXRhaWx7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogI2E1YTVhNTtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbn1cclxuLnBsYXljZXJjdWx7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBjb2xvcjogIzg4ODg4ODtcclxufVxyXG4uZm17XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6ICNmZjlhOTg7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogYXV0b1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 37447:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/changepassword/changepassword.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"fullback\">\n  <div class=\"maindiv\" style=\"height:100%\">\n    <img src=\"assets/imgs/logo.png\" class=\"toplogo\" alt=\"\">\n    <div>\n      <div class=\"ht_45\"></div>\n      <ion-row>\n        <ion-col size=\"3\" class=\"vertical_centr\" (click)=\"backbutton()\">\n          <ion-icon name=\"chevron-back-outline\" class=\"backarrow\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"6\">\n          <div class=\"heaertitle\">Change passsword</div>\n        </ion-col>\n        <ion-col size=\"3\"></ion-col>\n      </ion-row>\n      <div class=\"ht_60\"></div>\n\n      <div class=\"paddiv\">\n        <div class=\"ht_30\"></div>\n        <ion-item class=\"itemclass\" lines=\"none\">\n          <ion-icon name=\"lock-closed-outline\" slot=\"start\" class=\"iconcls\"></ion-icon>\n          <ion-input class=\"ioninput\" [(ngModel)]=\"old_password\" placeholder=\"Old password\" type=\"password\"></ion-input>\n        </ion-item>\n        <div class=\"ht_20\"></div>\n        <ion-item class=\"itemclass\" lines=\"none\">\n          <ion-icon name=\"lock-closed-outline\" slot=\"start\" class=\"iconcls\"></ion-icon>\n          <ion-input class=\"ioninput\" [(ngModel)]=\"new_password\" placeholder=\"New password\" type=\"password\"></ion-input>\n        </ion-item>\n        <div class=\"ht_20\"></div>\n        <ion-item class=\"itemclass\" lines=\"none\">\n          <ion-icon name=\"lock-closed-outline\" slot=\"start\" class=\"iconcls\"></ion-icon>\n          <ion-input class=\"ioninput\" [(ngModel)]=\"cpassword\" placeholder=\"Confirm Password\" type=\"password\"></ion-input>\n        </ion-item>\n        <div class=\"ht_20\"></div>\n      </div>\n      <div class=\"fm\" (click)=\"submit()\">Submit</div>\n    </div>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_changepassword_changepassword_module_ts.js.map