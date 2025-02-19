(self["webpackChunkCCS"] = self["webpackChunkCCS"] || []).push([["src_app_download_download_module_ts"],{

/***/ 23204:
/*!*****************************************************!*\
  !*** ./src/app/download/download-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DownloadPageRoutingModule": () => (/* binding */ DownloadPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _download_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./download.page */ 57445);




const routes = [
    {
        path: '',
        component: _download_page__WEBPACK_IMPORTED_MODULE_0__.DownloadPage
    }
];
let DownloadPageRoutingModule = class DownloadPageRoutingModule {
};
DownloadPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DownloadPageRoutingModule);



/***/ }),

/***/ 27976:
/*!*********************************************!*\
  !*** ./src/app/download/download.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DownloadPageModule": () => (/* binding */ DownloadPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _download_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./download-routing.module */ 23204);
/* harmony import */ var _download_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./download.page */ 57445);







let DownloadPageModule = class DownloadPageModule {
};
DownloadPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _download_routing_module__WEBPACK_IMPORTED_MODULE_0__.DownloadPageRoutingModule
        ],
        declarations: [_download_page__WEBPACK_IMPORTED_MODULE_1__.DownloadPage]
    })
], DownloadPageModule);



/***/ }),

/***/ 57445:
/*!*******************************************!*\
  !*** ./src/app/download/download.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DownloadPage": () => (/* binding */ DownloadPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_download_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./download.page.html */ 47814);
/* harmony import */ var _download_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./download.page.scss */ 2844);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ 16527);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loader.service */ 98077);
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service.service */ 59353);
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ 97905);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 53760);
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ 18752);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file/ngx */ 20138);









//import { WebView } from '@awesome-cordova-plugins/ionic-webview/ngx';




let DownloadPage = class DownloadPage {
    constructor(alertController, navCtrl, service, router, config, loader, 
    // private webview: WebView
    fileOpener, file, transfer, iab) {
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.service = service;
        this.router = router;
        this.config = config;
        this.loader = loader;
        this.fileOpener = fileOpener;
        this.file = file;
        this.transfer = transfer;
        this.iab = iab;
    }
    ngOnInit() {
        this.getdownloads();
    }
    backbutton() {
        this.navCtrl.pop();
    }
    getdownloads() {
        this.loader.showLoader();
        this.service.getdownloads()
            .then((results) => this.setgetdownloads(results));
    }
    setgetdownloads(res) {
        console.log(res);
        this.loader.dissmissLoader();
        if (res.ResponseCode == '1') {
            this.downloddata = res.data;
            console.log('downloaddata=> ', this.downloddata);
        }
    }
    Ciratifile(fl) {
        var sdff = fl.substr(fl.lastIndexOf('.') + 1);
        if (sdff == 'jpg' || sdff == 'JPG' || sdff == 'png' || sdff == 'PNG') {
            return 'PNG';
        }
        else if (sdff == 'mp3') {
            return "MP3";
        }
        else if (sdff == 'pdf') {
            return 'PDF';
        }
        else if (sdff == 'mp4') {
            return 'MP4';
        }
    }
    docfile(fileName) {
        this.pdffopener = this.config.imgpdf + fileName;
        var urlimg = this.pdffopener.replace(' ', '%20');
        var urlim = urlimg.replace(' ', '%20');
        var urli = urlim.replace(' ', '%20');
        var url = urli.replace(' ', '%20');
        console.log(url);
        const browser = this.iab.create(url, '_system');
        // this.fileOpener.open(url, 'application/pdf')
        // .then(() => console.log('File opened successfully'))
        // .catch(e => console.log('Error opening file', e));
        // let dir_name = 'Download';
        // let file_name =  this.pdffopener;
        // console.log(file_name)
        // var imagePath =  this.pdffopener;
        // console.log(imagePath)
        // const fileTransfer: FileTransferObject = this.transfer.create();
        // let result = this.file.createDir(this.file.externalRootDirectory, dir_name, true);
        // console.log(result)
        // result.then((resp) => {
        //   var path = resp.toURL();
        //   console.log(path);
        //   fileTransfer.download(imagePath, path + file_name)
        //     .then((data) => {
        //       console.log(data)
        //       console.log('download complete: ' + data.toURL())
        //       this.fileOpener.open(path + file_name, 'application/pdf')
        //         .then(() => console.log('File is opened'))
        //         .catch(e => {
        //           console.log('Error opening file', e)
        //         })
        //     }, (error) => {
        //       console.log(error)
        //     });
        // }, (err) => {
        //   console.log('error on creating path : ' + err);
        // });
    }
    chkdate(td) {
        let d = new Date(new Date(td));
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return months[d.getMonth()] + ' ' + d.getFullYear();
    }
    findextin(data) {
        return data.slice(-3);
    }
};
DownloadPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_4__.ServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService },
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService },
    { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_7__.FileOpener },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__.File },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__.FileTransfer },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__.InAppBrowser }
];
DownloadPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-download',
        template: _raw_loader_download_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_download_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DownloadPage);



