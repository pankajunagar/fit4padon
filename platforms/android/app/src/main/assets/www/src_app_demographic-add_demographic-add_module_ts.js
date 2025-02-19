(self["webpackChunkCCS"] = self["webpackChunkCCS"] || []).push([["src_app_demographic-add_demographic-add_module_ts"],{

/***/ 14410:
/*!*******************************************************************!*\
  !*** ./src/app/demographic-add/demographic-add-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemographicAddPageRoutingModule": () => (/* binding */ DemographicAddPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _demographic_add_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demographic-add.page */ 68682);




const routes = [
    {
        path: '',
        component: _demographic_add_page__WEBPACK_IMPORTED_MODULE_0__.DemographicAddPage
    }
];
let DemographicAddPageRoutingModule = class DemographicAddPageRoutingModule {
};
DemographicAddPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DemographicAddPageRoutingModule);



/***/ }),

/***/ 2629:
/*!***********************************************************!*\
  !*** ./src/app/demographic-add/demographic-add.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemographicAddPageModule": () => (/* binding */ DemographicAddPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _demographic_add_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demographic-add-routing.module */ 14410);
/* harmony import */ var _demographic_add_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demographic-add.page */ 68682);







let DemographicAddPageModule = class DemographicAddPageModule {
};
DemographicAddPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _demographic_add_routing_module__WEBPACK_IMPORTED_MODULE_0__.DemographicAddPageRoutingModule
        ],
        declarations: [_demographic_add_page__WEBPACK_IMPORTED_MODULE_1__.DemographicAddPage]
    })
], DemographicAddPageModule);



/***/ }),

/***/ 68682:
/*!*********************************************************!*\
  !*** ./src/app/demographic-add/demographic-add.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemographicAddPage": () => (/* binding */ DemographicAddPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_demographic_add_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./demographic-add.page.html */ 66208);
/* harmony import */ var _demographic_add_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demographic-add.page.scss */ 56068);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 84267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.service */ 16527);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loader.service */ 98077);
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service.service */ 59353);
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ 97905);










