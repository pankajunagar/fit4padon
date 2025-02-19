(self["webpackChunkCCS"] = self["webpackChunkCCS"] || []).push([["src_app_food-add_food-add_module_ts"],{

/***/ 20639:
/*!*****************************************************!*\
  !*** ./src/app/food-add/food-add-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FoodAddPageRoutingModule": () => (/* binding */ FoodAddPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _food_add_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food-add.page */ 53962);




const routes = [
    {
        path: '',
        component: _food_add_page__WEBPACK_IMPORTED_MODULE_0__.FoodAddPage
    }
];
let FoodAddPageRoutingModule = class FoodAddPageRoutingModule {
};
FoodAddPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FoodAddPageRoutingModule);



/***/ }),

/***/ 23744:
/*!*********************************************!*\
  !*** ./src/app/food-add/food-add.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FoodAddPageModule": () => (/* binding */ FoodAddPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _food_add_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food-add-routing.module */ 20639);
/* harmony import */ var _food_add_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food-add.page */ 53962);







let FoodAddPageModule = class FoodAddPageModule {
};
FoodAddPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _food_add_routing_module__WEBPACK_IMPORTED_MODULE_0__.FoodAddPageRoutingModule
        ],
        declarations: [_food_add_page__WEBPACK_IMPORTED_MODULE_1__.FoodAddPage]
    })
], FoodAddPageModule);



/***/ }),

/***/ 53962:
/*!*******************************************!*\
  !*** ./src/app/food-add/food-add.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FoodAddPage": () => (/* binding */ FoodAddPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_food_add_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./food-add.page.html */ 52226);
/* harmony import */ var _food_add_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food-add.page.scss */ 31287);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ 16527);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loader.service */ 98077);
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service.service */ 59353);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 84267);
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ 97905);











