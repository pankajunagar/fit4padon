(self["webpackChunkCCS"] = self["webpackChunkCCS"] || []).push([["src_app_gallery_gallery_module_ts"],{

/***/ 56059:
/*!***************************************************!*\
  !*** ./src/app/gallery/gallery-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GalleryPageRoutingModule": () => (/* binding */ GalleryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _gallery_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gallery.page */ 18526);




const routes = [
    {
        path: '',
        component: _gallery_page__WEBPACK_IMPORTED_MODULE_0__.GalleryPage
    }
];
let GalleryPageRoutingModule = class GalleryPageRoutingModule {
};
GalleryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GalleryPageRoutingModule);



/***/ }),

/***/ 18632:
/*!*******************************************!*\
  !*** ./src/app/gallery/gallery.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GalleryPageModule": () => (/* binding */ GalleryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _gallery_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gallery-routing.module */ 56059);
/* harmony import */ var _gallery_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery.page */ 18526);







let GalleryPageModule = class GalleryPageModule {
};
GalleryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _gallery_routing_module__WEBPACK_IMPORTED_MODULE_0__.GalleryPageRoutingModule
        ],
        declarations: [_gallery_page__WEBPACK_IMPORTED_MODULE_1__.GalleryPage]
    })
], GalleryPageModule);



/***/ }),

/***/ 18526:
/*!*****************************************!*\
  !*** ./src/app/gallery/gallery.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GalleryPage": () => (/* binding */ GalleryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_gallery_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./gallery.page.html */ 57826);
/* harmony import */ var _gallery_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery.page.scss */ 53678);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ 16527);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loader.service */ 98077);
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service.service */ 59353);










let GalleryPage = class GalleryPage {
    constructor(alertController, sanitizer, navCtrl, service, router, config, loader) {
        this.alertController = alertController;
        this.sanitizer = sanitizer;
        this.navCtrl = navCtrl;
        this.service = service;
        this.router = router;
        this.config = config;
        this.loader = loader;
    }
    ngOnInit() {
        this.getimagesvideos();
    }
    backbutton() {
        this.navCtrl.pop();
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
            console.log('img=> ', this.images);
            console.log('video=> ', this.videos);
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
};
GalleryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_4__.ServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService },
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService }
];
GalleryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-gallery',
        template: _raw_loader_gallery_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_gallery_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], GalleryPage);



/***/ }),

/***/ 53678:
/*!*******************************************!*\
  !*** ./src/app/gallery/gallery.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".backarrow {\n  color: #000;\n  font-size: 18px;\n  margin-left: 24px;\n}\n\n.heaertitle {\n  font-size: 15px;\n  font-weight: 500;\n  color: #000;\n  text-align: center;\n  font-weight: bold;\n}\n\n.heaer-title {\n  font-size: 15px;\n  font-weight: 500;\n  color: #000;\n  padding: 10px;\n  margin-bottom: 20px;\n}\n\n.videocarddiv {\n  width: 240px;\n  border-radius: 16px;\n  background: #f1f2fa;\n  margin-right: 15px;\n}\n\n.childimgs {\n  width: 100%;\n  height: 100px;\n  border-radius: 10px;\n}\n\n.listpadd {\n  padding: 0 14px;\n}\n\n.borderdiv {\n  background: transparent;\n  width: 100%;\n  margin-bottom: 5px;\n  border-bottom: 1px solid #afafaf;\n}\n\n.clidename {\n  font-size: 15px;\n  color: #000;\n  font-weight: 400;\n  padding-top: 6px;\n}\n\n.clidedetail {\n  font-size: 13px;\n  color: #a5a5a5;\n  padding-top: 5px;\n}\n\n.playcercul {\n  font-size: 24px;\n  color: #888888;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbGxlcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFEQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFJSjs7QUFEQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFJSjs7QUFGQTtFQUNJLGVBQUE7QUFLSjs7QUFIQTtFQUNJLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUFNSjs7QUFKQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQU9KOztBQUxBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQVFKOztBQU5BO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFTSiIsImZpbGUiOiJnYWxsZXJ5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrYXJyb3d7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xyXG59XHJcbi5oZWFlcnRpdGxle1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmhlYWVyLXRpdGxle1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLnZpZGVvY2FyZGRpdntcclxuICAgIHdpZHRoOiAyNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMmZhO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4uY2hpbGRpbWdze1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4ubGlzdHBhZGR7XHJcbiAgICBwYWRkaW5nOiAwIDE0cHg7XHJcbn1cclxuLmJvcmRlcmRpdntcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FmYWZhZjtcclxufVxyXG4uY2xpZGVuYW1le1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgcGFkZGluZy10b3A6IDZweDtcclxufVxyXG4uY2xpZGVkZXRhaWx7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogI2E1YTVhNTtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbn1cclxuLnBsYXljZXJjdWx7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBjb2xvcjogIzg4ODg4ODtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 57826:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"fullback\">\n\n  <div class=\"maindiv\" style=\"height:100%\">\n    <img src=\"assets/imgs/logo.png\" class=\"toplogo\" alt=\"\">\n\n    <div>\n      <div class=\"ht_45\"></div>\n      <ion-row>\n        <ion-col size=\"3\" class=\"vertical_centr\" (click)=\"backbutton()\">\n          <ion-icon name=\"chevron-back-outline\" class=\"backarrow\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"6\">\n          <div class=\"heaertitle\">Gallery</div>\n        </ion-col>\n        <ion-col size=\"3\"></ion-col>\n      </ion-row>\n      <div class=\"ht_60\"></div>\n      <div class=\"heaer-title\">Image Gallery</div>\n      <div class=\"listpadd\">\n        <ion-row>\n          <ion-col size=\"6\" *ngFor=\"let img of images\" style=\"margin: auto;text-align: center;\">\n            <img src=\"{{config.imgpdf}}{{img.url}}\" class=\"childimgs\">\n          </ion-col>\n        </ion-row>\n      </div>\n\n\n      <div class=\"ht_20\"></div>\n      <div class=\"heaer-title\">Video Gallery</div>\n      <!-- <div class=\"listpadd\">\n        <ion-row>\n          <ion-col size=\"6\" *ngFor=\"let v of videos\" style=\"margin: auto;text-align: center;\">\n            <video autoplay controls=\"controls\" preload=\"metadata\" webkit-playsinline=\"webkit-playsinline\"\n              style=\"width: 100%;height: fit-content;\">\n              <source src=\"{{config.imgapi}}{{v.url}}\" type=\"video/mp4\" />\n            </video>\n          </ion-col>\n        </ion-row>\n      </div> -->\n\n      <div style=\"overflow-x:auto;\">\n        <table>\n          <tr>\n            <td *ngFor=\"let v of videos\">\n              <div class=\"videocarddiv\">\n                <video *ngIf=\"v.type == '1'\" controls=\"controls\" preload=\"metadata\"\n                  webkit-playsinline=\"webkit-playsinline\" style=\"width: 100%;height: fit-content;\">\n                  <source src=\"{{config.imgapi}}{{v.url}}\" type=\"video/mp4\" />\n                </video>\n                <iframe *ngIf=\"v.type == '2'\" style=\"width: 100%;height: fit-content;\" frameborder=\"0\" allowfullscreen\n                  [src]=\"updateVideoUrl(v.url)\"></iframe>\n              </div>\n            </td>\n          </tr>\n        </table>\n      </div>\n\n    </div>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_gallery_gallery_module_ts.js.map