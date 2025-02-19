(self["webpackChunkCCS"] = self["webpackChunkCCS"] || []).push([["src_app_userprofile_userprofile_module_ts"],{

/***/ 13392:
/*!***********************************************************!*\
  !*** ./src/app/userprofile/userprofile-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserprofilePageRoutingModule": () => (/* binding */ UserprofilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _userprofile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userprofile.page */ 94837);




const routes = [
    {
        path: '',
        component: _userprofile_page__WEBPACK_IMPORTED_MODULE_0__.UserprofilePage
    }
];
let UserprofilePageRoutingModule = class UserprofilePageRoutingModule {
};
UserprofilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserprofilePageRoutingModule);



/***/ }),

/***/ 78564:
/*!***************************************************!*\
  !*** ./src/app/userprofile/userprofile.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserprofilePageModule": () => (/* binding */ UserprofilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _userprofile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userprofile-routing.module */ 13392);
/* harmony import */ var _userprofile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userprofile.page */ 94837);







let UserprofilePageModule = class UserprofilePageModule {
};
UserprofilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _userprofile_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserprofilePageRoutingModule
        ],
        declarations: [_userprofile_page__WEBPACK_IMPORTED_MODULE_1__.UserprofilePage]
    })
], UserprofilePageModule);



/***/ }),

/***/ 94837:
/*!*************************************************!*\
  !*** ./src/app/userprofile/userprofile.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserprofilePage": () => (/* binding */ UserprofilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_userprofile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./userprofile.page.html */ 20596);
/* harmony import */ var _userprofile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userprofile.page.scss */ 88800);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service.service */ 59353);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.service */ 16527);







let UserprofilePage = class UserprofilePage {
    constructor(navCtrl, service, config) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.config = config;
        this.logindata = JSON.parse(localStorage.getItem("ccs_login"));
    }
    ngOnInit() {
        this.first_name = this.logindata.first_name;
        this.last_name = this.logindata.last_name;
        this.email = this.logindata.email;
        this.mobile = this.logindata.mobile;
    }
    backbutton() {
        this.navCtrl.pop();
    }
    submit() {
        if (!this.first_name) {
            alert('Please enter first name');
        }
        else if (!this.last_name) {
            alert('Please enter last name');
        }
        else if (!this.email) {
            alert('Please enter email');
        }
        else if (!this.mobile) {
            alert('Please enter mobile');
        }
        else {
            var param = {
                first_name: this.first_name,
                last_name: this.last_name,
                email: this.email,
                mobile: this.mobile,
                user_id: this.logindata.id
            };
            console.log(param);
            this.service.updateprofile(param)
                .then((results) => this.handleupdateprofile(results));
        }
    }
    handleupdateprofile(res) {
        console.log(res);
        if (res.ResponseCode == '1') {
            localStorage.setItem("ccs_login", JSON.stringify(res.data));
            this.config.refresh();
            alert('Successfully updated');
        }
        else {
            alert(res.ResponseMsg);
        }
    }
};
UserprofilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService }
];
UserprofilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-userprofile',
        template: _raw_loader_userprofile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_userprofile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UserprofilePage);



/***/ }),

