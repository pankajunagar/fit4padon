(self["webpackChunkCCS"] = self["webpackChunkCCS"] || []).push([["src_app_diet-history_diet-history_module_ts"],{

/***/ 98795:
/*!*************************************************************!*\
  !*** ./src/app/diet-history/diet-history-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DietHistoryPageRoutingModule": () => (/* binding */ DietHistoryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _diet_history_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diet-history.page */ 60934);




const routes = [
    {
        path: '',
        component: _diet_history_page__WEBPACK_IMPORTED_MODULE_0__.DietHistoryPage
    }
];
let DietHistoryPageRoutingModule = class DietHistoryPageRoutingModule {
};
DietHistoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DietHistoryPageRoutingModule);



/***/ }),

/***/ 8268:
/*!*****************************************************!*\
  !*** ./src/app/diet-history/diet-history.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DietHistoryPageModule": () => (/* binding */ DietHistoryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _diet_history_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diet-history-routing.module */ 98795);
/* harmony import */ var _diet_history_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./diet-history.page */ 60934);







let DietHistoryPageModule = class DietHistoryPageModule {
};
DietHistoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _diet_history_routing_module__WEBPACK_IMPORTED_MODULE_0__.DietHistoryPageRoutingModule
        ],
        declarations: [_diet_history_page__WEBPACK_IMPORTED_MODULE_1__.DietHistoryPage]
    })
], DietHistoryPageModule);



/***/ }),

/***/ 60934:
/*!***************************************************!*\
  !*** ./src/app/diet-history/diet-history.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DietHistoryPage": () => (/* binding */ DietHistoryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_diet_history_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./diet-history.page.html */ 89615);
/* harmony import */ var _diet_history_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./diet-history.page.scss */ 6485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ 16527);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loader.service */ 98077);
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service.service */ 59353);









let DietHistoryPage = class DietHistoryPage {
    constructor(alertController, navCtrl, service, router, config, loader) {
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.service = service;
        this.router = router;
        this.config = config;
        this.loader = loader;
        this.logindata = JSON.parse(localStorage.getItem("ccs_login"));
        console.log(this.logindata);
    }
    ngOnInit() {
        this.getdemographicdata();
        this.getdiet();
    }
    getdemographicdata() {
        this.loader.showLoader();
        var params = {
            user_id: this.logindata.id
        };
        console.log(params);
        this.service.getdemographicdata(params)
            .then((result) => this.setdemographicdata(result));
    }
    setdemographicdata(res) {
        console.log('setdemographicdata=> ', res);
        this.loader.dissmissLoader();
        if (res.ResponseCode == '1') {
            this.graphicsdata = res.data;
            console.log('graphicsdata=>', this.graphicsdata);
        }
    }
    getdiet() {
        this.loader.showLoader();
        var params = {
            user_id: this.logindata.id
        };
        console.log(params);
        this.service.getdiet(params)
            .then((result) => this.setgetdiet(result));
    }
    setgetdiet(res) {
        console.log('setgetdiet=> ', res);
        this.loader.dissmissLoader();
        if (res.ResponseCode == '1') {
            this.diet = res.data;
            console.log(this.diet);
        }
    }
    deletediet(id) {
        this.loader.showLoader();
        var params = {
            id: id
        };
        console.log(params);
        this.service.deletediet(params)
            .then((result) => this.deletedietmsg(result));
    }
    deletedietmsg(res) {
        this.loader.dissmissLoader();
        if (res.ResponseCode == '1') {
            alert('Successfully deleted');
            this.getdiet();
        }
    }
    chkyear(date) {
        let d = new Date(new Date(date));
        d.setMonth(d.getMonth());
        this.date2 = d.toISOString().slice(0, 4);
        let newd = new Date(new Date());
        newd.setMonth(newd.getMonth());
        this.date1 = newd.toISOString().slice(0, 4);
        var chkd = this.date1 - this.date2;
        return chkd;
    }
    backbutton() {
        this.navCtrl.pop();
    }
    detailopen(data) {
        // if (i == '0') {
        //   this.navCtrl.navigateForward(["/diet-add",{'key':0}])
        // } else {
        if (this.diet) {
            for (var x = 0; x < this.diet.length; x++) {
                if (data.id == this.diet[x].child_id) {
                    this.dietdata = this.diet[x];
                }
            }
        }
        if (!this.dietdata) {
            this.dietdata = data;
        }
        console.log(this.dietdata);
        this.navCtrl.navigateForward(["/diet-add", this.dietdata]);
    }
};
DietHistoryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_4__.ServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService },
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService }
];
DietHistoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-diet-history',
        template: _raw_loader_diet_history_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_diet_history_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DietHistoryPage);