let DemographicAddPage = class DemographicAddPage {
    constructor(navCtrl, camera, actCtrl, actionSheetController, service, loader, config, transfer) {
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.actCtrl = actCtrl;
        this.actionSheetController = actionSheetController;
        this.service = service;
        this.loader = loader;
        this.config = config;
        this.transfer = transfer;
        this.logindata = JSON.parse(localStorage.getItem("ccs_login"));
        console.log(this.logindata);
    }
    ngOnInit() {
        this.getparent_occupation();
        this.getmonthly_income();
        this.getdiganosis();
        this.geteducation_of_the_family();
        this.getmenstrual_status();
        this.gettype_of_treatment();
    }
    backbutton() {
        this.navCtrl.pop();
    }
    selectImage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: "Select Image source",
                buttons: [{
                        text: 'Load from Library',
                        handler: () => {
                            this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
                        }
                    },
                    {
                        text: 'Use Camera',
                        handler: () => {
                            this.pickImage(this.camera.PictureSourceType.CAMERA);
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    pickImage(sourceType) {
        const options = {
            quality: 100,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.PNG,
            mediaType: this.camera.MediaType.PICTURE,
            targetHeight: 500,
            targetWidth: 500,
        };
        this.camera.getPicture(options).then((imageData) => {
            let base64Image = 'data:image/png;base64,' + imageData;
            this.croppedImagePath = base64Image;
            this.upload(this.croppedImagePath);
        }, (err) => {
            console.log(err);
        });
    }
    upload(image) {
        var d = new Date();
        var n = d.getTime();
        let options = {
            fileKey: "image",
            fileName: "image_" + n.toString() + ".png",
            chunkedMode: false,
            mimeType: "image/png"
        };
        console.log(options);
        const fileTransfer = this.transfer.create();
        fileTransfer.upload(image, this.config.api + 'imageupload.php', options)
            .then((data) => {
            console.log("data:", data.response);
            var imgdata = JSON.parse(data.response);
            console.log(imgdata);
            if (imgdata.ResponseCode == 1) {
                console.log(imgdata.image_url);
                this.image = imgdata.image_url;
                this.Myimage = this.image;
                console.log(this.Myimage);
                alert('Image Uploaded');
            }
        });
    }
    getparent_occupation() {
        this.loader.showLoader();
        this.service.getparent_occupation()
            .then((results) => this.setconfig(results));
    }
    setconfig(res) {
        this.loader.dissmissLoader();
        this.pc = res.data;
        console.log('getparent_occupation=> ', this.pc);
    }
    getmonthly_income() {
        this.loader.showLoader();
        this.service.getmonthly_income()
            .then((results) => this.setmonthly_income(results));
    }
    setmonthly_income(res) {
        this.loader.dissmissLoader();
        this.monthlyincome = res.data;
        console.log('getparent_occupation=> ', this.pc);
    }
    getdiganosis() {
        this.loader.showLoader();
        this.service.getdiganosis()
            .then((results) => this.setdiganosis(results));
    }
    setdiganosis(res) {
        this.loader.dissmissLoader();
        this.getdiganosi = res.data;
        console.log('getdiganosi=> ', this.getdiganosi);
    }
    geteducation_of_the_family() {
        this.loader.showLoader();
        this.service.geteducation_of_the_family()
            .then((results) => this.setducation_of_the_family(results));
    }
    setducation_of_the_family(res) {
        this.loader.dissmissLoader();
        this.ducationf = res.data;
        console.log('setducation_of_the_family=> ', this.ducationf);
    }
    getmenstrual_status() {
        this.loader.showLoader();
        this.service.getmenstrual_status()
            .then((results) => this.handlegetmenstrual_status(results));
    }
    handlegetmenstrual_status(res) {
        this.loader.dissmissLoader();
        console.log(res.data);
        this.menstrual_status_data = res.data;
    }
    gettype_of_treatment() {
        this.loader.showLoader();
        this.service.gettype_of_treatment()
            .then((results) => this.handlegettype_of_treatment(results));
    }
    handlegettype_of_treatment(res) {
        this.loader.dissmissLoader();
        console.log(res.data);
        this.type_of_treatment_data = res.data;
    }
    validmess() {
        if (!this.name) {
            alert('Enter Name...');
            return false;
        }
        if (!this.dob) {
            alert('Enter dob...');
            return false;
        }
        if (!this.gender) {
            alert('Enter gender...');
            return false;
        }
        if (!this.parent_occupation) {
            alert('Enter parent_occupation...');
            return false;
        }
        if (!this.education_family_head) {
            alert('Enter education_family_head...');
            return false;
        }
        if (!this.monthly_income) {
            alert('Enter monthly_income...');
            return false;
        }
        // if (!this.history_cancer) {
        //   alert('Enter history_cancer...')
        //   return false;
        // }
        if (!this.type_of_treatment) {
            alert('Enter type_of_treatment...');
            return false;
        }
        if (!this.menstrual_status) {
            alert('Enter menstrual_status...');
            return false;
        }
        return true;
    }
    submit() {
        if (!this.patient_family_history_of_cancer) {
            var patient_family_history_of_cancer1 = 'No';
        }
        else {
            var patient_family_history_of_cancer1 = 'Yes';
        }
        if (this.validmess()) {
            this.loader.showLoader();
            let d = new Date(new Date(this.dob).getTime());
            d.setMonth(d.getMonth());
            this.date2 = d.toISOString().slice(0, 10);
            console.log(this.date2);
            var params = {
                user_id: this.logindata.id,
                image: this.Myimage,
                name: this.name,
                dob: this.date2,
                gender: this.gender,
                parent_occupation: this.parent_occupation,
                education_family_head: this.education_family_head,
                monthly_income: this.monthly_income,
                history_cancer: this.history_cancer,
                type_of_treatment: this.type_of_treatment,
                menstrual_status: this.menstrual_status,
                education: this.education,
                diganosis: this.diganosis,
                description: this.details,
                patient_family_history_of_cancer: patient_family_history_of_cancer1
            };
            console.log(params);
            this.service.adddemographicdata(params)
                .then((result) => this.setdemographicdata(result));
        }
    }
    setdemographicdata(result) {
        console.log(result);
        this.loader.dissmissLoader();
        if (result.ResponseCode == '1') {
            alert("Details successfully submitted");
        }
        else {
            alert(result.ResponseMsg);
        }
    }
};
DemographicAddPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ActionSheetController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ActionSheetController },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_5__.ServiceService },
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_4__.LoaderService },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__.FileTransfer }
];
DemographicAddPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-demographic-add',
        template: _raw_loader_demographic_add_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_demographic_add_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DemographicAddPage);



