(self["webpackChunkCCS"] = self["webpackChunkCCS"] || []).push([["src_app_anthropometry-detail_anthropometry-detail_module_ts"],{

/***/ 46781:
/*!*****************************************************************************!*\
  !*** ./src/app/anthropometry-detail/anthropometry-detail-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnthropometryDetailPageRoutingModule": () => (/* binding */ AnthropometryDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _anthropometry_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anthropometry-detail.page */ 16045);




const routes = [
    {
        path: '',
        component: _anthropometry_detail_page__WEBPACK_IMPORTED_MODULE_0__.AnthropometryDetailPage
    }
];
let AnthropometryDetailPageRoutingModule = class AnthropometryDetailPageRoutingModule {
};
AnthropometryDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AnthropometryDetailPageRoutingModule);



/***/ }),

/***/ 36703:
/*!*********************************************************************!*\
  !*** ./src/app/anthropometry-detail/anthropometry-detail.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnthropometryDetailPageModule": () => (/* binding */ AnthropometryDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _anthropometry_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anthropometry-detail-routing.module */ 46781);
/* harmony import */ var _anthropometry_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./anthropometry-detail.page */ 16045);







let AnthropometryDetailPageModule = class AnthropometryDetailPageModule {
};
AnthropometryDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _anthropometry_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.AnthropometryDetailPageRoutingModule
        ],
        declarations: [_anthropometry_detail_page__WEBPACK_IMPORTED_MODULE_1__.AnthropometryDetailPage]
    })
], AnthropometryDetailPageModule);



/***/ }),

/***/ 16045:
/*!*******************************************************************!*\
  !*** ./src/app/anthropometry-detail/anthropometry-detail.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnthropometryDetailPage": () => (/* binding */ AnthropometryDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_anthropometry_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./anthropometry-detail.page.html */ 86417);
/* harmony import */ var _anthropometry_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./anthropometry-detail.page.scss */ 87189);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ 16527);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loader.service */ 98077);
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service.service */ 59353);









let AnthropometryDetailPage = class AnthropometryDetailPage {
    constructor(navCtrl, router, service, alertController, config, loader) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.service = service;
        this.alertController = alertController;
        this.config = config;
        this.loader = loader;
        this.logindata = JSON.parse(localStorage.getItem("ccs_login"));
        console.log(this.logindata);
        this.data = this.router.snapshot.params;
        console.log(this.data);
        this.Datesave = new Date();
        this.displydata = '0';
        this.Dateshow = this.DateSets(this.Datesave);
        this.datedi = this.DateSetd(this.Datesave);
        this.getanthropometrydata();
    }
    ngOnInit() {
    }
    backbutton() {
        this.navCtrl.pop();
    }
    getanthropometrydata() {
        this.loader.showLoader();
        var params = {
            user_id: this.logindata.id,
            demographic_id: this.data.id
        };
        console.log(params);
        this.service.getanthropometrydata(params)
            .then((result) => this.setgetanthropometrydata(result));
    }
    setgetanthropometrydata(res) {
        console.log('setgetanthropometrydata=> ', res);
        this.loader.dissmissLoader();
        if (res.ResponseCode == '1') {
            this.anthropometry = res.data;
        }
        this.conformdata();
    }
    DateChange(inx) {
        this.Datesave.setDate(this.Datesave.getDate() + inx);
        this.Dateshow = this.DateSets(this.Datesave);
        this.datedi = this.DateSetd(this.Datesave);
        this.conformdata();
    }
    DateSets(td) {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return days[td.getDay()] + ', ' + ('0' + td.getDate().toString()).slice(-2) + ' ' + months[td.getMonth()] + ' ' + (td.getFullYear().toString()).slice(-2);
    }
    DateSetd(td) {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        this.mindate = td.getDate().toString() - 1;
        this.maxdate = (td.getDate() + 1).toString();
        return ('0' + td.getDate().toString()).slice(-2);
    }
    conformdata() {
        const year = this.Datesave.getFullYear();
        const date = this.Datesave.getDate();
        const month = String(this.Datesave.getMonth() + 1).padStart(2, '0');
        this.joined = [year, month, date].join('');
        this.disdatas = [];
        for (var i = 0; i < this.anthropometry.length; i++) {
            this.date = this.anthropometry[i].date;
            let d = new Date(new Date(this.date).getTime());
            const yeara = d.getFullYear();
            const datea = d.getDate();
            const montha = String(d.getMonth() + 1).padStart(2, '0');
            this.joineda = [yeara, montha, datea].join('');
            if (this.joined === this.joineda) {
                this.displydata = '1';
                this.disdata = this.anthropometry[i];
                break;
            }
            else {
                this.displydata = '0';
                this.disdatas.push(this.anthropometry[i]);
            }
        }
        console.log(this.displydata, '=====', this.disdata);
    }
};
AnthropometryDetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_4__.ServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService },
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService }
];
AnthropometryDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-anthropometry-detail',
        template: _raw_loader_anthropometry_detail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_anthropometry_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AnthropometryDetailPage);