let FoodAddPage = class FoodAddPage {
    constructor(alertController, navCtrl, service, router, config, loader, routers, camera, transfer, actionSheetController) {
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.service = service;
        this.router = router;
        this.config = config;
        this.loader = loader;
        this.routers = routers;
        this.camera = camera;
        this.transfer = transfer;
        this.actionSheetController = actionSheetController;
        const now = new Date();
        const isoTime = now.toISOString(); // extract time part (HH:mm)
        this.currentDate = isoTime;
        var today = new Date();
        this.minimum = today.getHours() + ":" + today.getMinutes();
        console.log('mini time =>>> ', this.minimum);
        this.logindata = JSON.parse(localStorage.getItem("ccs_login"));
        console.log(this.logindata);
        this.displydata = '0';
        this.chkid = [];
        // this.router.queryParams.subscribe(params => {
        //   if (this.routers.getCurrentNavigation().extras.state) {
        this.food_data = this.routers.getCurrentNavigation().extras.state.food_data;
        console.log(this.food_data);
        this.child_data = this.routers.getCurrentNavigation().extras.state.child_data;
        console.log(this.child_data);
        this.alldata = this.routers.getCurrentNavigation().extras.state.all_data;
        console.log(this.alldata);
        this.getfood(this.child_data);
        if (this.alldata) {
            console.log('11111111111111');
            this.ftime = this.alldata.time;
            this.qty = this.alldata.qty;
            this.datadate = this.alldata.date;
            this.other_foods = this.alldata.other_foods;
            this.Myimage = this.alldata.photo;
            this.Datesave = new Date(this.datadate);
        }
        else {
            this.Datesave = new Date();
        }
        console.log(this.Datesave);
        this.Dateshow = this.DateSets(this.Datesave);
        this.datedis = this.DateSet(this.Datesave);
        this.datedi = this.DateSetd(this.Datesave);
        // }
        // });
    }
    ngOnInit() {
    }
    ;
    backbutton() {
        console.log('back');
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
        console.log('sourchtype=>> ', sourceType);
        const options = {
            quality: 100,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.PNG,
            mediaType: this.camera.MediaType.PICTURE,
            targetHeight: 500,
            targetWidth: 500,
        };
        console.log('option=>> ', options);
        this.camera.getPicture(options).then((imageData) => {
            console.log('under==>> ', imageData);
            let base64Image = 'data:image/png;base64,' + imageData;
            this.croppedImagePath = base64Image;
            console.log('cropedimg==> ', this.croppedImagePath);
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
    detail(data) {
        this.navCtrl.navigateForward(['/detail', data]);
    }
    DateSets(td) {
        console.log(td);
        this.apidate = td.getFullYear().toString().slice(-4) + '-' + ('0' + (td.getMonth() + 1).toString().slice(-2)) + '-' + ('0' + td.getDate().toString()).slice(-2);
        console.log(this.apidate);
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return months[td.getMonth()] + ' ' + (td.getFullYear().toString()).slice(-4);
    }
    DateSet(td) {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        this.dayago = days[td.getDay() - 1];
        this.dayafter = days[td.getDay() + 1];
        return days[td.getDay()];
    }
    DateSetd(td) {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        this.mindate = td.getDate().toString() - 1;
        this.maxdate = (td.getDate() + 1).toString();
        return ('0' + td.getDate().toString()).slice(-2);
    }
    DateChange(inx) {
        this.Datesave.setDate(this.Datesave.getDate() + inx);
        this.Dateshow = this.DateSets(this.Datesave);
        this.datedis = this.DateSet(this.Datesave);
        this.datedi = this.DateSetd(this.Datesave);
    }
    getfood(cid) {
        var params = {
            user_id: this.logindata.id,
            child_id: cid
        };
        console.log(params);
        this.service.getfood(params)
            .then((results) => this.setgetfood(results));
    }
    setgetfood(res) {
        console.log('setgetfood=> ', res);
        if (res.ResponseCode == '1') {
            this.foods = res.data;
            console.log(this.foods);
            console.log(this.food_data);
            for (var x = 0; x < this.foods.length; x++) {
                if (this.food_data == this.foods[x].id) {
                    this.food = this.foods[x].food;
                    console.log(this.food);
                }
            }
        }
    }
    chk(data) {
        this.chkid = data;
        console.log(this.chkid);
        // if (!this.chkid.includes(data)) {
        //   this.chkid.push(data)
        //   console.log(this.chkid.length)
        // }
    }
    valid() {
        if (!this.ftime) {
            alert('Please Select Time..');
            return false;
        }
        this.options = { hour: 'numeric', minute: 'numeric', hour12: true };
        this.currentTime = new Date().toLocaleTimeString('en-US', this.options);
        console.log(this.ftime);
        let d = this.ftime.split('T')[1];
        let m = d.split(':')[0];
        let n = d.split(':')[1];
        var AmOrPm = m >= 12 ? 'PM' : 'AM';
        m = (m % 12) || 12;
        this.tm = m + ":" + n + AmOrPm;
        console.log(this.currentTime.slice(-2), this.tm.slice(-2), this.currentTime.slice(0, 1), m);
        /*
            if (this.currentTime.slice(-2) != this.tm.slice(-2)) {
              alert('Please select ' + this.currentTime.slice(-2) + '..')
              return false
            }
            **/
        /*
        if (this.currentTime.slice(0, 1) > m) {
          alert('Please select valid hours...')
          return false
        }
        */
        if (!this.qty) {
            alert('Please Enter Quantity..');
            return false;
        }
        return true;
    }
    add() {
        if (this.valid()) {
            var params = {
                user_id: this.logindata.id,
                fdate: this.apidate,
                ftime: this.ftime,
                food: this.chkid,
                qty: this.qty,
                child_id: this.child_data,
                other_foods: this.other_foods,
                photo: this.Myimage
            };
            console.log(params);
            this.service.addfood_details(params)
                .then((results) => this.setaddfood_details(results));
        }
    }
    setaddfood_details(res) {
        console.log('setgetfood=> ', res);
        if (res.ResponseCode == '1') {
            alert("Details successfully submitted");
            this.navCtrl.navigateBack('/fmonitoring');
        }
    }
    editfood_details() {
        if (this.valid()) {
            var params = {
                id: this.alldata.id,
                fdate: this.apidate,
                ftime: this.ftime,
                food: this.food_data,
                qty: this.qty,
                other_foods: this.other_foods,
                photo: this.Myimage
            };
            console.log(params);
            this.service.editfood_details(params)
                .then((results) => this.setaddfood_details(results));
        }
    }
};
FoodAddPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_4__.ServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService },
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__.Camera },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__.FileTransfer },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ActionSheetController }
];
FoodAddPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-food-add',
        template: _raw_loader_food_add_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_food_add_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FoodAddPage);



/***/ }),

