(self["webpackChunkCCS"] = self["webpackChunkCCS"] || []).push([["default-src_app_service_service_ts"],{

/***/ 59353:
/*!************************************!*\
  !*** ./src/app/service.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceService": () => (/* binding */ ServiceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.service */ 16527);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 88002);





let ServiceService = class ServiceService {
    constructor(http, config) {
        this.http = http;
        this.config = config;
    }
    signup(params) {
        return new Promise(resolve => {
            this.http.post(this.config.api + 'signup.php', params)
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    updateprofile(params) {
        return new Promise(resolve => {
            this.http.post(this.config.api + 'updateprofile.php', params)
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    editfood_details(params) {
        return new Promise(resolve => {
            this.http.post(this.config.api + 'editfood_details.php', params)
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    editdiet_history(params) {
        return new Promise(resolve => {
            this.http.post(this.config.api + 'editdiet_history.php', params)
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    verifyotp(params) {
        return new Promise(resolve => {
            this.http.post(this.config.api + 'verifyotp.php', params)
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    reotp(params) {
        return new Promise(resolve => {
            this.http.post(this.config.api + 'resendotp.php', params)
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    login(params) {
        return new Promise(resolve => {
            this.http.post(this.config.api + 'login.php', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    socialsignup(params) {
        return new Promise(resolve => {
            this.http.post(this.config.api + 'socialsignup.php', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    getnotification(params) {
        return new Promise(resolve => {
            this.http.post(this.config.api + 'getnotification.php', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    changepassword(params) {
        return new Promise(resolve => {
            this.http.post(this.config.api + 'changepassword.php', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    adddiet(params) {
        return new Promise(resolve => {
            this.http.post(this.config.api + 'adddiet.php', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    getanthropometrydata(params) {
        return new Promise(resolve => {
            this.http.post(this.config.api + 'getanthropometrydata.php', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    adddemographicdata(params) {
        return new Promise(resolve => {
            this.http.post(this.config.api + 'adddemographicdata.php', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    getdemographicdata(params) {
        return new Promise(resolve => {
            this.http.post(this.config.api + 'getdemographicdata.php', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    getfood(params) {
        return new Promise(resolve => {
            this.http.post(this.config.api + 'getfood.php', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    getdiet(params) {
        return new Promise(resolve => {
            this.http.post(this.config.api + 'getdiet.php', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    addfood_details(params) {
        return new Promise(resolve => {
            this.http.post(this.config.api + 'addfood_details.php', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    getdatewisefood(params) {
        return new Promise(resolve => {
            this.http.post(this.config.api + 'getdatewisefood.php', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    getfood_details(params) {
        return new Promise(resolve => {
            this.http.post(this.config.api + 'getfood_details.php', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    forgotpassword(params) {
        return new Promise(resolve => {
            this.http.post(this.config.api + 'forgotpassword.php', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    getneturition(params) {
        return new Promise(resolve => {
            this.http.post(this.config.api + 'getneturition.php', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    deletediet(params) {
        return new Promise(resolve => {
            this.http.post(this.config.api + 'deletediet.php', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    getdownloads() {
        return new Promise(resolve => {
            this.http.get(this.config.api + 'getdownloads.php')
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    getcategory() {
        return new Promise(resolve => {
            this.http.get(this.config.api + 'getcategory.php')
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    getimagesvideos() {
        return new Promise(resolve => {
            this.http.get(this.config.api + 'getimagesvideos.php')
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    getcanfig() {
        return new Promise(resolve => {
            this.http.get(this.config.api + 'getcanfig.php')
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    getparent_occupation() {
        return new Promise(resolve => {
            this.http.get(this.config.api + 'getparent_occupation.php')
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    getmonthly_income() {
        return new Promise(resolve => {
            this.http.get(this.config.api + 'getmonthly_income.php')
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    getdiganosis() {
        return new Promise(resolve => {
            this.http.get(this.config.api + 'getdiganosis.php')
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    getmenstrual_status() {
        return new Promise(resolve => {
            this.http.get(this.config.api + 'getmenstrual_status.php')
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    gettype_of_treatment() {
        return new Promise(resolve => {
            this.http.get(this.config.api + 'gettype_of_treatment.php')
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    geteducation_of_the_family() {
        return new Promise(resolve => {
            this.http.get(this.config.api + 'geteducation_of_the_family.php')
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
};
ServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_0__.ConfigService }
];
ServiceService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], ServiceService);



/***/ })

}]);
//# sourceMappingURL=default-src_app_service_service_ts.js.map