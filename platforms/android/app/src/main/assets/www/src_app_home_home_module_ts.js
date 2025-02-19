(self["webpackChunkCCS"] = self["webpackChunkCCS"] || []).push([["src_app_home_home_module_ts"],{

/***/ 52003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 62267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 52003);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 62267);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule,
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 62267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 49764);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 74287);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ 16527);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loader.service */ 98077);
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service.service */ 59353);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 39075);










let HomePage = class HomePage {
    constructor(alertController, sanitizer, navCtrl, service, router, config, loader) {
        this.alertController = alertController;
        this.sanitizer = sanitizer;
        this.navCtrl = navCtrl;
        this.service = service;
        this.router = router;
        this.config = config;
        this.loader = loader;
        this.config.refresh();
        this.logindata = JSON.parse(localStorage.getItem("ccs_login"));
        console.log(this.logindata);
        this.data = [
            { id: "1", name: "Demographic Data", user: "Swetha | 12yrs | Female", imgs: "assets/imgs/demografy.png" },
            { id: "2", name: "Anthropomentry data", user: "Swetha | 124CM | 42KG", imgs: "assets/imgs/antropor.png" },
        ];
        this.getdemographicdata();
        this.getcategory();
        // this.getimagesvideos()
        this.getfood_details();
        this.notifications();
    }
    ionViewWillEnter() {
        this.getdemographicdata();
    }
    ngOnInit() {
        console.log('2222222222');
        console.log('Home Page');
    }
    ;
    demographic() {
        console.log('graphicsdata=>', this.graphicsdata);
        this.navCtrl.navigateForward('/demographic');
    }
    ;
    anthrophic() {
        this.navCtrl.navigateForward('/anthropometry');
    }
    DietHistrory() {
        this.navCtrl.navigateForward('/diet-history');
    }
    ;
    notification() {
        this.navCtrl.navigateForward('/notification');
    }
    download() {
        this.navCtrl.navigateForward('/download');
    }
    gallery() {
        this.navCtrl.navigateForward('/gallery');
    }
    earlymorning() {
        this.navCtrl.navigateForward('/fmonitoring');
    }
    fmonitoring() {
        this.navCtrl.navigateForward('/fmonitoring');
    }
    FoodAdd() {
        this.navCtrl.navigateForward('/food-add');
    }
    ;
    play(id) {
        this.play_video = id;
    }
    getcanfig() {
        this.loader.showLoader();
        this.service.getcanfig()
            .then((results) => this.setconfig(results));
    }
    setconfig(res) {
        this.loader.dissmissLoader();
        console.log('getconfig=> ', res);
    }
    profile() {
        this.navCtrl.navigateForward('/profile');
    }
    getdemographicdata() {
        this.loader.showLoader();
        var params = {
            user_id: this.config.logindata.id
        };
        console.log(params);
        this.service.getdemographicdata(params)
            .then((result) => this.setdemographicdata(result));
    }
    setdemographicdata(res) {
        console.log('setdemographicdata=> ', res);
        this.loader.dissmissLoader();
        if (res.ResponseCode == '1') {
            this.chiddata = res.data;
            console.log('chiddata===>>', this.chiddata);
            for (var j = 0; j < this.chiddata.length; j++) {
                console.log('================', this.chiddata[j].id);
                this.getdatewisefood(this.chiddata[j].id);
            }
            this.graphics = res.data.reverse();
            this.graphicsdata = this.graphics[0];
            this.gname = this.graphicsdata.name;
            this.gimage = this.graphicsdata.image;
            this.biochemical = this.graphicsdata.biochemical;
            this.clinical = this.graphicsdata.clinical;
            console.log('graphicsdata=>', this.gname);
        }
    }
    getcategory() {
        this.loader.showLoader();
        this.service.getcategory()
            .then((result) => this.setgetcategory(result));
    }
    setgetcategory(res) {
        console.log('setgetcategory ===> ', res);
        this.loader.dissmissLoader();
        if (res.ResponseCode == '1') {
            this.category = res.data;
            console.log(this.category);
        }
    }
    getimagesvideos() {
        this.loader.showLoader();
        this.service.getimagesvideos()
            .then((results) => this.setimagesvideos(results));
    }
    setimagesvideos(results) {
        console.log('setimagesvideos=> ', results);
        this.loader.dissmissLoader();
        if (results.ResponseCode == '1') {
            this.images = results.images;
            this.videos = results.videos;
            this.typesof = this.videos[1].url;
            console.log('img=> ', this.images);
            console.log('video=> ', this.videos);
            console.log('typesof=> ', this.typesof);
            // this.video_id = this.typesof.split('v=')[1];
            // var ampersandPosition = this.video_id.indexOf('&');
            // console.log(ampersandPosition)
            // if (ampersandPosition != -1) {
            //   this.video_id = 'https://www.youtube.com/embed/' + this.video_id.substring(0, ampersandPosition);
            // }
            // console.log(this.video_id)
            // var video_id = this.typesof.split("v=")[1].substring(0, 11)
            // this.video_id = 'https://www.youtube.com/embed/' + video_id;
            // console.log(this.video_id)
            // this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.video_id);
            // console.log(this.safeSrc)
        }
        else {
        }
    }
    updateVideoUrl(url) {
        this.video_id = url.split('v=')[1];
        var ampersandPosition = this.video_id.indexOf('&');
        // console.log(ampersandPosition)
        if (ampersandPosition != -1) {
            this.video_id = 'https://www.youtube.com/embed/' + this.video_id.substring(0, ampersandPosition);
        }
        this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.video_id);
        // console.log(this.safeSrc)
        return this.safeSrc;
    }
    getfood_details() {
        this.loader.showLoader();
        var params = {
            user_id: this.logindata.id
        };
        console.log(params);
        this.service.getfood_details(params)
            .then((result) => this.setgetfood_details(result));
    }
    setgetfood_details(res) {
        console.log('setgetfood_details=> ', res);
        this.loader.dissmissLoader();
        if (res.ResponseCode == '1') {
        }
    }
    notifications() {
        var params = {
            user_id: this.logindata.id
        };
        this.loader.showLoader();
        this.service.getnotification(params)
            .then((results) => this.setnoti(results));
    }
    setnoti(res) {
        this.loader.dissmissLoader();
        console.log('getconfig=> ', res);
        if (res.ResponseCode == '1') {
            this.noti = res.data;
            console.log(this.noti);
        }
    }
    getdatewisefood(cid) {
        const date = new Date();
        console.log(date);
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        this.fdate = year + '-' + month + '-' + day;
        var params = {
            user_id: this.logindata.id,
            fdate: this.fdate,
            child_id: cid
        };
        console.log(params);
        this.service.getdatewisefood(params)
            .then((results) => this.setdatewisefood(results));
    }
    setdatewisefood(res) {
        console.log('setgetfood=> ', res);
        if (res.ResponseCode == '0') {
            this.displydata = '0';
        }
        if (res.ResponseCode == '1') {
            this.datedata = res.data;
            console.log(this.datedata);
            this.displydata = '1';
        }
        else {
            this.displydata = '0';
        }
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_4__.ServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService },
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 74287:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".maindiv {\n  background: #fff;\n  border-radius: 40px;\n}\n\n.dotlogos {\n  margin-left: 10px;\n}\n\n.pagepadd {\n  padding: 0px 20px;\n}\n\n.wecomdiv {\n  font-size: 13px;\n  color: #929292;\n}\n\n.username {\n  font-size: 16px;\n  color: #000;\n  padding-top: 6px;\n}\n\n.cildwood {\n  font-size: 15px;\n  color: #000;\n  font-weight: 400;\n  padding-left: 3px;\n}\n\n.MaincardRow {\n  border-radius: 16px;\n  background: linear-gradient(135deg, #f1f2fa 24%, #fdecec 60%);\n}\n\n.Demographic {\n  font-size: 15px;\n  color: #000;\n  padding: 8px 0px 0px 6px;\n}\n\n.Demographic1 {\n  font-size: 15px;\n  color: #200199;\n  padding: 8px 0px 0px 6px;\n}\n\n.deitephic {\n  font-size: 15px;\n  color: #000;\n  padding: 0px 0px 0px 6px;\n}\n\n.namedetail {\n  font-size: 14px;\n  color: #777777;\n  padding: 5px 0 0 6px;\n}\n\n.demoimg {\n  width: 100%;\n}\n\n.listpadd {\n  padding: 0 14px;\n}\n\n.scrollxpadd {\n  padding: 0 0px 0 14px;\n}\n\n.vivemore {\n  text-transform: none;\n  --text-transform: none;\n  background: #fff;\n  --background: #fff;\n  color: #417cff;\n  --color: #417cff;\n  font-size: 14px;\n  --font-size: 14px;\n  border-radius: 50px;\n  --border-radius: 50px;\n  box-shadow: none;\n  --box-shadow: none;\n  font-weight: 400;\n  --font-weight: 400;\n  height: 40px;\n  --height: 40px;\n  width: 80%;\n  --width: 80%;\n  margin: auto;\n  display: table;\n  margin-top: 20px;\n}\n\n.ckeckBtn {\n  font-size: 15px;\n  color: #fff;\n  background: #ff9a98;\n  padding: 6px 24px;\n  border-radius: 30px;\n  width: -moz-fit-content;\n  width: fit-content;\n  float: right;\n  margin: 6px 10px;\n}\n\n.video {\n  opacity: 0.4;\n  border-radius: 10px;\n  margin: auto;\n  width: 100%;\n  height: 125px;\n}\n\n.playnow {\n  opacity: 1;\n  border-radius: 10px;\n  margin: auto;\n  width: 100%;\n  height: 125px;\n}\n\n.fm {\n  font-size: 15px;\n  color: #fff;\n  background: #ff9a98;\n  padding: 8px;\n  border-radius: 30px;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.ckeckBtn:active {\n  font-size: 16px;\n  color: #fff;\n  background: #ff8280;\n  padding: 7px 25px;\n  border-radius: 30px;\n  width: -moz-fit-content;\n  width: fit-content;\n  float: right;\n  margin: 4px 9px 5px;\n}\n\n.maincarddiv {\n  width: 200px;\n  border-radius: 16px;\n  background: #f1f2fa;\n  margin-right: 15px;\n}\n\n.videocarddiv {\n  width: 240px;\n  border-radius: 16px;\n  background: #f1f2fa;\n  margin-right: 15px;\n}\n\n.foodimgs {\n  border-radius: 16px 16px 0 0;\n  height: 100px;\n  width: 100%;\n  object-fit: cover;\n}\n\n.earlymorning {\n  font-size: 14px;\n  padding: 6px 10px 0 15px;\n}\n\n.choicesdiv {\n  font-size: 13px;\n  padding: 6px 10px 0 15px;\n}\n\n.selectBtn {\n  font-size: 15px;\n  color: #fff;\n  background: #ff9a98;\n  padding: 6px 24px;\n  border-radius: 30px;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 6px 15px;\n}\n\n.videoimges {\n  width: 100%;\n  height: 100px;\n  object-fit: cover;\n  border-radius: 16px;\n}\n\n.NutritionalPam {\n  border-radius: 16px;\n  background: linear-gradient(135deg, #ebf2ff 24%, #eaeeff 60%);\n}\n\n.downloadBtn {\n  font-size: 15px;\n  color: #fff;\n  background: linear-gradient(135deg, #9bbdfe 24%, #93a9fd 60%);\n  padding: 6px 10px;\n  border-radius: 30px;\n  width: -moz-fit-content;\n  width: fit-content;\n  float: right;\n  margin: 6px 10px;\n}\n\n.renidercard {\n  background: #ffe6e6;\n  padding: 16px 10px;\n  border-radius: 16px;\n}\n\n.remailimge {\n  width: 66px;\n  height: 66px;\n  border-radius: 50%;\n}\n\n.Reminderlbl {\n  color: #a30000;\n  font-size: 13px;\n  font-weight: 400;\n  padding-top: 12px;\n}\n\n.updatedetail {\n  font-size: 14px;\n  color: #000;\n  font-weight: 400;\n  padding: 6px 0 0 0;\n}\n\n.closeicons {\n  font-size: 22px;\n  color: #919191;\n  padding: 5px 0 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,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Qko7O0FBckJBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBd0JKOztBQXRCQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQXlCSjs7QUF2QkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBMEJKIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5kaXZ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxufVxyXG4uZG90bG9nb3N7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4ucGFnZXBhZGR7XHJcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcclxufVxyXG4ud2Vjb21kaXZ7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogIzkyOTI5MjtcclxufVxyXG4udXNlcm5hbWV7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHBhZGRpbmctdG9wOiA2cHg7XHJcbn1cclxuLmNpbGR3b29ke1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbn1cclxuLk1haW5jYXJkUm93e1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmMWYyZmEgMjQlLCAjZmRlY2VjIDYwJSk7XHJcbn1cclxuXHJcbi5EZW1vZ3JhcGhpY3tcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgcGFkZGluZzogOHB4IDBweCAwcHggNnB4O1xyXG59XHJcblxyXG4uRGVtb2dyYXBoaWMxe1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICMyMDAxOTk7XHJcbiAgICBwYWRkaW5nOiA4cHggMHB4IDBweCA2cHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5kZWl0ZXBoaWN7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDZweDtcclxufVxyXG5cclxuLm5hbWVkZXRhaWx7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzc3Nzc3NztcclxuICAgIHBhZGRpbmc6IDVweCAwIDAgNnB4O1xyXG59XHJcbi5kZW1vaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmxpc3RwYWRke1xyXG4gICAgcGFkZGluZzogMCAxNHB4O1xyXG59XHJcbi5zY3JvbGx4cGFkZHtcclxuICAgIHBhZGRpbmc6IDAgMHB4IDAgMTRweDtcclxufVxyXG4udml2ZW1vcmV7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIC0tdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgY29sb3I6ICM0MTdjZmY7XHJcbiAgICAtLWNvbG9yOiAjNDE3Y2ZmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgLS1mb250LXNpemU6IDE0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAtLWZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAtLWhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICAtLXdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLmNrZWNrQnRue1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmY5YTk4O1xyXG4gICAgcGFkZGluZzogNnB4IDI0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luOiA2cHggMTBweDtcclxufVxyXG4udmlkZW8ge1xyXG4gICAgb3BhY2l0eTogMC40O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMjVweDtcclxuICB9XHJcbiAgXHJcbiAgLnBsYXlub3cge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTI1cHg7XHJcbiAgfVxyXG4uZm17XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6ICNmZjlhOTg7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG59XHJcbi5ja2Vja0J0bjphY3RpdmV7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6ICNmZjgyODA7XHJcbiAgICBwYWRkaW5nOiA3cHggMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW46IDRweCA5cHggNXB4O1xyXG59XHJcbi5tYWluY2FyZGRpdntcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMmZhO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcbi52aWRlb2NhcmRkaXZ7XHJcbiAgICB3aWR0aDogMjQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjJmYTtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG4uZm9vZGltZ3N7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4IDE2cHggMCAwO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuLmVhcmx5bW9ybmluZ3tcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBhZGRpbmc6IDZweCAxMHB4IDAgMTVweDtcclxufVxyXG4uY2hvaWNlc2RpdntcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHBhZGRpbmc6IDZweCAxMHB4IDAgMTVweDtcclxufVxyXG4uc2VsZWN0QnRue1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmY5YTk4O1xyXG4gICAgcGFkZGluZzogNnB4IDI0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgbWFyZ2luOiA2cHggMTVweDtcclxufVxyXG4udmlkZW9pbWdlc3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxufVxyXG4uTnV0cml0aW9uYWxQYW17XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ViZjJmZiAyNCUsICNlYWVlZmYgNjAlKTtcclxufVxyXG4uZG93bmxvYWRCdG57XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM5YmJkZmUgMjQlLCAjOTNhOWZkIDYwJSk7XHJcbiAgICBwYWRkaW5nOiA2cHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW46IDZweCAxMHB4O1xyXG59XHJcbi5yZW5pZGVyY2FyZHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmU2ZTY7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG59XHJcbi5yZW1haWxpbWdle1xyXG4gICAgd2lkdGg6IDY2cHg7XHJcbiAgICBoZWlnaHQ6IDY2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLlJlbWluZGVybGJse1xyXG4gICAgY29sb3I6ICNhMzAwMDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgcGFkZGluZy10b3A6IDEycHg7XHJcbn1cclxuLnVwZGF0ZWRldGFpbHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHBhZGRpbmc6IDZweCAwIDAgMDtcclxufVxyXG4uY2xvc2VpY29uc3tcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiAjOTE5MTkxO1xyXG4gICAgcGFkZGluZzogNXB4IDAgMCAwO1xyXG59Il19 */");

