(self["webpackChunkCCS"] = self["webpackChunkCCS"] || []).push([["src_app_singup_singup_module_ts"],{

/***/ 1574:
/*!*************************************************!*\
  !*** ./src/app/singup/singup-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingupPageRoutingModule": () => (/* binding */ SingupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _singup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./singup.page */ 14795);




const routes = [
    {
        path: '',
        component: _singup_page__WEBPACK_IMPORTED_MODULE_0__.SingupPage
    }
];
let SingupPageRoutingModule = class SingupPageRoutingModule {
};
SingupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SingupPageRoutingModule);



/***/ }),

/***/ 26910:
/*!*****************************************!*\
  !*** ./src/app/singup/singup.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingupPageModule": () => (/* binding */ SingupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _singup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./singup-routing.module */ 1574);
/* harmony import */ var _singup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./singup.page */ 14795);







let SingupPageModule = class SingupPageModule {
};
SingupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _singup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SingupPageRoutingModule
        ],
        declarations: [_singup_page__WEBPACK_IMPORTED_MODULE_1__.SingupPage]
    })
], SingupPageModule);



/***/ }),

/***/ 14795:
/*!***************************************!*\
  !*** ./src/app/singup/singup.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingupPage": () => (/* binding */ SingupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_singup_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./singup.page.html */ 88697);
/* harmony import */ var _singup_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./singup.page.scss */ 82444);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ 16527);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loader.service */ 98077);
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service.service */ 59353);
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ 30222);
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ 19342);










let SingupPage = class SingupPage {
    constructor(navctrl, service, loader, config, google, facebook) {
        this.navctrl = navctrl;
        this.service = service;
        this.loader = loader;
        this.config = config;
        this.google = google;
        this.facebook = facebook;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off-outline';
        this.passwordType1 = 'password';
        this.passwordIcon1 = 'eye-off-outline';
        this.mobile = '';
        this.phoneerrormes = '';
        this.errormes = '';
        this.userData = {};
    }
    ngOnInit() {
    }
    Loggin() {
        this.navctrl.navigateRoot("/login");
    }
    hideShowPassword() {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off-outline' ? 'eye-outline' : 'eye-off-outline';
    }
    singupvalidate() {
        if (!this.firstname) {
            alert("Please enter your firstname");
            return false;
        }
        if (!this.lastname) {
            alert("Please enter your lastname");
            return false;
        }
        if (!this.email) {
            alert("Please enter your email address");
            return false;
        }
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!filter.test(this.email)) {
            alert('Please provide a valid email address');
            return false;
        }
        if (this.mobile == "") {
            alert("Please enter your mobile number");
            return false;
        }
        // var pattern = /^[7-9][0-9]{9}$/;
        // if (!pattern.test(this.mobile)) {
        //   alert("Please provide 10 digits mobile number.");
        //   return false;
        // }
        if (!this.password) {
            alert("Please enter your password");
            return false;
        }
        return true;
    }
    register() {
        if (this.singupvalidate()) {
            this.loader.showLoader();
            var params = {
                first_name: this.firstname,
                last_name: this.lastname,
                mobile: this.mobile,
                password: this.password,
                email: this.email,
            };
            console.log(params);
            this.service.signup(params)
                .then((result) => this.postdata(result));
        }
    }
    postdata(result) {
        console.log(result);
        this.loader.dissmissLoader();
        if (result.ResponseCode == '1') {
            this.registerdata = result.user_id;
            console.log(this.registerdata);
            this.navctrl.navigateForward(['/otp', { 'userid': this.registerdata }]);
        }
        else {
            alert(result.ResponseMsg);
        }
    }
    //https://console.cloud.google.com/apis/credentials?project=ccsproject-381211
    //ionic cordova plugin add cordova-plugin-googleplus --save --variable REVERSED_CLIENT_ID=com.googleusercontent.apps.tevg0tlu8min3aa922bl0c440kgqdbne-823210742701 --variable WEB_APPLICATION_CLIENT_ID=823210742701-tevg0tlu8min3aa922bl0c440kgqdbne.apps.googleusercontent.com
    //823210742701-tevg0tlu8min3aa922bl0c440kgqdbne.apps.googleusercontent.com
    googleLogin() {
        this.google.login({})
            .then((res) => {
            console.log(res);
            this.googledata = res;
            this.SocialLogin('google');
        })
            .catch(err => console.error(err));
    }
    //https://developers.facebook.com/apps/
    //https://developers.facebook.com/apps/1343105482901267/dashboard/
    //ionic cordova plugin add cordova-plugin-facebook4 --variable APP_ID="1343105482901267" --variable APP_NAME="ccs"
    fblogin() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
        console.log('type', type);
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
        // } else {
        //   alert("deviceid not generated")
        // }
    }
    // SocialLogin(type) {
    //   this.loader.showLoader()
    //   if (type == 'fb') {
    //     var params = {
    //       name: this.FacebokData.username,
    //       email: this.FacebokData.email,
    //       authid: this.fbresponce.userID,
    //       img: this.FacebokData.picture,
    //       device_id: this.DevicesId,
    //       mobile: this.mobileno,
    //     }
    //     console.log(params)
    //     this.service.socialsignup(params)
    //       .then((results) => this.handlensocialregister(results))
    //   }if(type == 'google') {
    //     var params = {
    //       name: this.gmaildata.displayName,
    //       email: this.gmaildata.email,
    //       authid: this.gmaildata.userId,
    //       img: this.gmaildata.imageUrl,
    //       device_id: this.DevicesId,
    //       mobile: this.mobileno,
    //     }
    //     console.log(params)
    //     this.service.socialsignup(params)
    //       .then((results) => this.handlensocialregister(results))
    //   }
    // }
    handlensocialregister(results) {
        console.log(results);
        if (results.ResponseCode == '1') {
            localStorage.setItem("ccs_login", JSON.stringify(results.user_data));
            this.config.refresh();
            this.navctrl.navigateRoot('/home');
        }
    }
};
SingupPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_4__.ServiceService },
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_6__.GooglePlus },
    { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_5__.Facebook }
];
SingupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-singup',
        template: _raw_loader_singup_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_singup_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SingupPage);