/***/ 31287:
/*!*********************************************!*\
  !*** ./src/app/food-add/food-add.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".backarrow {\n  color: #000;\n  font-size: 18px;\n  margin-left: 24px;\n}\n\n.heaertitle {\n  font-size: 15px;\n  font-weight: 500;\n  color: #000;\n  text-align: center;\n}\n\n.listpadd {\n  padding: 0 14px;\n}\n\n.foodimgs {\n  width: 60px;\n  height: 60px;\n  border-radius: 14px;\n}\n\n.foodname {\n  font-size: 15px;\n  color: #000;\n  font-weight: 400;\n  padding-top: 6px;\n}\n\n.playcercul {\n  font-size: 24px;\n  color: #888888;\n}\n\n.listpadd {\n  padding: 0 20px;\n}\n\n.cameraicon {\n  font-size: 48px;\n  color: #c0c0c0;\n  padding-right: 10px;\n}\n\n.profileimg {\n  border-radius: 15px;\n  margin: auto;\n  width: 100px;\n  height: 100px;\n}\n\n.fm {\n  color: #fff;\n  --background: #ff9a98;\n  padding: 8px;\n  border-radius: 30px;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 4px;\n  font-size: 12px;\n}\n\n.titlehednm {\n  font-size: 15px;\n  color: #000;\n}\n\n.datespan {\n  font-size: 14px;\n  color: #888888;\n  padding: 0 50px;\n}\n\n.privios {\n  transform: rotate(180deg);\n}\n\n.playicon {\n  font-size: 16px;\n  color: #888888;\n}\n\n.dyvday {\n  text-align: center;\n  padding: 5px 0;\n}\n\n.dyvdate {\n  text-align: center;\n  padding: 5px 0;\n}\n\n.datenormals {\n  color: #858585;\n  font-size: 14px;\n  background: #fff;\n  padding: 10px 0;\n  border-radius: 14px;\n}\n\n.datemailsiv {\n  color: #fff;\n  font-size: 15px;\n  background: linear-gradient(135deg, #9bbdfe 24%, #93a9fd 60%);\n  padding: 10px 0;\n  border-radius: 14px;\n}\n\n.itemclass {\n  background: #f7f8f8;\n  --background: #f7f8f8;\n  border-radius: 50px;\n  --border-radius: 50px;\n  --min-height: 42px !important;\n}\n\n.timepicker {\n  background: #f7f8f8;\n  --background: #f7f8f8;\n  border-radius: 50px;\n  --border-radius: 50px;\n  font-size: 16px;\n  --font-size: 16px;\n  --padding-start: 8px;\n  width: 100%;\n  text-align: center;\n  letter-spacing: 4px;\n  color: #969696;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb2QtYWRkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSw2REFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUNKIiwiZmlsZSI6ImZvb2QtYWRkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrYXJyb3cge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjRweDtcclxufVxyXG5cclxuLmhlYWVydGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubGlzdHBhZGQge1xyXG4gICAgcGFkZGluZzogMCAxNHB4O1xyXG59XHJcblxyXG4uZm9vZGltZ3Mge1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG59XHJcblxyXG4uZm9vZG5hbWUge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgcGFkZGluZy10b3A6IDZweDtcclxufVxyXG5cclxuLnBsYXljZXJjdWwge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgY29sb3I6ICM4ODg4ODg7XHJcbn1cclxuXHJcbi5saXN0cGFkZCB7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbn1cclxuXHJcbi5jYW1lcmFpY29uIHtcclxuICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgIGNvbG9yOiAjYzBjMGMwO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuLnByb2ZpbGVpbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbi5mbSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmOWE5ODtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi50aXRsZWhlZG5tIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4uZGF0ZXNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICM4ODg4ODg7XHJcbiAgICBwYWRkaW5nOiAwIDUwcHg7XHJcbn1cclxuXHJcbi5wcml2aW9zIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbn1cclxuXHJcbi5wbGF5aWNvbiB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzg4ODg4ODtcclxufVxyXG5cclxuLmR5dmRheSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxufVxyXG5cclxuLmR5dmRhdGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbn1cclxuXHJcbi5kYXRlbm9ybWFscyB7XHJcbiAgICBjb2xvcjogIzg1ODU4NTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG59XHJcblxyXG4uZGF0ZW1haWxzaXYge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjOWJiZGZlIDI0JSwgIzkzYTlmZCA2MCUpO1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxufVxyXG5cclxuLml0ZW1jbGFzcyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjdmOGY4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjdmOGY4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIC0tbWluLWhlaWdodDogNDJweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGltZXBpY2tlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjdmOGY4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjdmOGY4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIC0tZm9udC1zaXplOiAxNnB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgICBjb2xvcjogIzk2OTY5NjtcclxufSJdfQ== */");

/***/ }),

