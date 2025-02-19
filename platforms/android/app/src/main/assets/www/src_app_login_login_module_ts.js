(self["webpackChunkCCS"] = self["webpackChunkCCS"] || []).push([["src_app_login_login_module_ts"],{

/***/ 45393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 66825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 80107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 45393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 66825);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 66825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 76770);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 26630);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service.service */ 59353);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loader.service */ 98077);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config.service */ 16527);
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ 19342);
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ 30222);
/* harmony import */ var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/firebase-x/ngx */ 98969);










// import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';

let LoginPage = class LoginPage {
    constructor(navctrl, alertCtrl, service, loader, facebook, googlePlus, platform, fcm, config) {
        this.navctrl = navctrl;
        this.alertCtrl = alertCtrl;
        this.service = service;
        this.loader = loader;
        this.facebook = facebook;
        this.googlePlus = googlePlus;
        this.platform = platform;
        this.fcm = fcm;
        this.config = config;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off-outline';
    }
    ngOnInit() {
        if (this.platform.is('cordova')) {
            this.fcm.getToken().then((token) => {
                console.log('THe first===>', token);
                localStorage.setItem('compfcmid', token);
                this.DevicesId = token;
            }).catch((error) => {
                console.error('Error getting token', error);
            });
        }
    }
    googleLogin() {
        console.log('google');
        this.googlePlus.login({})
            .then((res) => {
            console.log(res);
            this.googledata = res;
            this.SocialLogin('google');
        })
            .catch(err => console.error(err));
    }
    fblogin() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            console.log('fbbb');
            this.facebook.login(['public_profile', 'user_friends', 'email'])
                .then((response) => {
                console.log('this.facebook');
                console.log(response);
                this.fbresponce = response.authResponse;
                console.log(this.fbresponce);
                this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
                    this.FacebokData = { email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name'] };
                    console.log(this.FacebokData);
                    this.SocialLogin('fb');
                });
            })
                .catch(err => console.error(err));
        });
    }
    SocialLogin(type) {
        console.log('type=> ', type);
        if (type == 'fb') {
            var params = {
                name: this.FacebokData.username,
                email: this.FacebokData.email,
                authid: this.fbresponce.userID,
                img: this.FacebokData.picture,
                device_id: this.DevicesId
            };
            console.log(params);
            this.service.socialsignup(params)
                .then((results) => this.handlensocialregister(results));
        }
        else {
            var param = {
                name: this.googledata.displayName,
                email: this.googledata.email,
                authid: this.googledata.userId,
                img: this.googledata.imageUrl,
                device_id: this.DevicesId
            };
            console.log(param);
            this.service.socialsignup(param)
                .then((results) => this.handlensocialregister(results));
        }
    }
    handlensocialregister(results) {
        console.log(results);
        if (results.ResponseCode == '1') {
            localStorage.setItem("ccs_login", JSON.stringify(results.user_data));
            this.config.refresh();
            this.navctrl.navigateRoot('/home');
        }
    }
    singupvalidate() {
        if (!this.mobile) {
            alert("Please enter email OR mobile number");
            return false;
        }
        if (!this.password) {
            alert("Please enter password");
            return false;
        }
        return true;
    }
    Login() {
        if (this.singupvalidate()) {
            this.loader.showLoader();
            var params = {
                mobile: this.mobile,
                password: this.password,
                device_id: this.DevicesId
            };
            console.log(params);
            this.service.login(params)
                .then((result) => this.handleLogin(result));
        }
    }
    handleLogin(result) {
        console.log(result);
        console.log(result.user_data);
        this.ldata = result.user_data;
        console.log(this.ldata);
        this.loader.dissmissLoader();
        if (result.ResponseCode == '1') {
            localStorage.setItem("ccs_login", JSON.stringify(result.user_data));
            this.config.refresh();
            this.navctrl.navigateRoot('/home');
        }
        else {
            alert(result.ResponseMsg);
        }
    }
    singgup() {
        this.navctrl.navigateRoot('/singup');
    }
    forgot() {
        this.navctrl.navigateForward('/forgot');
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService },
    { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_6__.Facebook },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_5__.GooglePlus },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform },
    { type: _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_7__.FirebaseX },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_4__.ConfigService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 26630:
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".maindiv {\n  background: #fff;\n  border-radius: 40px;\n}\n\n.divtop1 {\n  width: 100%;\n  padding: 56px 0 0 0;\n}\n\n.heythere {\n  color: #000;\n  font-size: 13px;\n  text-align: center;\n}\n\n.welcomebc {\n  font-size: 18px;\n  color: #000;\n  font-weight: 600;\n  text-align: center;\n  padding-top: 10px;\n}\n\n.itemclass {\n  background: #f7f8f8;\n  --background: #f7f8f8;\n  border-radius: 50px;\n  --border-radius: 50px;\n}\n\n.iconcls {\n  font-size: 24px;\n  margin: 0px 10px 0px 0px;\n  color: #afafaf;\n}\n\n.ioninput {\n  background: #f7f8f8;\n  --background: #f7f8f8;\n  border-radius: 50px;\n  --border-radius: 50px;\n}\n\n.paddiv {\n  padding: 0 20px;\n}\n\n.forgotdiv {\n  font-size: 14px;\n  color: #afafaf;\n  text-align: center;\n  text-decoration: underline;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: auto;\n  display: table;\n}\n\n.bottomdiv {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  background: transparent;\n}\n\n.dontaccount {\n  font-size: 14px;\n  color: #000;\n  text-align: center;\n}\n\n.googlelogo {\n  width: 60px;\n  height: 60px;\n  float: right;\n  margin-right: 10px;\n}\n\n.facebooklogo {\n  width: 60px;\n  height: 60px;\n  float: left;\n  margin-left: 10px;\n}\n\n.borderdiv {\n  background: transparent;\n  width: 80%;\n  position: absolute;\n  border-bottom: 1px solid #afafaf;\n}\n\n.ordiv {\n  height: 44px;\n  width: 40px;\n  background: #fff;\n  color: #919191;\n  font-size: 13px;\n  z-index: 11111;\n}\n\n.loginbtn {\n  text-transform: none;\n  --text-transform: none;\n  background: #ff9a98;\n  --background: #ff9a98;\n  color: #fff;\n  --color: #fff;\n  font-size: 16px;\n  --font-size: 16px;\n  border-radius: 50px;\n  --border-radius: 50px;\n  box-shadow: none;\n  --box-shadow: none;\n  font-weight: 500;\n  --font-weight: 500;\n  height: 50px;\n  --height: 50px;\n  width: 80%;\n  --width: 80%;\n  margin: auto;\n  display: table;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUFBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFJSjs7QUFGQTtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBS0o7O0FBSEE7RUFDSSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0FBTUo7O0FBSkE7RUFDSSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQU9KOztBQUxBO0VBQ0ksZUFBQTtBQVFKOztBQU5BO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBU0o7O0FBUEE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FBVUo7O0FBUkE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBV0o7O0FBVEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQVlKOztBQVZBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFhSjs7QUFYQTtFQUNJLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUFjSjs7QUFaQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFlSjs7QUFiQTtFQUNJLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFnQkoiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5kaXZ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxufVxyXG4uZGl2dG9wMXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogNTZweCAwIDAgMDtcclxufVxyXG4uaGV5dGhlcmV7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ud2VsY29tZWJje1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuLml0ZW1jbGFzc3tcclxuICAgIGJhY2tncm91bmQ6ICNmN2Y4Zjg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmN2Y4Zjg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xyXG59XHJcbi5pY29uY2xze1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbWFyZ2luOiAwcHggMTBweCAwcHggMHB4O1xyXG4gICAgY29sb3I6ICNhZmFmYWY7XHJcbn1cclxuLmlvbmlucHV0e1xyXG4gICAgYmFja2dyb3VuZDogI2Y3ZjhmODtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y3ZjhmODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbn1cclxuLnBhZGRpdntcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxufVxyXG4uZm9yZ290ZGl2e1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICNhZmFmYWY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcbi5ib3R0b21kaXZ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmRvbnRhY2NvdW50e1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmdvb2dsZWxvZ297XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4uZmFjZWJvb2tsb2dve1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbi5ib3JkZXJkaXZ7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FmYWZhZjtcclxufVxyXG4ub3JkaXZ7XHJcbiAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBjb2xvcjogIzkxOTE5MTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHotaW5kZXg6IDExMTExO1xyXG59XHJcbi5sb2dpbmJ0bntcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgLS10ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICNmZjlhOTg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZjlhOTg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIC0tY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAtLWZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIC0tZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIC0taGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIC0td2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG59Il19 */");