/***/ }),

/***/ 82444:
/*!*****************************************!*\
  !*** ./src/app/singup/singup.page.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".maindiv {\n  background: #fff;\n  border-radius: 40px;\n}\n\n.divtop1 {\n  width: 100%;\n  padding: 56px 0 0 0;\n}\n\n.heythere {\n  color: #000;\n  font-size: 13px;\n  text-align: center;\n}\n\n.welcomebc {\n  font-size: 18px;\n  color: #000;\n  font-weight: 600;\n  text-align: center;\n  padding-top: 10px;\n}\n\n.itemclass {\n  background: #f7f8f8;\n  --background: #f7f8f8;\n  border-radius: 50px;\n  --border-radius: 50px;\n}\n\n.iconcls {\n  font-size: 24px;\n  margin: 0px 10px 0px 0px;\n  color: #afafaf;\n}\n\n.ioninput {\n  background: #f7f8f8;\n  --background: #f7f8f8;\n  border-radius: 50px;\n  --border-radius: 50px;\n}\n\n.paddiv {\n  padding: 0 20px;\n}\n\n.forgotdiv {\n  font-size: 14px;\n  color: #afafaf;\n  text-align: center;\n  text-decoration: underline;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: auto;\n  display: table;\n}\n\n.bottomdiv {\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  background: transparent;\n}\n\n.ht100ps {\n  height: 108% !important;\n}\n\n.dontaccount {\n  font-size: 14px;\n  color: #000;\n  text-align: center;\n}\n\n.googlelogo {\n  width: 60px;\n  height: 60px;\n  float: right;\n  margin-right: 10px;\n}\n\n.facebooklogo {\n  width: 60px;\n  height: 60px;\n  float: left;\n  margin-left: 10px;\n}\n\n.borderdiv {\n  background: transparent;\n  width: 80%;\n  position: absolute;\n  border-bottom: 1px solid #afafaf;\n}\n\n.ordiv {\n  height: 44px;\n  width: 40px;\n  background: #fff;\n  color: #919191;\n  font-size: 13px;\n  z-index: 11111;\n}\n\n.loginbtn {\n  text-transform: none;\n  --text-transform: none;\n  background: #ff9a98;\n  --background: #ff9a98;\n  color: #fff;\n  --color: #fff;\n  font-size: 16px;\n  --font-size: 16px;\n  border-radius: 50px;\n  --border-radius: 50px;\n  box-shadow: none;\n  --box-shadow: none;\n  font-weight: 500;\n  --font-weight: 500;\n  height: 50px;\n  --height: 50px;\n  width: 80%;\n  --width: 80%;\n  margin: auto;\n  display: table;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbmd1cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFBQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFHSjs7QUFEQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBSUo7O0FBRkE7RUFDSSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUtKOztBQUhBO0VBQ0ksZUFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtBQU1KOztBQUpBO0VBQ0ksbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFPSjs7QUFMQTtFQUNJLGVBQUE7QUFRSjs7QUFOQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQVNKOztBQVBBO0VBRUksV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUFTSjs7QUFQQTtFQUNJLHVCQUFBO0FBVUo7O0FBUkE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBV0o7O0FBVEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQVlKOztBQVZBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFhSjs7QUFYQTtFQUNJLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUFjSjs7QUFaQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFlSjs7QUFiQTtFQUNJLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFnQkoiLCJmaWxlIjoic2luZ3VwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluZGl2e1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbn1cclxuLmRpdnRvcDF7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDU2cHggMCAwIDA7XHJcbn1cclxuLmhleXRoZXJle1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLndlbGNvbWViY3tcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcbi5pdGVtY2xhc3N7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjdmOGY4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjdmOGY4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNTBweDtcclxufVxyXG4uaWNvbmNsc3tcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIG1hcmdpbjogMHB4IDEwcHggMHB4IDBweDtcclxuICAgIGNvbG9yOiAjYWZhZmFmO1xyXG59XHJcbi5pb25pbnB1dHtcclxuICAgIGJhY2tncm91bmQ6ICNmN2Y4Zjg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmN2Y4Zjg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xyXG59XHJcbi5wYWRkaXZ7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbn1cclxuLmZvcmdvdGRpdntcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjYWZhZmFmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG4uYm90dG9tZGl2e1xyXG4gICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5odDEwMHBzIHtcclxuICAgIGhlaWdodDogMTA4JSAhaW1wb3J0YW50O1xyXG59XHJcbi5kb250YWNjb3VudHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5nb29nbGVsb2dve1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLmZhY2Vib29rbG9nb3tcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4uYm9yZGVyZGl2e1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhZmFmYWY7XHJcbn1cclxuLm9yZGl2e1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgY29sb3I6ICM5MTkxOTE7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB6LWluZGV4OiAxMTExMTtcclxufVxyXG4ubG9naW5idG57XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIC0tdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmY5YTk4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmY5YTk4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICAtLWNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgLS1mb250LXNpemU6IDE2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAtLWZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAtLWhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICAtLXdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxufSJdfQ== */");

