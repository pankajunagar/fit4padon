(self["webpackChunkCCS"] = self["webpackChunkCCS"] || []).push([["src_app_demographic-detail_demographic-detail_module_ts"],{

/***/ 90592:
/*!*************************************************************************!*\
  !*** ./src/app/demographic-detail/demographic-detail-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemographicDetailPageRoutingModule": () => (/* binding */ DemographicDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _demographic_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demographic-detail.page */ 63604);




const routes = [
    {
        path: '',
        component: _demographic_detail_page__WEBPACK_IMPORTED_MODULE_0__.DemographicDetailPage
    }
];
let DemographicDetailPageRoutingModule = class DemographicDetailPageRoutingModule {
};
DemographicDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DemographicDetailPageRoutingModule);



/***/ }),

/***/ 4808:
/*!*****************************************************************!*\
  !*** ./src/app/demographic-detail/demographic-detail.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemographicDetailPageModule": () => (/* binding */ DemographicDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _demographic_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demographic-detail-routing.module */ 90592);
/* harmony import */ var _demographic_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demographic-detail.page */ 63604);







let DemographicDetailPageModule = class DemographicDetailPageModule {
};
DemographicDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _demographic_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.DemographicDetailPageRoutingModule
        ],
        declarations: [_demographic_detail_page__WEBPACK_IMPORTED_MODULE_1__.DemographicDetailPage]
    })
], DemographicDetailPageModule);



/***/ }),

/***/ 63604:
/*!***************************************************************!*\
  !*** ./src/app/demographic-detail/demographic-detail.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemographicDetailPage": () => (/* binding */ DemographicDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_demographic_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./demographic-detail.page.html */ 34082);
/* harmony import */ var _demographic_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demographic-detail.page.scss */ 61022);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ 16527);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loader.service */ 98077);
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service.service */ 59353);









let DemographicDetailPage = class DemographicDetailPage {
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
    }
    ngOnInit() {
    }
    backbutton() {
        this.navCtrl.pop();
    }
};
DemographicDetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_4__.ServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService },
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService }
];
DemographicDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-demographic-detail',
        template: _raw_loader_demographic_detail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_demographic_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DemographicDetailPage);



/***/ }),

/***/ 61022:
/*!*****************************************************************!*\
  !*** ./src/app/demographic-detail/demographic-detail.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".backarrow {\n  color: #000;\n  font-size: 18px;\n  margin-left: 24px;\n}\n\n.heaertitle {\n  font-size: 15px;\n  font-weight: 500;\n  color: #000;\n  text-align: center;\n}\n\n.listpadd {\n  padding: 0 14px;\n}\n\n.childimgs {\n  width: 60px;\n  height: 60px;\n  border-radius: 14px;\n}\n\n.clidename {\n  font-size: 15px;\n  color: #000;\n  font-weight: 400;\n}\n\n.detaildiv {\n  font-size: 14px;\n  color: #000;\n  padding: 6px 9px 6px 0;\n}\n\n.toplogo1 {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW9ncmFwaGljLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7QUFHSjs7QUFEQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFJSjs7QUFGQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFLSjs7QUFIQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFNSjs7QUFKQTtFQUNJLFdBQUE7QUFPSiIsImZpbGUiOiJkZW1vZ3JhcGhpYy1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2thcnJvd3tcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI0cHg7XHJcbn1cclxuLmhlYWVydGl0bGV7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmxpc3RwYWRke1xyXG4gICAgcGFkZGluZzogMCAxNHB4O1xyXG59XHJcbi5jaGlsZGltZ3N7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbn1cclxuLmNsaWRlbmFtZXtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4uZGV0YWlsZGl2e1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBwYWRkaW5nOiA2cHggOXB4IDZweCAwO1xyXG59XHJcbi50b3Bsb2dvMXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */");

/***/ }),

/***/ 34082:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demographic-detail/demographic-detail.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"fullback\">\n\n  <div class=\"maindiv\" style=\"height:1200px\">\n    <ion-row>\n      <ion-col size=\"3\" class=\"vertical_centr\" (click)=\"backbutton()\">\n        <ion-icon name=\"chevron-back-outline\" class=\"backarrow\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"6\">\n        <div class=\"heaertitle\">Demographic Data</div>\n      </ion-col>\n      <ion-col size=\"3\"></ion-col>\n    </ion-row>\n    <div class=\"ht_60\"></div>\n    <div>\n      <img *ngIf=\"data.image == ''\" src=\"assets/imgs/logo.png\" class=\"toplogo\" alt=\"\">\n      <img *ngIf=\"data.image != ''\" src=\"{{config.api}}{{data.image}}\" class=\"toplogo1\" alt=\"\">\n\n      \n      \n\n      <div class=\"listpadd\">\n        <!-- <ion-row>\n          <ion-col size=\"3\" class=\"ion-no-padding\">\n            <img src=\"assets/imgs/child.png\" class=\"childimgs\">\n          </ion-col>\n          <ion-col size=\"8\" class=\"vertical_centrC\">\n            <div class=\"clidename\">{{data.name}}</div>\n          </ion-col>\n          <ion-col size=\"1\"></ion-col>\n        </ion-row> -->\n\n\n        <div class=\"ht_10\"></div>\n        <div class=\"detaildiv\"><b>Name</b>: {{data.name}}</div>\n        <div class=\"detaildiv\"><b>Date of Birth</b>: {{data.dob}}</div>\n        <div class=\"detaildiv\"><b>Gender</b>: {{data.gender}}</div>\n        <div class=\"detaildiv\"><b>Education</b>: {{data.education}}</div>\n        <div class=\"detaildiv\"><b>Parent occupation</b>: {{data.parent_occupation}}</div>\n        <div class=\"detaildiv\"><b>Education of the family head</b>:{{data.education_family_head}}</div>\n        <div class=\"detaildiv\"><b>Monthly income of the family</b>: {{data.monthly_income}}</div>\n        <div class=\"detaildiv\"><b>Socio economic status</b>: {{data.social_economical_strength}}</div>\n        <div class=\"detaildiv\"><b>Patient family history of cancer</b>: {{data.patient_family_history_of_cancer}}</div>\n        <div class=\"detaildiv\"><b>Details</b>:  {{data.description}}</div>\n        <div class=\"detaildiv\"><b>Type of treatment</b>: {{data.type_of_treatment}}</div>\n        <div class=\"detaildiv\"><b>Menstrual status</b>: {{data.menstrual_status}}</div>\n        <div class=\"detaildiv\"><b>Diagnosis</b>: {{data.diganosis}}</div>\n        <div class=\"detaildiv\"><b>Biochemical</b>: {{data.biochemical}}</div>\n        <div class=\"detaildiv\"><b>Clinical</b>: {{data.clinical}}</div>\n      </div>\n    </div>\n\n  </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_demographic-detail_demographic-detail_module_ts.js.map