// }


/***/ }),

/***/ 6485:
/*!*****************************************************!*\
  !*** ./src/app/diet-history/diet-history.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".backarrow {\n  color: #000;\n  font-size: 18px;\n  margin-left: 24px;\n}\n\n.heaertitle {\n  font-size: 15px;\n  font-weight: 500;\n  color: #000;\n  text-align: center;\n}\n\n.childimgs {\n  width: 60px;\n  height: 60px;\n  border-radius: 14px;\n}\n\n.listpadd {\n  padding: 0 14px;\n}\n\n.clidename {\n  font-size: 15px;\n  color: #000;\n  font-weight: 400;\n  padding-top: 6px;\n}\n\n.clidedetail {\n  font-size: 13px;\n  color: #a5a5a5;\n  padding-top: 5px;\n}\n\n.playcercul {\n  font-size: 24px;\n  color: #888888;\n}\n\n.roundclass {\n  height: 22px;\n  width: 22px;\n  border-radius: 50%;\n  background: #ff9a98;\n}\n\n.ellipsecls {\n  font-size: 4px;\n  color: #fff;\n}\n\n.detaildiv {\n  font-size: 14px;\n  color: #000;\n  padding: 3px 0 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpZXQtaGlzdG9yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFEQTtFQUNJLGVBQUE7QUFJSjs7QUFGQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUtKOztBQUhBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQU1KOztBQUpBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFPSjs7QUFMQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQVFKOztBQU5BO0VBQ0ksY0FBQTtFQUNBLFdBQUE7QUFTSjs7QUFQQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFVSiIsImZpbGUiOiJkaWV0LWhpc3RvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2thcnJvd3tcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI0cHg7XHJcbn1cclxuLmhlYWVydGl0bGV7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmNoaWxkaW1nc3tcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxufVxyXG4ubGlzdHBhZGR7XHJcbiAgICBwYWRkaW5nOiAwIDE0cHg7XHJcbn1cclxuLmNsaWRlbmFtZXtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHBhZGRpbmctdG9wOiA2cHg7XHJcbn1cclxuLmNsaWRlZGV0YWlse1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6ICNhNWE1YTU7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG59XHJcbi5wbGF5Y2VyY3Vse1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgY29sb3I6ICM4ODg4ODg7XHJcbn1cclxuLnJvdW5kY2xhc3N7XHJcbiAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICB3aWR0aDogMjJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmZjlhOTg7XHJcbn1cclxuLmVsbGlwc2VjbHN7XHJcbiAgICBmb250LXNpemU6IDRweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5kZXRhaWxkaXZ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHBhZGRpbmc6IDNweCAwIDAgMDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 89615:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/diet-history/diet-history.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"fullback\">\n\n  <div class=\"maindiv\">\n    <img src=\"assets/imgs/logo.png\" class=\"toplogo\" alt=\"\">\n\n    <div>\n      <div class=\"ht_45\"></div>\n      <ion-row>\n        <ion-col size=\"3\" class=\"vertical_centr\" (click)=\"backbutton()\">\n          <ion-icon name=\"chevron-back-outline\" class=\"backarrow\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"6\">\n          <div class=\"heaertitle\">Diet History</div>\n        </ion-col>\n        <ion-col size=\"3\"></ion-col>\n      </ion-row>\n      <div class=\"ht_60\"></div>\n      <div class=\"listpadd\" *ngIf=\"!graphicsdata\">\n        <ion-row>\n          <ion-col>\n            <div class=\"clidename\"  style=\"text-align: center;\"> Diet History not added ..</div>\n          </ion-col>\n          <!-- <ion-col (click)=\"detailopen('0')\" size=\"1\" class=\"ion-no-padding vertical_centrC\">\n            <div class=\"roundclass vertical_centr\">\n              <ion-icon name=\"ellipse\" class=\"ellipsecls\"></ion-icon>\n            </div>\n          </ion-col> -->\n        </ion-row>\n      </div>\n\n      <div class=\"listpadd\" *ngFor=\"let c of graphicsdata;let i = index;\">\n        <ion-row>\n          <ion-col size=\"3\" class=\"ion-no-padding\">\n            <img *ngIf=\"c.image == ''\" src=\"assets/imgs/child.png\" class=\"childimgs\">\n            <img *ngIf=\"c.image != ''\" src=\"{{config.api}}{{c.image}}\" class=\"childimgs\">\n          </ion-col>\n          <ion-col size=\"7\">\n            <div class=\"clidename\">{{c.name}}</div>\n            <div class=\"clidedetail\" *ngIf=\"c.detail1 != null\">{{chkyear(c.dob)}} yrs | H:{{c.detail1.height}} |\n              W:{{c.detail1.weight}}</div>\n          </ion-col>  \n          <ion-col size=\"1\" class=\"ion-no-padding vertical_centrC\" (click)=\"detailopen(c)\">\n            <div class=\"roundclass vertical_centr\">\n              <ion-icon name=\"ellipse\" class=\"ellipsecls\"></ion-icon>\n            </div>\n          </ion-col>\n          <ion-col size=\"1\" class=\"ion-no-padding vertical_centrC\"  (click)=\"detailopen(c)\">\n            <ion-icon name=\"play-circle-outline\" class=\"playcercul\"></ion-icon>\n          </ion-col>\n        </ion-row>\n        <div *ngFor=\"let d of diet\">\n          <div *ngIf=\"d.child_id == c.id\">\n            <div class=\"detaildiv\">wake time: {{d.wakeup_time}} am</div>\n            <div style=\"color: red;float: right;\"  (click)=\"deletediet(d.id)\">Delete</div>\n            <div class=\"detaildiv\">bed time: {{d.bed_time}} pm</div>\n            <div class=\"detaildiv\">Type of diet: {{d.diet_type}}</div>\n            <!--<div class=\"detaildiv\">Food allergies: {{d.food_allergies}}</div>-->\n            <div class=\"detaildiv\">Details:{{d.detail}}</div>\n            <div class=\"ht_5\"><hr></div>\n            \n\n\n          </div>\n          <div class=\"ht_1\"><hr></div>\n        </div>\n        <div class=\"ht_1\"></div>\n\n\n        <div class=\"ht_5\"></div>\n        <!-- <ion-row (click)=\"detailopen()\">\n          <ion-col size=\"3\" class=\"ion-no-padding\">\n            <img src=\"assets/imgs/child.png\" class=\"childimgs\">\n          </ion-col>\n          <ion-col size=\"7\">\n            <div class=\"clidename\">Radha shiva</div>\n            <div class=\"clidedetail\">13 yrs | H:110 | W:64</div>\n          </ion-col>\n          <ion-col size=\"1\" class=\"ion-no-padding vertical_centrC\">\n            <div class=\"roundclass vertical_centr\">\n              <ion-icon name=\"ellipse\" class=\"ellipsecls\"></ion-icon>\n            </div>\n          </ion-col>\n          <ion-col size=\"1\" class=\"ion-no-padding vertical_centrC\">\n            <ion-icon name=\"play-circle-outline\" class=\"playcercul\"></ion-icon>\n          </ion-col>\n        </ion-row>\n        <div class=\"ht_10\"></div>\n\n        <div>\n          <div class=\"detaildiv\">wake time: 06.00 am</div>\n          <div class=\"detaildiv\">bed time: 09.00 pm</div>\n          <div class=\"detaildiv\">Type of diet: Non Veg</div>\n          <div class=\"detaildiv\">Food allergies: Yes</div>\n          <div class=\"detaildiv\">Details: Fish food allergies skin issues</div>\n        </div> -->\n\n        <div class=\"ht_25\"></div>\n      </div>\n    </div>\n\n  </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_diet-history_diet-history_module_ts.js.map