/***/ }),

/***/ 87189:
/*!*********************************************************************!*\
  !*** ./src/app/anthropometry-detail/anthropometry-detail.page.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".backarrow {\n  color: #000;\n  font-size: 18px;\n  margin-left: 24px;\n}\n\n.heaertitle {\n  font-size: 15px;\n  font-weight: 500;\n  color: #000;\n  text-align: center;\n}\n\n.listpadd {\n  padding: 0 14px;\n}\n\n.childimgs {\n  width: 60px;\n  height: 60px;\n  border-radius: 14px;\n}\n\n.clidename {\n  font-size: 15px;\n  color: #000;\n  font-weight: 400;\n}\n\n.detaildiv {\n  font-size: 14px;\n  color: #000;\n  padding: 3px 0 0 0;\n}\n\n.datebuttonback {\n  height: 46px;\n  width: 46px;\n  border-radius: 50%;\n  background: linear-gradient(110deg, #93a9fd 20%, #9bbdfe 75%);\n  position: relative;\n  font-size: 16px;\n  margin: 4px 3px;\n}\n\n.datebuttonback:active {\n  height: 48px;\n  width: 48px;\n  font-size: 18px;\n  margin: 0px 1px;\n}\n\n.dateback {\n  transform: rotate(180deg);\n}\n\n.datenext {\n  color: #fff;\n  font-weight: 500;\n}\n\n.fridejune {\n  font-size: 13px;\n  color: #8f8f8f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGhyb3BvbWV0cnktZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUFBO0VBQ0ksZUFBQTtBQUdKOztBQURBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUlKOztBQUZBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUtKOztBQUhBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQU1KOztBQUpBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDZEQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQU9KOztBQUxBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQVFKOztBQU5BO0VBQ0kseUJBQUE7QUFTSjs7QUFQQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQVVKOztBQVJBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFXSiIsImZpbGUiOiJhbnRocm9wb21ldHJ5LWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2Fycm93e1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjRweDtcclxufVxyXG4uaGVhZXJ0aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubGlzdHBhZGR7XHJcbiAgICBwYWRkaW5nOiAwIDE0cHg7XHJcbn1cclxuLmNoaWxkaW1nc3tcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxufVxyXG4uY2xpZGVuYW1le1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi5kZXRhaWxkaXZ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHBhZGRpbmc6IDNweCAwIDAgMDtcclxufVxyXG4uZGF0ZWJ1dHRvbmJhY2t7XHJcbiAgICBoZWlnaHQ6IDQ2cHg7XHJcbiAgICB3aWR0aDogNDZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMTBkZWcsICM5M2E5ZmQgMjAlLCAjOWJiZGZlIDc1JSk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW46IDRweCAzcHg7XHJcbn1cclxuLmRhdGVidXR0b25iYWNrOmFjdGl2ZXtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luOiAwcHggMXB4O1xyXG59XHJcbi5kYXRlYmFja3tcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbn1cclxuLmRhdGVuZXh0e1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5mcmlkZWp1bmV7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogIzhmOGY4ZjtcclxufSJdfQ== */");

/***/ }),