/***/ 88800:
/*!***************************************************!*\
  !*** ./src/app/userprofile/userprofile.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".backarrow {\n  color: #000;\n  font-size: 18px;\n  margin-left: 24px;\n}\n\n.heaertitle {\n  font-size: 15px;\n  font-weight: 500;\n  color: #000;\n  text-align: center;\n  font-weight: bold;\n}\n\n.childimgs {\n  width: 60px;\n  height: 60px;\n  border-radius: 40px;\n}\n\n.listpadd {\n  padding: 0 14px;\n}\n\n.borderdiv {\n  background: transparent;\n  width: 100%;\n  margin-bottom: 5px;\n  border-bottom: 1px solid #afafaf;\n}\n\n.clidename {\n  font-size: 15px;\n  color: #000;\n  font-weight: 400;\n  padding-top: 6px;\n}\n\n.clidedetail {\n  font-size: 13px;\n  color: #a5a5a5;\n  padding-top: 5px;\n}\n\n.playcercul {\n  font-size: 24px;\n  color: #888888;\n}\n\n.fm {\n  font-size: 16px;\n  color: #fff;\n  background: #ff9a98;\n  padding: 8px;\n  border-radius: 30px;\n  width: 90%;\n  text-align: center;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJwcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBR0o7O0FBREE7RUFDSSxlQUFBO0FBSUo7O0FBRkE7RUFDSSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0FBS0o7O0FBSEE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFNSjs7QUFKQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFPSjs7QUFMQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBUUo7O0FBTkE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQVNKIiwiZmlsZSI6InVzZXJwcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrYXJyb3d7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xyXG59XHJcbi5oZWFlcnRpdGxle1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmNoaWxkaW1nc3tcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxufVxyXG4ubGlzdHBhZGR7XHJcbiAgICBwYWRkaW5nOiAwIDE0cHg7XHJcbn1cclxuLmJvcmRlcmRpdntcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FmYWZhZjtcclxufVxyXG4uY2xpZGVuYW1le1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgcGFkZGluZy10b3A6IDZweDtcclxufVxyXG4uY2xpZGVkZXRhaWx7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogI2E1YTVhNTtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbn1cclxuLnBsYXljZXJjdWx7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBjb2xvcjogIzg4ODg4ODtcclxufVxyXG4uZm17XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6ICNmZjlhOTg7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogYXV0b1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 20596:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/userprofile/userprofile.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"fullback\">\n  <div class=\"maindiv\" style=\"height:100%\">\n    <img src=\"assets/imgs/logo.png\" class=\"toplogo\" alt=\"\">\n    <div>\n      <div class=\"ht_45\"></div>\n      <ion-row>\n        <ion-col size=\"3\" class=\"vertical_centr\" (click)=\"backbutton()\">\n          <ion-icon name=\"chevron-back-outline\" class=\"backarrow\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"6\">\n          <div class=\"heaertitle\">Profile</div>\n        </ion-col>\n        <ion-col size=\"3\"></ion-col>\n      </ion-row>\n      <div class=\"ht_60\"></div>\n\n      <div class=\"paddiv\">\n        <div class=\"ht_30\"></div>\n        <ion-item class=\"itemclass\" lines=\"none\">\n          <ion-icon name=\"mail-outline\" slot=\"start\" class=\"iconcls\"></ion-icon>\n          <ion-input class=\"ioninput\" [(ngModel)]=\"first_name\" placeholder=\"First Name\" type=\"text\"></ion-input>\n        </ion-item>\n        <div class=\"ht_20\"></div>\n        <ion-item class=\"itemclass\" lines=\"none\">\n          <ion-icon name=\"mail-outline\" slot=\"start\" class=\"iconcls\"></ion-icon>\n          <ion-input class=\"ioninput\" [(ngModel)]=\"last_name\" placeholder=\"Last name\" type=\"text\"></ion-input>\n        </ion-item>\n        <div class=\"ht_20\"></div>\n        <ion-item class=\"itemclass\" lines=\"none\">\n          <ion-icon name=\"mail-outline\" slot=\"start\" class=\"iconcls\"></ion-icon>\n          <ion-input class=\"ioninput\" [(ngModel)]=\"email\" placeholder=\"Email\" type=\"email\"></ion-input>\n        </ion-item>\n        <div class=\"ht_20\"></div>\n        <ion-item class=\"itemclass\" lines=\"none\">\n          <ion-icon name=\"mail-outline\" slot=\"start\" class=\"iconcls\"></ion-icon>\n          <ion-input class=\"ioninput\" [(ngModel)]=\"mobile\" placeholder=\"Mobile\" type=\"text\"></ion-input>\n        </ion-item>\n        <div class=\"ht_20\"></div>\n      </div>\n      <div class=\"fm\" (click)=\"submit()\">Submit</div>\n    </div>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_userprofile_userprofile_module_ts.js.map