/***/ }),

/***/ 2844:
/*!*********************************************!*\
  !*** ./src/app/download/download.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".backarrow {\n  color: #000;\n  font-size: 18px;\n  margin-left: 24px;\n}\n\n.heaertitle {\n  font-size: 15px;\n  font-weight: 500;\n  color: #000;\n  text-align: center;\n  font-weight: bold;\n}\n\n.heaer-title {\n  font-size: 15px;\n  font-weight: 500;\n  color: #000;\n  padding: 10px;\n}\n\n.childimgs {\n  width: 60px;\n  height: 60px;\n  border-radius: 40px;\n}\n\n.listpadd {\n  padding: 0 14px;\n}\n\n.borderdiv {\n  background: transparent;\n  width: 100%;\n  margin-bottom: 5px;\n  border-bottom: 1px solid #afafaf;\n}\n\n.clidename {\n  font-size: 15px;\n  color: #000;\n  font-weight: 400;\n  padding-top: 6px;\n}\n\n.clidedetail {\n  font-size: 13px;\n  color: #a5a5a5;\n  padding-top: 5px;\n}\n\n.playcercul {\n  font-size: 24px;\n  color: #888888;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvd25sb2FkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUdKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUFBO0VBQ0ksZUFBQTtBQUdKOztBQURBO0VBQ0ksdUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQUlKOztBQUZBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBS0o7O0FBSEE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBTUo7O0FBSkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQU9KIiwiZmlsZSI6ImRvd25sb2FkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrYXJyb3d7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xyXG59XHJcbi5oZWFlcnRpdGxle1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmhlYWVyLXRpdGxle1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIFxyXG59XHJcblxyXG4uY2hpbGRpbWdze1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG59XHJcbi5saXN0cGFkZHtcclxuICAgIHBhZGRpbmc6IDAgMTRweDtcclxufVxyXG4uYm9yZGVyZGl2e1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYWZhZmFmO1xyXG59XHJcbi5jbGlkZW5hbWV7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG59XHJcbi5jbGlkZWRldGFpbHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjYTVhNWE1O1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxufVxyXG4ucGxheWNlcmN1bHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGNvbG9yOiAjODg4ODg4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 47814:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/download/download.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"fullback\">\n\n  <div class=\"maindiv\" style=\"height:100%\">\n    <img src=\"assets/imgs/logo.png\" class=\"toplogo\" alt=\"\">\n    <div>\n      <div class=\"ht_45\"></div>\n      <ion-row>\n        <ion-col size=\"3\" class=\"vertical_centr\" (click)=\"backbutton()\">\n          <ion-icon name=\"chevron-back-outline\" class=\"backarrow\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"6\">\n          <div class=\"heaertitle\">Dwonloads</div>\n        </ion-col>\n        <ion-col size=\"3\"></ion-col>\n      </ion-row>\n      <div class=\"ht_60\"></div>\n      <div class=\"heaer-title\">Dwonloads</div>\n      <div class=\"listpadd\">\n        <ion-row *ngFor=\"let d of downloddata\">\n          <ion-col size=\"3\" class=\"ion-no-padding\">\n            <img *ngIf=\"findextin(d.url) == 'png' || findextin(d.url) == 'jpg' || findextin(d.url) == 'PNG'\"\n              src=\"{{config.imgapi}}{{d.url}}\" class=\"childimgs\">\n            <img *ngIf=\"findextin(d.url) == 'pdf'\" src=\"assets/imgs/pdf.png\" class=\"childimgs\">\n            <img *ngIf=\"findextin(d.url) == 'doct' || findextin(d.url) == 'doctx'\" src=\"assets/imgs/doct.png\"\n              class=\"childimgs\">\n          </ion-col>\n          <ion-col size=\"9\" (click)=\"docfile(d.url)\">\n            <div class=\"clidename\" *ngIf=\"Ciratifile(d.url) == 'PDF'\" >PDF file name</div>\n            <div class=\"clidedetail\">{{chkdate(d.created_date)}}</div> \n          </ion-col>\n        </ion-row>  \n        <div class=\"ht_5\"></div>\n\n        <!-- <ion-row>\n          <ion-col size=\"3\" class=\"ion-no-padding\">\n            <img src=\"assets/imgs/child.png\" class=\"childimgs\">\n          </ion-col>\n          <ion-col size=\"9\">\n            <div class=\"clidename\">Healthy Food </div>\n            <div class=\"clidedetail\">March 2</div>\n          </ion-col>\n        </ion-row> -->\n      </div>\n    </div>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_download_download_module_ts.js.map