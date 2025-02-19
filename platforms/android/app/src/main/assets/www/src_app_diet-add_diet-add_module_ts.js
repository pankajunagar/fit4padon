(self["webpackChunkCCS"] = self["webpackChunkCCS"] || []).push([["src_app_diet-add_diet-add_module_ts"],{

/***/ 93516:
/*!*****************************************************!*\
  !*** ./src/app/diet-add/diet-add-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DietAddPageRoutingModule": () => (/* binding */ DietAddPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _diet_add_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diet-add.page */ 18247);




const routes = [
    {
        path: '',
        component: _diet_add_page__WEBPACK_IMPORTED_MODULE_0__.DietAddPage
    }
];
let DietAddPageRoutingModule = class DietAddPageRoutingModule {
};
DietAddPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DietAddPageRoutingModule);



/***/ }),

/***/ 74463:
/*!*********************************************!*\
  !*** ./src/app/diet-add/diet-add.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DietAddPageModule": () => (/* binding */ DietAddPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _diet_add_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diet-add-routing.module */ 93516);
/* harmony import */ var _diet_add_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./diet-add.page */ 18247);







let DietAddPageModule = class DietAddPageModule {
};
DietAddPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _diet_add_routing_module__WEBPACK_IMPORTED_MODULE_0__.DietAddPageRoutingModule
        ],
        declarations: [_diet_add_page__WEBPACK_IMPORTED_MODULE_1__.DietAddPage]
    })
], DietAddPageModule);



/***/ }),

/***/ 18247:
/*!*******************************************!*\
  !*** ./src/app/diet-add/diet-add.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DietAddPage": () => (/* binding */ DietAddPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_diet_add_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./diet-add.page.html */ 38640);
/* harmony import */ var _diet_add_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./diet-add.page.scss */ 62106);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ 16527);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loader.service */ 98077);
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service.service */ 59353);









let DietAddPage = class DietAddPage {
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
        // this.datas = this.router.snapshot.params.key
        // console.log(this.datas)
        if (this.data) {
            this.wakeup_time = this.data.wakeup_time,
                this.bed_time = this.data.bed_time,
                this.diet_type = this.data.diet_type,
                this.food_allergies = this.data.food_allergies;
            // this.detail = this.data.detail
            if (this.data.detail == null || this.data.detail == 'null') {
                this.detail = ' ';
            }
            else {
                this.detail = this.data.detail;
            }
            // if (!this.data.detail) {
            //   this.detail = this.data.detail
            // }
        }
        this.getdemographicdata();
    }
    ngOnInit() {
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
            for (var x = 0; x < this.graphicsdata.length; x++) {
                if (this.data.child_id == this.graphicsdata[x].id) {
                    console.log(this.graphicsdata[x]);
                    this.childata = this.graphicsdata[x];
                    this.usrimg = this.childata.image;
                    this.bdate = this.childata.dob;
                    let d = new Date(new Date(this.bdate));
                    d.setMonth(d.getMonth());
                    this.date2 = d.toISOString().slice(0, 4);
                    let newd = new Date(new Date());
                    newd.setMonth(newd.getMonth());
                    this.date1 = newd.toISOString().slice(0, 4);
                    this.chkd = this.date1 - this.date2;
                }
                else {
                    if (this.data.id == this.graphicsdata[x].id) {
                        console.log(this.graphicsdata[x]);
                        this.childata = this.graphicsdata[x];
                        this.usrimg = this.childata.image;
                        this.bdate = this.childata.dob;
                        let d = new Date(new Date(this.bdate));
                        d.setMonth(d.getMonth());
                        this.date2 = d.toISOString().slice(0, 4);
                        let newd = new Date(new Date());
                        newd.setMonth(newd.getMonth());
                        this.date1 = newd.toISOString().slice(0, 4);
                        this.chkd = this.date1 - this.date2;
                    }
                }
            }
        }
    }
    backbutton() {
        this.navCtrl.pop();
    }
    changed(t) {
        //data.wakeup_time
        console.log(t.detail.value);
    }
    submit() {
        if (!this.wakeup_time) {
            alert('Please select wakeup time');
        }
        else if (!this.bed_time) {
            alert('Please select bed time');
        }
        else {
            this.loader.showLoader();
            if (!this.data.child_id) {
                var cid = this.data.id;
            }
            else {
                var cid = this.data.child_id;
            }
            var params = {
                user_id: this.logindata.id,
                wakeup_time: this.wakeup_time.substr(11, 8),
                bed_time: this.bed_time.substr(11, 8),
                diet_type: this.diet_type,
                detail: this.detail,
                food_allergies: this.food_allergies,
                //child_id: this.data.id
                child_id: cid
            };
            console.log(params);
            this.service.adddiet(params)
                .then((result) => this.handlediet(result));
        }
    }
    handlediet(result) {
        console.log(result);
        this.loader.dissmissLoader();
        if (result.ResponseCode == '1') {
            alert('Details successfully submitted');
            this.navCtrl.navigateRoot('/home');
        }
        else {
            alert(result.ResponseMsg);
        }
    }
    editdetail() {
        var params = {
            id: this.data.id,
            user_id: this.logindata.id,
            wakeup_time: this.wakeup_time,
            bed_time: this.bed_time,
            diet_type: this.diet_type,
            detail: this.detail,
            food_allergies: this.food_allergies,
            child_id: this.data.child_id
        };
        console.log(params);
        this.service.editdiet_history(params)
            .then((result) => this.handleditdetails(result));
    }
    handleditdetails(result) {
        console.log(result);
        this.loader.dissmissLoader();
        if (result.ResponseCode == '1') {
            alert('Details successfully edit');
            this.navCtrl.navigateRoot('/home');
        }
        else {
            alert(result.ResponseMsg);
        }
    }
};
DietAddPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_4__.ServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService },
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService }
];
DietAddPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-diet-add',
        template: _raw_loader_diet_add_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_diet_add_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DietAddPage);