/***/ 86417:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/anthropometry-detail/anthropometry-detail.page.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"fullback\">\n\n  <div class=\"maindiv\" style=\"height:100%\">\n    <img src=\"assets/imgs/logo.png\" class=\"toplogo\" alt=\"\">\n\n    <div>\n      <div class=\"ht_45\"></div>\n      <ion-row>\n        <ion-col size=\"3\" class=\"vertical_centr\" (click)=\"backbutton()\">\n          <ion-icon name=\"chevron-back-outline\" class=\"backarrow\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"6\">\n          <div class=\"heaertitle\">Anthropometry Data</div>\n        </ion-col>\n        <ion-col size=\"3\"></ion-col>\n      </ion-row>\n      <div class=\"ht_60\"></div>\n\n      <div class=\"listpadd\">\n        <ion-row (click)=\"detailopen()\">\n          <ion-col size=\"3\" class=\"ion-no-padding\">\n            <img *ngIf=\"data.image == ''\" src=\"assets/imgs/child.png\" class=\"childimgs\">\n            <img *ngIf=\"data.image != ''\" src=\"{{config.api}}{{data.image}}\" class=\"childimgs\">\n\n          </ion-col>\n          <ion-col size=\"8\" class=\"vertical_centrC\">\n            <div class=\"clidename\">{{data.name}}</div>\n          </ion-col>\n          <ion-col size=\"1\"></ion-col>\n        </ion-row>\n\n        <div class=\"ht_20\"></div>\n        <div class=\"listpadd\">\n          <ion-row class=\"listpadd\">\n            <ion-col size=\"3\" class=\"vertical_centr\">\n              <div class=\"datebuttonback vertical_centr\" (click)=\"DateChange(-1)\">\n                <ion-icon name=\"play-outline\" class=\"datenext dateback\"></ion-icon>\n              </div>\n            </ion-col>\n            <ion-col size=\"6\" class=\"ion-no-padding vertical_centr\">\n              <div class=\"fridejune\">{{Dateshow}}</div>\n            </ion-col>\n            <ion-col size=\"3\" class=\"vertical_centr\">\n              <div class=\"datebuttonback vertical_centr\" (click)=\"DateChange(+1)\">\n                <ion-icon name=\"play-outline\" class=\"datenext\"></ion-icon>\n              </div>\n            </ion-col>\n          </ion-row>\n        </div>\n        <div class=\"ht_20\"></div>\n\n        <div class=\"detaildiv\">Name:{{data.name}}</div>\n        <div class=\"detaildiv\">Date of Birth:{{data.dob}}</div>\n        <div class=\"detaildiv\">Gender: {{data.gender}}</div>\n        \n        <div *ngIf=\"displydata == '1' && disdata\">\n          <div class=\"detaildiv\">Height: {{disdata.height}}(cm)</div>\n          <div class=\"detaildiv\">Weight:{{disdata.weight}} (kg)</div>\n          <div class=\"detaildiv\">BMI Result: BMI={{disdata.bmi}} kg/m2</div>\n          <div class=\"detaildiv\">Healthy weight for the height: {{disdata.healthy_weight_for_height}}</div>\n          <!-- <div class=\"detaildiv\">Ponderal Index:{{disdata.ponderal_index}}</div> -->\n          <div class=\"detaildiv\">Waist circumference:{{disdata.waist_circumference}}</div>\n          <div class=\"detaildiv\">Hip circumference: {{disdata.hip_circumference}}</div>\n          <div class=\"detaildiv\">Waist hip ratio: {{disdata.waist_hip_ratio}}</div>\n          <div class=\"detaildiv\">MAC: {{disdata.mac}}</div>\n          <div class=\"detaildiv\">TSFC: {{disdata.tsfc}}</div>\n          <div class=\"detaildiv\">Goal: {{disdata.goal}}</div>\n          <!-- <div class=\"detaildiv\">Lose 11.6 kgs to reach a BMI of 25 kg/m2.</div> -->\n          <!-- <div class=\"detaildiv\">Healthy BMI range: 18.5 kg/m2 - 25 kg/m2</div> -->\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_anthropometry-detail_anthropometry-detail_module_ts.js.map