/***/ }),

/***/ 76770:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"fullback\">\n\n  <div class=\"ht100p maindiv\">\n\n    <img src=\"assets/imgs/logo.png\" class=\"toplogo\" alt=\"\">\n\n    <div class=\"divtop1\">\n      <div class=\"heythere\"> Hey There, </div>\n      <div class=\"welcomebc\"> Welcome Back </div>\n    </div>\n\n    <div class=\"ht_30\"></div>\n\n    <ion-row class=\"paddiv\">\n      <ion-col class=\"itemclass\">\n        <ion-icon name=\"mail-outline\" slot=\"start\" class=\"iconcls\"></ion-icon>\n        <ion-input class=\"ioninput\" [(ngModel)]=\"mobile\" placeholder=\"Email / Mobile\" type=\"text\"></ion-input>\n      </ion-col>\n    </ion-row>\n    <div class=\"ht_30\"></div>\n    <ion-row class=\"paddiv\">\n      <ion-col class=\"itemclass\">\n        <ion-icon name=\"lock-closed-outline\" slot=\"start\" class=\"iconcls\"></ion-icon>\n        <ion-input class=\"ioninput\" [(ngModel)]=\"password\" placeholder=\"Password\" type=\"password\"></ion-input>\n      </ion-col>\n    </ion-row>\n    <div class=\"ht_20\"></div>\n    <ion-row>\n      <ion-col>\n        <div class=\"forgotdiv\" (click)=\"forgot()\">Forgot your password?</div>\n      </ion-col>\n    </ion-row>\n    <div class=\"ht_50\"></div>\n    <ion-row>\n      <ion-col>\n        <ion-button class=\"loginbtn\" (click)=\"Login()\"> <ion-icon name=\"log-out\"\n            style=\"padding: 0 15px 0 0;\"></ion-icon> Login</ion-button>\n      </ion-col>\n    </ion-row>\n    <div class=\"ht_10\"></div>\n    <ion-row>\n      <ion-col class=\"vertical_centr\">\n        <div class=\"borderdiv\"></div>\n        <div class=\"ordiv vertical_centr\">Or</div>\n      </ion-col>\n    </ion-row>\n    <div class=\"ht_30\"></div>\n    <ion-row>\n      <ion-col size=\"6\">\n        <img src=\"assets/imgs/google.png\" class=\"googlelogo\" (click)=\"googleLogin()\">\n      </ion-col>\n      <ion-col size=\"6\">\n        <img src=\"assets/imgs/facebook.png\" class=\"facebooklogo\" (click)=\"fblogin()\">\n      </ion-col>\n    </ion-row>\n    <div class=\"ht_20\"></div>\n    <ion-row (click)=\"singgup()\">\n      <ion-col class=\"dontaccount\">\n        Don't have an account yet? <span style=\"color: #b67be7;\"> Register</span>\n      </ion-col>\n    </ion-row>\n    <div class=\"ht_40\"></div>\n    <!-- <div class=\"paddiv\">\n      <ion-item class=\"itemclass\" lines=\"none\">\n        <ion-icon name=\"mail-outline\" slot=\"start\" class=\"iconcls\"></ion-icon>\n        <ion-input class=\"ioninput\"  [(ngModel)]=\"mobile\" placeholder=\"Email / Mobile\" type=\"text\"></ion-input>\n      </ion-item>\n      <div class=\"ht_30\"></div>\n      <ion-item class=\"itemclass\" lines=\"none\">\n        <ion-icon name=\"lock-closed-outline\" slot=\"start\" class=\"iconcls\"></ion-icon>\n        <ion-input class=\"ioninput\" [(ngModel)]=\"password\" placeholder=\"Password\" type=\"password\"></ion-input>\n      </ion-item>\n      <div class=\"ht_20\"></div>\n      <div class=\"forgotdiv\" (click)=\"forgot()\">Forgot your password?</div>\n    </div>\n\n    <div class=\"bottomdiv\">\n      <div>\n        <ion-button class=\"loginbtn\" (click)=\"Login()\"> <ion-icon name=\"log-out\" style=\"padding: 0 15px 0 0;\"></ion-icon> Login</ion-button>\n      </div>\n\n      <div class=\"vertical_centr\">\n        <div class=\"borderdiv\"></div> \n        <div class=\"ordiv vertical_centr\">Or</div>\n      </div>\n\n      <ion-row>\n        <ion-col size=\"6\">\n          <img src=\"assets/imgs/google.png\" class=\"googlelogo\" (click)=\"googleLogin()\">\n        </ion-col>\n        <ion-col size=\"6\">\n          <img src=\"assets/imgs/facebook.png\" class=\"facebooklogo\" (click)=\"fblogin()\">\n        </ion-col>\n      </ion-row>\n      <div class=\"ht_20\"></div>\n      <div class=\"dontaccount\" (click)=\"singgup()\">Don't have an account yet? <span style=\"color: #b67be7;\"> Register</span> </div>\n      <div class=\"ht_40\"></div>\n    </div> -->\n\n  </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map