/***/ }),

/***/ 62106:
/*!*********************************************!*\
  !*** ./src/app/diet-add/diet-add.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".backarrow {\n  color: #000;\n  font-size: 18px;\n  margin-left: 24px;\n}\n\n.heaertitle {\n  font-size: 15px;\n  font-weight: 500;\n  color: #000;\n  text-align: center;\n}\n\n.childimgs {\n  width: 60px;\n  height: 60px;\n  border-radius: 14px;\n}\n\n.listpadd {\n  padding: 0 14px;\n}\n\n.clidename {\n  font-size: 15px;\n  color: #000;\n  font-weight: 400;\n  padding-top: 6px;\n}\n\n.clidedetail {\n  font-size: 13px;\n  color: #a5a5a5;\n  padding-top: 5px;\n}\n\n.titleHed {\n  font-size: 15px;\n  color: #000;\n  font-weight: 500;\n}\n\n.itemclass {\n  background: #f7f8f8;\n  --background: #f7f8f8;\n  border-radius: 50px;\n  --border-radius: 50px;\n  --min-height: 42px !important;\n}\n\n.textaitemclass {\n  background: #f7f8f8;\n  --background: #f7f8f8;\n  border-radius: 20px;\n  --border-radius: 20px;\n  padding: 12px 0;\n}\n\n.iconcls {\n  font-size: 18px;\n  margin: 0px 10px 0px 0px;\n  color: #afafaf;\n}\n\n.timepicker {\n  background: #f7f8f8;\n  --background: #f7f8f8;\n  border-radius: 50px;\n  --border-radius: 50px;\n  font-size: 16px;\n  --font-size: 16px;\n  --padding-start: 8px;\n  width: 100%;\n  text-align: center;\n  letter-spacing: 4px;\n  color: #969696;\n}\n\n.ioninput {\n  background: #f7f8f8;\n  --background: #f7f8f8;\n  border-radius: 50px;\n  --border-radius: 50px;\n  font-size: 14px;\n  --font-size: 14px;\n  --padding-start: 8px;\n  width: 100%;\n}\n\n.toglebtn {\n  --handle-background-checked: #fff;\n  --background-checked: #ff9a98;\n  width: 40px;\n  height: 24px;\n  --handle-width: 18px;\n  --handle-height: 18px;\n}\n\n.textariya {\n  margin: 0px !important;\n  --padding-top:0px;\n  border-radius: 2px;\n  --border-radius: 2px;\n  --padding-start: 8px !important;\n}\n\n.Submitbtn {\n  text-transform: none;\n  --text-transform: none;\n  background: #ff9a98;\n  --background: #ff9a98;\n  color: #fff;\n  --color: #fff;\n  font-size: 16px;\n  --font-size: 16px;\n  border-radius: 50px;\n  --border-radius: 50px;\n  box-shadow: none;\n  --box-shadow: none;\n  font-weight: 500;\n  --font-weight: 500;\n  height: 40px;\n  --height: 40px;\n  width: 40%;\n  --width: 40%;\n  margin: auto;\n  display: table;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpZXQtYWRkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUdKOztBQURBO0VBQ0ksZUFBQTtBQUlKOztBQUZBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBS0o7O0FBSEE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBTUo7O0FBSkE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBT0o7O0FBTEE7RUFDSSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0FBUUo7O0FBTkE7RUFDSSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFTSjs7QUFQQTtFQUNJLGVBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7QUFVSjs7QUFSQTtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFXSjs7QUFUQTtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FBWUo7O0FBVkE7RUFDSSxpQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBYUo7O0FBWEE7RUFDSSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLCtCQUFBO0FBY0o7O0FBWkE7RUFDSSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBZUoiLCJmaWxlIjoiZGlldC1hZGQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2thcnJvd3tcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI0cHg7XHJcbn1cclxuLmhlYWVydGl0bGV7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmNoaWxkaW1nc3tcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxufVxyXG4ubGlzdHBhZGR7XHJcbiAgICBwYWRkaW5nOiAwIDE0cHg7XHJcbn1cclxuLmNsaWRlbmFtZXtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHBhZGRpbmctdG9wOiA2cHg7XHJcbn1cclxuLmNsaWRlZGV0YWlse1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6ICNhNWE1YTU7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG59XHJcbi50aXRsZUhlZHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uaXRlbWNsYXNze1xyXG4gICAgYmFja2dyb3VuZDogI2Y3ZjhmODtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y3ZjhmODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6IDQycHggIWltcG9ydGFudDtcclxufVxyXG4udGV4dGFpdGVtY2xhc3N7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjdmOGY4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjdmOGY4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHBhZGRpbmc6IDEycHggMDtcclxufVxyXG4uaWNvbmNsc3tcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbjogMHB4IDEwcHggMHB4IDBweDtcclxuICAgIGNvbG9yOiAjYWZhZmFmO1xyXG59XHJcbi50aW1lcGlja2Vye1xyXG4gICAgYmFja2dyb3VuZDogI2Y3ZjhmODtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y3ZjhmODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAtLWZvbnQtc2l6ZTogMTZweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gICAgY29sb3I6ICM5Njk2OTY7XHJcbn1cclxuLmlvbmlucHV0e1xyXG4gICAgYmFja2dyb3VuZDogI2Y3ZjhmODtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y3ZjhmODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAtLWZvbnQtc2l6ZTogMTRweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnRvZ2xlYnRue1xyXG4gICAgLS1oYW5kbGUtYmFja2dyb3VuZC1jaGVja2VkOiAjZmZmO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNmZjlhOTg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIC0taGFuZGxlLXdpZHRoOiAxOHB4O1xyXG4gICAgLS1oYW5kbGUtaGVpZ2h0OiAxOHB4O1xyXG59XHJcbi50ZXh0YXJpeWF7XHJcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG4gICAgLS1wYWRkaW5nLXRvcDowcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLlN1Ym1pdGJ0bntcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgLS10ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICNmZjlhOTg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZjlhOTg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIC0tY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAtLWZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIC0tZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIC0taGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIC0td2lkdGg6IDQwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG59Il19 */");