/***/ }),

/***/ 56068:
/*!***********************************************************!*\
  !*** ./src/app/demographic-add/demographic-add.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".backarrow {\n  color: #000;\n  font-size: 18px;\n  margin-left: 24px;\n}\n\n.heaertitle {\n  font-size: 15px;\n  font-weight: 500;\n  color: #000;\n  text-align: center;\n}\n\n.listpadd {\n  padding: 0 20px;\n}\n\n.cameraicon {\n  font-size: 48px;\n  color: #c0c0c0;\n  padding-right: 10px;\n}\n\n.itemclass {\n  background: #f7f8f8;\n  --background: #f7f8f8;\n  border-radius: 50px;\n  --border-radius: 50px;\n}\n\n.textaitemclass {\n  background: #f7f8f8;\n  --background: #f7f8f8;\n  border-radius: 20px;\n  --border-radius: 20px;\n  padding: 12px 0;\n}\n\n.iconcls {\n  font-size: 18px;\n  margin: 0px 10px 0px 0px;\n  color: #afafaf;\n}\n\n.ioninput {\n  background: #f7f8f8;\n  --background: #f7f8f8;\n  border-radius: 50px;\n  --border-radius: 50px;\n  font-size: 14px;\n  --font-size: 14px;\n  --padding-start: 8px;\n  width: 100%;\n}\n\n.toglebtn {\n  --handle-background-checked: #fff;\n  --background-checked: #ff9a98;\n  width: 40px;\n  height: 24px;\n  --handle-width: 18px;\n  --handle-height: 18px;\n}\n\n.textariya {\n  margin: 0px !important;\n  --padding-top:0px;\n  border-radius: 2px;\n  --border-radius: 2px;\n  --padding-start: 8px !important;\n}\n\n.Submitbtn {\n  text-transform: none;\n  --text-transform: none;\n  background: #ff9a98;\n  --background: #ff9a98;\n  color: #fff;\n  --color: #fff;\n  font-size: 16px;\n  --font-size: 16px;\n  border-radius: 50px;\n  --border-radius: 50px;\n  box-shadow: none;\n  --box-shadow: none;\n  font-weight: 500;\n  --font-weight: 500;\n  height: 40px;\n  --height: 40px;\n  width: 40%;\n  --width: 40%;\n  margin: auto;\n  display: table;\n}\n\n.profileimg {\n  border-radius: 15px;\n  margin: auto;\n  width: 34%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW9ncmFwaGljLWFkZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7QUFHSjs7QUFEQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFJSjs7QUFGQTtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBS0o7O0FBSEE7RUFDSSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFNSjs7QUFKQTtFQUNJLGVBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7QUFPSjs7QUFMQTtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FBUUo7O0FBTkE7RUFDSSxpQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBU0o7O0FBUEE7RUFDSSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLCtCQUFBO0FBVUo7O0FBUkE7RUFDSSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBV0o7O0FBVEE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBWUoiLCJmaWxlIjoiZGVtb2dyYXBoaWMtYWRkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrYXJyb3d7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xyXG59XHJcbi5oZWFlcnRpdGxle1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5saXN0cGFkZHtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxufVxyXG4uY2FtZXJhaWNvbntcclxuICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgIGNvbG9yOiAjYzBjMGMwO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG4uaXRlbWNsYXNze1xyXG4gICAgYmFja2dyb3VuZDogI2Y3ZjhmODtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y3ZjhmODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbn1cclxuLnRleHRhaXRlbWNsYXNze1xyXG4gICAgYmFja2dyb3VuZDogI2Y3ZjhmODtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y3ZjhmODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDA7XHJcbn1cclxuLmljb25jbHN7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW46IDBweCAxMHB4IDBweCAwcHg7XHJcbiAgICBjb2xvcjogI2FmYWZhZjtcclxufVxyXG4uaW9uaW5wdXR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjdmOGY4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjdmOGY4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIC0tZm9udC1zaXplOiAxNHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4udG9nbGVidG57XHJcbiAgICAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNmZmY7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogI2ZmOWE5ODtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgLS1oYW5kbGUtd2lkdGg6IDE4cHg7XHJcbiAgICAtLWhhbmRsZS1oZWlnaHQ6IDE4cHg7XHJcbn1cclxuLnRleHRhcml5YXtcclxuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctdG9wOjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHggIWltcG9ydGFudDtcclxufVxyXG4uU3VibWl0YnRue1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAtLXRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmOWE5ODtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmOWE5ODtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgLS1jb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIC0tZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgLS1mb250LXdlaWdodDogNTAwO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgLS1oZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgLS13aWR0aDogNDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuLnByb2ZpbGVpbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiAzNCU7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ 66208:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demographic-add/demographic-add.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"fullback\">\n\n  <div class=\"maindiv\">\n    <img src=\"assets/imgs/logo.png\" class=\"toplogo\" alt=\"\">\n\n    <div>\n      <div class=\"ht_45\"></div>\n      <ion-row>\n        <ion-col size=\"3\" class=\"vertical_centr\" (click)=\"backbutton()\">\n          <ion-icon name=\"chevron-back-outline\" class=\"backarrow\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"6\">\n          <div class=\"heaertitle\">Demographic Data</div>\n        </ion-col>\n        <ion-col size=\"3\"></ion-col>\n      </ion-row>\n      <div class=\"ht_60\"></div>\n    </div>\n\n    <div class=\"listpadd ion-text-right\" *ngIf=\"!Myimage\">\n      <ion-icon name=\"camera-outline\" class=\"cameraicon\" (click)=\"selectImage()\"></ion-icon>\n    </div>\n    <div class=\"listpadd ion-text-right\" *ngIf=\"Myimage\">\n      <img src=\"{{config.api}}{{Myimage}}\" class=\"profileimg\">\n    </div>\n    <div class=\"ht_10\"></div>\n   \n    <div class=\"ht_10\"></div>\n    <div class=\"listpadd\">\n      <ion-item class=\"itemclass\" lines=\"none\">\n        <ion-icon name=\"person-outline\" slot=\"start\" class=\"iconcls\"></ion-icon>\n        <ion-input [(ngModel)]=\"name\" class=\"ioninput\" placeholder=\"Name\" type=\"text\"></ion-input>\n      </ion-item>\n\n      <div class=\"ht_10\"></div>\n      <ion-item class=\"itemclass\" lines=\"none\">\n        <ion-icon name=\"calendar-outline\" slot=\"start\" class=\"iconcls\"></ion-icon>\n        <ion-datetime [(ngModel)]=\"dob\" class=\"ioninput\" placeholder=\"Date of Birth\" type=\"text\"></ion-datetime>\n      </ion-item>\n      <!--\n       <div class=\"ht_10\"></div>\n      <ion-item class=\"itemclass\" lines=\"none\">\n        <ion-icon name=\"people-outline\" slot=\"start\" class=\"iconcls\"></ion-icon>\n        <ion-input [(ngModel)]=\"history_cancer\" class=\"ioninput\" placeholder=\"History cancer\" type=\"text\"></ion-input>\n      </ion-item>-->\n\n      <div class=\"ht_10\"></div>\n      <ion-item class=\"itemclass\" lines=\"none\">\n        <ion-icon name=\"people-outline\" slot=\"start\" class=\"iconcls\"></ion-icon>\n        <ion-select class=\"ioninput\" placeholder=\"Choose Gender\" [(ngModel)]=\"gender\">\n          <ion-select-option value=\"Male\">Male</ion-select-option>\n          <ion-select-option value=\"Female\">Female</ion-select-option>\n          <ion-select-option value=\"Other\">Other</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <div class=\"ht_10\"></div>\n      <ion-item class=\"itemclass\" lines=\"none\">\n        <ion-icon name=\"grid-outline\" slot=\"start\" class=\"iconcls\"></ion-icon>\n        <ion-select class=\"ioninput\" placeholder=\"Education\" [(ngModel)]=\"education\">\n          <ion-select-option value=\"School\">School</ion-select-option>\n          <ion-select-option value=\"College\">College</ion-select-option>\n          <ion-select-option value=\"School dropout\">School dropout</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <div class=\"ht_10\"></div>\n      <ion-item class=\"itemclass\" lines=\"none\" >\n        <ion-icon name=\"grid-outline\" slot=\"start\" class=\"iconcls\"></ion-icon>\n        <ion-select class=\"ioninput\" placeholder=\"Parent occupation\" [(ngModel)]=\"parent_occupation\">\n          <ion-select-option *ngFor=\"let p of pc\"  value=\"{{p.id}}\">{{p.name}}</ion-select-option>\n          <!-- <ion-select-option value=\"Elementary Occupation\">Elementary Occupation</ion-select-option>\n          <ion-select-option value=\"Plant & Machine Operators and Assemblers\">Plant & Machine Operators and Assemblers</ion-select-option>\n          <ion-select-option value=\"Craft & Related Trade Workers\">Craft & Related Trade Workers</ion-select-option>\n          <ion-select-option value=\"Skilled Agricultural & Fishery Workers\">Skilled Agricultural & Fishery Workers</ion-select-option>\n          <ion-select-option value=\"Skilled Workers and Shop & Market Sales Workers\">Skilled Workers and Shop & Market Sales Workers</ion-select-option>\n          <ion-select-option value=\"Clerks\">Clerks </ion-select-option>\n          <ion-select-option value=\"Technicians and Associate Professionals\">Technicians and Associate Professionals </ion-select-option>\n          <ion-select-option value=\"Professionals\">Professionals </ion-select-option> -->\n        </ion-select>\n      </ion-item>\n\n      <div class=\"ht_10\"></div>\n      <ion-item class=\"itemclass\" lines=\"none\">\n        <ion-icon name=\"grid-outline\" slot=\"start\" class=\"iconcls\"></ion-icon>\n        <ion-select class=\"ioninput\" placeholder=\"Education of the family head\" [(ngModel)]=\"education_family_head\">\n          <ion-select-option *ngFor=\"let f of ducationf\" value=\"{{f.id}}\">{{f.name}}</ion-select-option>\n          <!-- <ion-select-option value=\"Primary school certificate\">Primary school certificate</ion-select-option>\n          <ion-select-option value=\"Middle school certificate\">Middle school certificate</ion-select-option>\n          <ion-select-option value=\"High school certificate\">High school certificate</ion-select-option>\n          <ion-select-option value=\"Intermediate or diploma\">Intermediate or diploma</ion-select-option>\n          <ion-select-option value=\"Graduate\">Graduate</ion-select-option>\n          <ion-select-option value=\"Profession or Honours\">Profession or Honours</ion-select-option> -->\n        </ion-select>\n      </ion-item>\n\n      <div class=\"ht_10\"></div>\n      <ion-item class=\"itemclass\" lines=\"none\">\n        <ion-icon name=\"grid-outline\" slot=\"start\" class=\"iconcls\"></ion-icon>\n        <ion-select class=\"ioninput\" placeholder=\"Monthly income of the family\" [(ngModel)]=\"monthly_income\">\n          <ion-select-option  *ngFor=\"let m of monthlyincome\" value=\"{{m.id}}\">{{m.name}}</ion-select-option>\n          <!-- <ion-select-option value=\"6k-18k\">6k-18k</ion-select-option>\n          <ion-select-option value=\"18k–30k\">18k–30k</ion-select-option>\n          <ion-select-option value=\"31k–46k\">31k–46k</ion-select-option>\n          <ion-select-option value=\"46k-61k\">46k-61k</ion-select-option>\n          <ion-select-option value=\"61k–1L\">61k–1L</ion-select-option>\n          <ion-select-option value=\"Above 1L\">Above 1L</ion-select-option> -->\n        </ion-select>\n      </ion-item>\n\n      <div class=\"ht_10\"></div>\n      <ion-item class=\"itemclass\" lines=\"none\">\n        <ion-icon name=\"grid-outline\" slot=\"start\" class=\"iconcls\"></ion-icon>\n        <ion-select class=\"ioninput\" placeholder=\"Diganosis\" [(ngModel)]=\"diganosis\">\n          <ion-select-option *ngFor=\"let d of getdiganosi\" value=\"{{d.id}}\">{{d.name}}</ion-select-option>\n          <!-- <ion-select-option value=\"Brain & spinal cord tumour\">Brain & spinal cord tumour</ion-select-option>\n          <ion-select-option value=\"Neuroblastoma\">Neuroblastoma</ion-select-option>\n          <ion-select-option value=\"Wilms tumor\">Wilms tumor</ion-select-option>\n          <ion-select-option value=\"lymphoma (include hodgkin and non hodgkin)\">lymphoma (include hodgkin and non hodgkin)</ion-select-option>\n          <ion-select-option value=\"Rhabdomyosacroma\">Rhabdomyosacroma</ion-select-option>\n          <ion-select-option value=\"Retinoblastoma\">Retinoblastoma</ion-select-option>\n          <ion-select-option value=\"Bone cancer ( include osteoscarcoma & ewing scarcoma )\">Bone cancer ( include osteoscarcoma & ewing scarcoma )</ion-select-option> -->\n        </ion-select>\n      </ion-item>\n\n      <div class=\"ht_10\"></div>\n      <ion-item class=\"itemclass\" lines=\"none\">\n        <ion-icon name=\"grid-outline\" slot=\"start\" class=\"iconcls\"></ion-icon>\n        <ion-label style=\"color:#afafaf;font-size:14px;padding-left:8px;\">Patient family history of cancer</ion-label>\n        <ion-toggle slot=\"end\" [checked]=\"true\" [(ngModel)]=\"patient_family_history_of_cancer\" class=\"toglebtn\"></ion-toggle>\n      </ion-item>\n\n      <div class=\"ht_10\"></div>\n      <ion-item class=\"textaitemclass\" lines=\"none\">\n        <ion-icon name=\"grid-outline\" slot=\"start\" class=\"iconcls\"></ion-icon>\n        <ion-textarea class=\"ioninput textariya\" placeholder=\"Details\" type=\"text\" rows=\"6\" [(ngModel)]=\"details\"></ion-textarea>\n      </ion-item>\n\n      <div class=\"ht_10\"></div>\n      <ion-item class=\"itemclass\" lines=\"none\">\n        <ion-icon name=\"grid-outline\" slot=\"start\" class=\"iconcls\"></ion-icon>\n        <ion-select class=\"ioninput\" placeholder=\"Type of treatment\" [(ngModel)]=\"type_of_treatment\">\n          <ion-select-option *ngFor=\"let d of type_of_treatment_data\" value=\"{{d.id}}\">{{d.name}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <div class=\"ht_10\"></div>\n      <ion-item class=\"itemclass\" lines=\"none\">\n        <ion-icon name=\"grid-outline\" slot=\"start\" class=\"iconcls\"></ion-icon>\n        <ion-select class=\"ioninput\" placeholder=\"Menstrual status\" [(ngModel)]=\"menstrual_status\">\n          <ion-select-option *ngFor=\"let d of menstrual_status_data\" value=\"{{d.id}}\">{{d.name}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <div class=\"ht_20\"></div>\n      <ion-button class=\"Submitbtn\" (click)=\"submit()\">Submit</ion-button>\n      <div class=\"ht_50\"></div>\n    </div>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_demographic-add_demographic-add_module_ts.js.map