/***/ }),

/***/ 49764:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"fullback\">\n\n  <div class=\"maindiv\">\n    <img src=\"assets/imgs/logo.png\" class=\"toplogo\" alt=\"\">\n\n    <div>\n      <div class=\"ht_20\"></div>\n      <img src=\"assets/imgs/dot.png\" class=\"dotlogos\" alt=\"\" (click)=\"notification()\">\n      <div class=\"ht_10\"></div>\n\n      <div class=\"pagepadd\" (click)=\"profile()\">\n        <div class=\"wecomdiv\">welcome,</div>\n        <div class=\"username\">{{config.logindata.first_name}}&nbsp;{{config.logindata.last_name}}\n        </div>\n        <div class=\"ht_30\"></div>\n      </div>\n\n      <div class=\"listpadd\">\n        <!-- <div class=\"fm\" (click)=\"fmonitoring()\">Food Morning</div> -->\n        <div class=\"ht_20\"></div>\n\n        <div>\n          <ion-row class=\"MaincardRow\">\n            <ion-col size=\"7\">\n              <div class=\"Demographic\">Demographic Data</div>\n              <div class=\"namedetail\">{{gname}}</div>\n              <ion-button fill=\"clear\" class=\"vivemore\" (click)=\"demographic()\">View more</ion-button>\n            </ion-col>\n            <ion-col size=\"5\" class=\"vertical_centr\">\n              <!-- <img src=\"{{config.api}}{{gimage}}\" class=\"demoimg\" alt=\"\"> -->\n              <img *ngIf=\"gimage != '' \" src=\"{{config.api}}{{gimage}}\" class=\"demoimg\" alt=\"\">\n              <img *ngIf=\"gimage == '' \" src=\"assets/imgs/demografy.png\" class=\"demoimg\">\n            </ion-col>\n          </ion-row>\n          <div class=\"ht_20\"></div>\n        </div>\n        <div>\n          <ion-row class=\"MaincardRow\">\n            <ion-col size=\"7\">\n              <div class=\"Demographic\">Anthropomentry data</div>\n              <div class=\"namedetail\">{{gname}}</div>\n              <ion-button fill=\"clear\" class=\"vivemore\" (click)=\"anthrophic()\">View more</ion-button>\n            </ion-col>\n\n            <ion-col size=\"5\" class=\"vertical_centr\">\n              <!-- <img src=\"{{config.api}}{{gimage}}\" class=\"demoimg\" alt=\"\"> -->\n              <img *ngIf=\"gimage != '' \" src=\"{{config.api}}{{gimage}}\" class=\"demoimg\" alt=\"\">\n              <img  *ngIf=\"gimage == '' \" src=\"assets/imgs/demografy.png\" class=\"demoimg\">\n            </ion-col>\n          </ion-row>\n          <div class=\"ht_20\"></div>\n        </div>\n\n        <div class=\"MaincardRow\" style=\"padding: 10px;\" *ngIf=\"clinical\">\n          <ion-row class=\"MaincardRow\" style=\"padding-top: 10px;\" *ngIf=\"clinical\">\n            <div class=\"ht_20\"></div>\n            <div class=\"ht_20\"></div>\n            <div class=\"ht_20\" *ngIf=\"clinical\"></div>\n            <div class=\"Demographic1\" *ngIf=\"clinical\">Clinical</div>\n          </ion-row>\n          <ion-row class=\"MaincardRow\">\n            <div class=\"namedetail\" *ngIf=\"clinical\">{{clinical}}</div>\n            <div class=\"ht_20\" *ngIf=\"clinical\"></div>\n          </ion-row>\n          <ion-row class=\"MaincardRow\" *ngIf=\"biochemical\">\n            <div class=\"Demographic1\" *ngIf=\"biochemical\">Biochemical </div>\n          </ion-row>\n          <ion-row class=\"MaincardRow\" style=\"padding-bottom: 10px;\" *ngIf=\"biochemical\">\n            <div class=\"namedetail\" *ngIf=\"biochemical\">{{biochemical}}</div>\n\n            <div class=\"ht_20\" *ngIf=\"biochemical\"></div>\n            <div class=\"ht_20\"></div>\n          </ion-row>\n\n\n        </div>\n        <div class=\"ht_20\" *ngIf=\"clinical\"></div>\n\n\n\n        <ion-row class=\"MaincardRow\" style=\"padding-top: 10px;\">\n          <ion-col size=\"6\" class=\"vertical_centrC\">\n            <div class=\"deitephic\">Diet History</div>\n          </ion-col>\n\n          <ion-col size=\"6\">\n            <div class=\"ckeckBtn\" (click)=\"DietHistrory()\">Check</div>\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <div class=\"ht_30\"></div>\n\n      <div class=\"scrollxpadd\">\n        <div class=\"cildwood\">Food Monitoring</div>\n        <div class=\"ht_20\"></div>\n        <div style=\"overflow-x:auto;\">\n          <table>\n            <tr>\n              <td (click)=\"fmonitoring()\">\n                <div class=\"maincarddiv\">\n                  <img src=\"assets/imgs/food.jpeg\" class=\"foodimgs\">\n                  <div class=\"earlymorning\">Add food details</div>\n                  <div class=\"ht_10\"></div>\n                </div>\n              </td>\n              <!--\n              <td *ngFor=\"let c of category\" (click)=\"fmonitoring()\">\n                <div class=\"maincarddiv\">\n                  <img src=\"{{config.imgapi}}{{c.icon}}\" class=\"foodimgs\">\n                  <div class=\"earlymorning\">{{c.name}}</div>\n                   <div class=\"choicesdiv\">{{c.total_food}}+ Choices</div>\n                  <div class=\"selectBtn\" (click)=\"fmonitoring()\">Select</div> \n                  <div class=\"ht_10\"></div>\n                </div>\n              </td>\n              -->\n\n            </tr>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"ht_30\"></div>\n\n      <div class=\"scrollxpadd\">\n        <div style=\" font-size: 15px;\n        color: #000;\n        font-weight: 400;\n        text-align:center\" (click)=\"gallery()\">View Gallery</div>\n\n        <div class=\"ht_20\"></div>\n\n        <!-- <div style=\"overflow-x:auto;\">\n          <table>\n            <tr>\n              <td *ngFor=\"let v of videos\">\n                <div class=\"videocarddiv\">\n                  <video *ngIf=\"v.type == '1'\" controls=\"controls\" preload=\"metadata\"\n                    webkit-playsinline=\"webkit-playsinline\" style=\"width: 100%;height: fit-content;\">\n                    <source src=\"{{config.imgapi}}{{v.url}}\" type=\"video/mp4\" />\n                  </video>\n                  <iframe *ngIf=\"v.type == '2'\" style=\"width: 100%;height: fit-content;\" frameborder=\"0\" allowfullscreen\n                    [src]=\"updateVideoUrl(v.url)\"></iframe>\n                </div>\n              </td>\n            \n            </tr>\n          </table>\n        </div> -->\n      </div>\n\n      <div class=\"ht_30\"></div>\n\n\n\n\n\n      <div class=\"listpadd\">\n        <ion-row class=\"NutritionalPam\">\n          <ion-col size=\"7\" class=\"vertical_centrC\">\n            <div class=\"deitephic\">Nutritional pamphlet</div>\n          </ion-col>\n\n          <ion-col size=\"5\">\n            <div class=\"downloadBtn\" (click)=\"download()\">Downloads</div>\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <div class=\"ht_20\"></div>\n\n      <div class=\"listpadd\" *ngIf=\"displydata == '0'\">\n        <ion-row class=\"renidercard\">\n          <ion-col size=\"4\" class=\"vertical_centrC\">\n            <!-- <img src=\"assets/imgs/remailnder.png\" class=\"remailimge\"> -->\n            <img src=\"assets/imgs/clock.png\" class=\"remailimge\">\n          </ion-col>\n          <ion-col size=\"7\" (click)=\"earlymorning()\">\n            <div class=\"Reminderlbl\">Reminder!</div>\n            <div class=\"updatedetail\">Update your food details</div>\n          </ion-col>\n          <!-- <ion-col size=\"1\" class=\"ion-no-padding\">\n            <ion-icon name=\"close\" class=\"closeicons\"></ion-icon>\n          </ion-col>  -->\n        </ion-row>\n      </div>\n    </div>\n\n    <div class=\"ht_50\"></div>\n\n  </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map