/***/ }),

/***/ 38640:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/diet-add/diet-add.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"fullback\">\n\n  <div class=\"maindiv\">\n    <img src=\"assets/imgs/logo.png\" class=\"toplogo\" alt=\"\">\n\n    <div>\n      <div class=\"ht_45\"></div>\n      <ion-row>\n        <ion-col size=\"3\" class=\"vertical_centr\" (click)=\"backbutton()\">\n          <ion-icon name=\"chevron-back-outline\" class=\"backarrow\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"6\">\n          <div class=\"heaertitle\">Diet History</div>\n        </ion-col>\n        <ion-col size=\"3\"></ion-col>\n      </ion-row>\n      <div class=\"ht_50\"></div>\n\n      <div class=\"listpadd\">\n        <ion-row *ngIf=\"datas != 0\">\n          <ion-col size=\"3\" class=\"ion-no-padding\">\n            <img *ngIf=\"usrimg == ''\" src=\"assets/imgs/child.png\" class=\"childimgs\">\n            <img *ngIf=\"usrimg != ''\" src=\"{{config.api}}{{usrimg}}\" class=\"childimgs\">\n          </ion-col>\n          <ion-col size=\"8\">\n            <div class=\"clidename\">{{data.child_name}}</div>\n            <div class=\"clidedetail\" *ngIf=\"data.detail != null\">{{chkd}} yrs | H:{{data.detail.height}} | W:{{data.detail.weight}}</div>\n          </ion-col>\n          <ion-col size=\"1\">\n\n          </ion-col>\n        </ion-row>\n        <div class=\"ht_25\"></div>\n        <div class=\"listpadd\">\n          <div class=\"listpadd\">\n\n            <div class=\"titleHed\">Wake up Time</div>\n            <div class=\"ht_15\"></div>\n            <ion-item class=\"itemclass\" lines=\"none\">\n              <ion-datetime [(ngModel)]=\"wakeup_time\" class=\"timepicker\" placeholder=\"3 30 PM\" displayFormat=\"h mm A\"\n                pickerFormat=\"h mm A\" (ionChange)=\"changed($event)\">\n              </ion-datetime>\n            </ion-item>\n            <div class=\"ht_25\"></div>\n\n            <div class=\"titleHed\">Bed Time</div>\n            <div class=\"ht_15\"></div>\n            <ion-item class=\"itemclass\" lines=\"none\">\n              <ion-datetime [(ngModel)]=\"bed_time\" class=\"timepicker\" placeholder=\"3 30 PM\" displayFormat=\"h mm A\"\n                pickerFormat=\"h mm A\">\n              </ion-datetime>\n            </ion-item>\n          </div>\n\n          <div class=\"ht_20\"></div>\n          <div style=\"padding-left:5px;\">\n            <ion-item class=\"itemclass\" lines=\"none\">\n              <ion-icon name=\"grid-outline\" slot=\"start\" class=\"iconcls\"></ion-icon>\n              <ion-select class=\"ioninput\" placeholder=\"Diet Type\" [(ngModel)]=\"diet_type\">\n                <ion-select-option value=\"Non Veg\">Non Veg</ion-select-option>\n                <ion-select-option value=\"Veg\">Veg</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <div class=\"ht_10\"></div>\n            <!--<ion-item class=\"itemclass\" lines=\"none\">\n              <ion-icon name=\"grid-outline\" slot=\"start\" class=\"iconcls\"></ion-icon>\n              <ion-label style=\"color:#afafaf;font-size:14px;padding-left:8px;\"></ion-label>\n              <ion-toggle [(ngModel)]=\"food_allergies\" slot=\"end\" [checked]=\"true\" class=\"toglebtn\"></ion-toggle>\n            </ion-item>-->\n            <div class=\"ht_10\"></div>\n            <ion-item class=\"textaitemclass\" lines=\"none\">\n              <ion-icon name=\"grid-outline\" slot=\"start\" class=\"iconcls\"></ion-icon>\n              <ion-textarea [(ngModel)]=\"detail\" class=\"ioninput textariya\" placeholder=\"Details\" type=\"text\"\n                rows=\"4\"></ion-textarea>\n            </ion-item>\n            <div class=\"ht_20\"></div>\n\n            <ion-button *ngIf=\"!data\" class=\"Submitbtn\" (click)=\"submit()\">Submit</ion-button>\n            <ion-button *ngIf=\"data\" class=\"Submitbtn\" (click)=\"editdetail()\">Edit</ion-button>\n\n               <div class=\"ht_10\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_diet-add_diet-add_module_ts.js.map