/***/ }),

/***/ 88697:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/singup/singup.page.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"fullback\">\n\n  <div class=\"ht100ps maindiv\">\n\n    <img src=\"assets/imgs/logo.png\" class=\"toplogo\" alt=\"\">\n\n    <div class=\"divtop1\">\n      <div class=\"heythere\"> Hey There, </div>\n      <div class=\"welcomebc\"> Create an Account </div>\n    </div>\n\n    <div class=\"ht_30\"></div>\n\n    <div class=\"paddiv\">\n      <ion-item class=\"itemclass\" lines=\"none\">\n        <ion-icon name=\"mail-outline\" slot=\"start\" class=\"iconcls\"></ion-icon>\n        <ion-input class=\"ioninput\" [(ngModel)]=\"firstname\" placeholder=\"First Name\" type=\"text\"></ion-input>\n      </ion-item>\n      <div class=\"ht_20\"></div>\n      <ion-item class=\"itemclass\" lines=\"none\">\n        <ion-icon name=\"mail-outline\" slot=\"start\" class=\"iconcls\"></ion-icon>\n        <ion-input class=\"ioninput\"  [(ngModel)]=\"lastname\" placeholder=\"Last Name\" type=\"text\"></ion-input>\n      </ion-item>\n      <div class=\"ht_20\"></div>\n      <ion-item class=\"itemclass\" lines=\"none\">\n        <ion-icon name=\"mail-outline\" slot=\"start\" class=\"iconcls\"></ion-icon>\n        <ion-input class=\"ioninput\" [(ngModel)]=\"email\" placeholder=\"Email\" type=\"text\"></ion-input>\n      </ion-item>\n      <div class=\"ht_20\"></div>\n      <ion-item class=\"itemclass\" lines=\"none\">\n        <ion-icon name=\"mail-outline\" slot=\"start\" class=\"iconcls\"></ion-icon>\n        <ion-input class=\"ioninput\" [(ngModel)]=\"mobile\" placeholder=\"Mobile\" type=\"number\"></ion-input>\n      </ion-item>\n      <div class=\"ht_20\"></div>\n      <ion-item class=\"itemclass\" lines=\"none\">\n        <ion-icon name=\"lock-closed-outline\" slot=\"start\" class=\"iconcls\"></ion-icon>\n        <ion-input class=\"ioninput\" [(ngModel)]=\"password\" placeholder=\"Password\" type=\"password\"></ion-input>\n      </ion-item>\n      <div class=\"ht_20\"></div>\n      \n    </div>\n\n    <div class=\"bottomdiv\">\n      <div>\n        <ion-button class=\"loginbtn\" (click)=\"register()\">Register</ion-button>\n      </div>\n\n      <div class=\"vertical_centr\">\n        <div class=\"borderdiv\"></div>\n        <div class=\"ordiv vertical_centr\">Or</div>\n      </div>\n\n      <ion-row>\n        <ion-col size=\"6\" (click)=\"googleLogin()\">\n          <img src=\"assets/imgs/google.png\" class=\"googlelogo\">\n        </ion-col>\n        <ion-col size=\"6\" (click)=\"fblogin()\">\n          <img src=\"assets/imgs/facebook.png\" class=\"facebooklogo\">\n        </ion-col>\n      </ion-row>\n      <div class=\"ht_20\"></div>\n      <div class=\"dontaccount\" (click)=\"Loggin()\">Already have an account? <span style=\"color: #b67be7;\"> Login</span> </div>\n      <div class=\"ht_40\"></div>\n    </div>\n\n  </div>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_singup_singup_module_ts.js.map