/***/ 52226:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/food-add/food-add.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"fullback\">\n\n  <div class=\"maindiv\">\n    <img src=\"assets/imgs/logo.png\" class=\"toplogo\" alt=\"\">\n\n    <div>\n      <div class=\"ht_45\"></div>\n      <ion-row>\n        <ion-col size=\"3\" class=\"vertical_centr\" (click)=\"backbutton()\">\n          <ion-icon name=\"chevron-back-outline\" class=\"backarrow\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"6\">\n          <div class=\"heaertitle\">Food Add details</div>\n        </ion-col>\n        <ion-col size=\"3\"></ion-col>\n      </ion-row>\n      <div class=\"ht_50\"></div>\n    </div>\n\n    <div class=\"listpadd\">\n      <div class=\"titlehednm\">Select Date</div>\n      <div class=\"ht_20\"></div>\n      <ion-row class=\"listpadd\">\n        <ion-col size=\"3\" class=\"vertical_centr\">\n          <div class=\"datebuttonback vertical_centr\" (click)=\"DateChange(-1)\">\n            <ion-icon name=\"play-outline\" class=\"datenext dateback\"></ion-icon>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" class=\"ion-no-padding vertical_centr\">\n          <div class=\"fridejune\">{{Dateshow}}</div>\n        </ion-col>\n        <ion-col size=\"3\" class=\"vertical_centr\">\n          <div class=\"datebuttonback vertical_centr\" (click)=\"DateChange(+1)\">\n            <ion-icon name=\"play-outline\" class=\"datenext\"></ion-icon>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <div class=\"datenormals\">\n            <div class=\"dyvday\">{{dayago}}</div>\n            <div class=\"dyvdate\">{{mindate}}</div>\n          </div>\n        </ion-col>\n        <ion-col size=\"4\">\n          <div class=\"datemailsiv\">\n            <div class=\"dyvday\">{{datedis}}</div>\n            <div class=\"dyvdate\">{{datedi}}</div>\n          </div>\n        </ion-col>\n        <ion-col size=\"4\">\n          <div class=\"datenormals\">\n            <div class=\"dyvday\">{{dayafter}}</div>\n            <div class=\"dyvdate\">{{maxdate}}</div>\n          </div>\n        </ion-col>\n      </ion-row>\n      <div class=\"ht_20\"></div>\n      <div class=\"titlehednm\">Select Time</div>\n      <div class=\"ht_20\"></div>\n      <ion-item class=\"itemclass\" lines=\"none\">\n         <ion-datetime [(ngModel)]=\"ftime\" placeholder=\"Select time\" presentation=\"time\" class=\"timepicker\"\n          displayFormat=\"h mm A\" pickerFormat=\"h mm A\" value=\"01:00\">x\n        </ion-datetime> \n        <!--<ion-datetime display-format=\"HH:mm\" class=\"timepicker\" placeholder=\"Select time\" [min]=\"minimum\"\n          presentation=\"time\" value=\"{{currentDate}}\"></ion-datetime>-->\n      </ion-item>\n      <div class=\"ht_20\"></div>\n      <div class=\"titlehednm\">Select Food</div>\n      <div class=\"ht_20\"></div>\n      <div *ngIf=\"food_data.food == ''\" style=\"text-align: center;color: gray;font-size: 18px;\">Not any Data</div>\n      <ion-radio-group *ngIf=\"!alldata\">\n        <ion-row *ngFor=\"let f of food;let i=index;\" style=\"padding: 6px;\">\n          <ion-col (click)=\"detail(f)\" size=\"3\" class=\"ion-no-padding\">\n            <img src=\"{{config.imgpdf}}{{f.icon}}\" class=\"foodimgs\">\n          </ion-col>\n          <ion-col size=\"8\" (click)=\"detail(f)\">\n            <div class=\"foodname\">{{f.name}}</div>\n            <!-- <div style=\"color: gray;font-size: 12px;\">{{f.nutrition}}</div>   -->\n            <div style=\"color: gray;font-size: 12px;\">{{f.food_weight}}</div>\n          </ion-col>\n          <ion-col size=\"1\" class=\"ion-no-padding vertical_centrC\">\n            <!-- <ion-checkbox (click)=\"chk(f.id)\"></ion-checkbox> -->\n            <ion-radio (click)=\"chk(f.id)\"></ion-radio>\n          </ion-col>\n        </ion-row>\n      </ion-radio-group>\n\n      <ion-radio-group *ngIf=\"alldata\" value=\"selectdata\">\n        <ion-row style=\"padding: 6px;\">\n          <ion-col size=\"3\" class=\"ion-no-padding\">\n            <img src=\"{{config.imgapi}}{{alldata.icon}}\" class=\"foodimgs\">\n          </ion-col>\n          <ion-col size=\"8\">\n            <div class=\"foodname\">{{alldata.name}}</div>\n            <div style=\"color: gray;font-size: 12px;\">{{alldata.nutrition}}</div>\n            <div style=\"color: gray;font-size: 12px;\">{{alldata.food_weight}}</div>\n          </ion-col>\n          <ion-col size=\"1\" class=\"ion-no-padding vertical_centrC\">\n            <!-- <ion-checkbox (click)=\"chk(f.id)\"></ion-checkbox> -->\n            <ion-radio value=\"selectdata\"></ion-radio>\n          </ion-col>\n        </ion-row>\n      </ion-radio-group>\n      <!-- <ion-row>\n        <ion-col size=\"3\" class=\"ion-no-padding\">\n          <img src=\"assets/imgs/coffee.png\" class=\"foodimgs\">\n        </ion-col>\n        <ion-col size=\"8\" (click)=\"detail()\">\n          <div class=\"foodname\">Coffee</div>\n        </ion-col>\n        <ion-col size=\"1\" class=\"ion-no-padding vertical_centrC\">\n          <ion-icon name=\"play-circle-outline\" class=\"playcercul\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <div class=\"ht_10\"></div>\n      <ion-row>\n        <ion-col size=\"3\" class=\"ion-no-padding\">\n          <img src=\"assets/imgs/milk.png\" class=\"foodimgs\">\n        </ion-col>\n        <ion-col size=\"8\" (click)=\"detail()\">\n          <div class=\"foodname\">Milk</div>\n        </ion-col>\n        <ion-col size=\"1\" class=\"ion-no-padding vertical_centrC\">\n          <ion-icon name=\"play-circle-outline\" class=\"playcercul\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <div class=\"ht_10\"></div>\n      <ion-row>\n        <ion-col size=\"3\" class=\"ion-no-padding\">\n          <img src=\"assets/imgs/orange.png\" class=\"foodimgs\">\n        </ion-col>\n        <ion-col size=\"8\" (click)=\"detail()\">\n          <div class=\"foodname\">Orange</div>\n        </ion-col>\n        <ion-col size=\"1\" class=\"ion-no-padding vertical_centrC\">\n          <ion-icon name=\"play-circle-outline\" class=\"playcercul\"></ion-icon>\n        </ion-col>\n      </ion-row> -->\n      <div class=\"ht_20\"></div>\n      <ion-row>\n        <ion-col size=\"12\" style=\"border: 1px solid #e7e3e3;\n        border-radius: 18px;\n        background-color: #e7e7e7;\">\n          <ion-textarea style=\"border: 1px solid #e7e3e3;\n            border-radius: 18px;\n            background-color: #e7e7e7;\" [(ngModel)]=\"other_foods\" placeholder=\"Type something here\"></ion-textarea>\n        \n        </ion-col>\n      </ion-row>\n\n\n      <div class=\"ht_20\"></div>\n      <div *ngIf=\"!Myimage\">\n        <ion-icon name=\"camera-outline\" class=\"cameraicon\" (click)=\"selectImage()\"></ion-icon>\n      </div>\n      <div *ngIf=\"Myimage\">\n        <img src=\"{{config.api}}{{Myimage}}\" class=\"profileimg\">\n      </div>\n      <div class=\"ht_10\"></div>\n      <div class=\"ht_20\"></div>\n      <div class=\"ht_20\"></div>\n      <div class=\"titlehednm\">Add   </div>\n      <div class=\"ht_20\"></div>\n\n      <ion-row>\n        <ion-col size=\"8\" style=\"border: 1px solid #e7e3e3;\n        border-radius: 18px;\n        background-color: #e7e7e7;\">\n          <ion-input [(ngModel)]=\"qty\" type=\"text\"></ion-input>\n        </ion-col>\n        <ion-col size=\"4\" (click)=\"add()\" *ngIf=\"!alldata\">\n          <ion-button class=\"fm\">Add</ion-button>\n        </ion-col>\n        <ion-col size=\"4\" (click)=\"editfood_details()\" *ngIf=\"alldata\">\n          <ion-button class=\"fm\">Edit</ion-button>\n        </ion-col>\n      </ion-row>\n\n    </div>\n    <div class=\"ht_20\"></div>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_food-add_food-add_module_ts.js.map