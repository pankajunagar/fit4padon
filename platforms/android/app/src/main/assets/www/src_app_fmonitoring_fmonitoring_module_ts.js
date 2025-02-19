(self["webpackChunkCCS"] = self["webpackChunkCCS"] || []).push([["src_app_fmonitoring_fmonitoring_module_ts"],{

/***/ 95333:
/*!***********************************************************!*\
  !*** ./src/app/fmonitoring/fmonitoring-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FmonitoringPageRoutingModule": () => (/* binding */ FmonitoringPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _fmonitoring_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fmonitoring.page */ 81162);




const routes = [
    {
        path: '',
        component: _fmonitoring_page__WEBPACK_IMPORTED_MODULE_0__.FmonitoringPage
    }
];
let FmonitoringPageRoutingModule = class FmonitoringPageRoutingModule {
};
FmonitoringPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FmonitoringPageRoutingModule);



/***/ }),

/***/ 25831:
/*!***************************************************!*\
  !*** ./src/app/fmonitoring/fmonitoring.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FmonitoringPageModule": () => (/* binding */ FmonitoringPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _fmonitoring_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fmonitoring-routing.module */ 95333);
/* harmony import */ var _fmonitoring_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fmonitoring.page */ 81162);







let FmonitoringPageModule = class FmonitoringPageModule {
};
FmonitoringPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _fmonitoring_routing_module__WEBPACK_IMPORTED_MODULE_0__.FmonitoringPageRoutingModule
        ],
        declarations: [_fmonitoring_page__WEBPACK_IMPORTED_MODULE_1__.FmonitoringPage]
    })
], FmonitoringPageModule);



/***/ }),

/***/ 81162:
/*!*************************************************!*\
  !*** ./src/app/fmonitoring/fmonitoring.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FmonitoringPage": () => (/* binding */ FmonitoringPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_fmonitoring_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./fmonitoring.page.html */ 3993);
/* harmony import */ var _fmonitoring_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fmonitoring.page.scss */ 42836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ 16527);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loader.service */ 98077);
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service.service */ 59353);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);









let FmonitoringPage = class FmonitoringPage {
    constructor(alertController, navCtrl, service, config, loader, router) {
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.service = service;
        this.config = config;
        this.loader = loader;
        this.router = router;
        this.logindata = JSON.parse(localStorage.getItem("ccs_login"));
        console.log(this.logindata);
        this.Datesave = new Date();
        this.Dateshow = this.DateSets(this.Datesave);
        this.datedis = this.DateSet(this.Datesave);
        this.datedi = this.DateSetd(this.Datesave);
        this.displydata = '0';
        console.log('111111');
    }
    ngOnInit() {
        console.log('2222222222');
        this.getfood();
        this.getdatewisefood();
        this.childdata();
    }
    ionViewWillEnter() {
        console.log('333333');
        this.getfood();
        this.getdatewisefood();
        this.childdata();
    }
    childdata() {
        this.loader.showLoader();
        var params = {
            user_id: this.logindata.id
        };
        console.log(params);
        this.service.getdemographicdata(params)
            .then((result) => this.setchilddata(result));
    }
    setchilddata(res) {
        console.log('setchilddata=> ', res);
        this.loader.dissmissLoader();
        if (res.ResponseCode == '1') {
            this.childata = res.data;
            console.log('setchilddata=>', this.childata);
        }
    }
    backbutton() {
        this.navCtrl.pop();
    }
    detail(data) {
        console.log(data);
        this.navCtrl.navigateForward(['/detail', data]);
    }
    getdatewisefood() {
        const month = String(this.Datesave.getMonth() + 1).padStart(2, '0');
        console.log(month);
        console.log(this.datedi);
        this.fdate = 2023 + '-' + month + '-' + this.datedi;
        var params = {
            user_id: this.logindata.id,
            fdate: this.fdate,
            child_id: this.child
        };
        console.log(params);
        this.service.getdatewisefood(params)
            .then((results) => this.setdatewisefood(results));
    }
    // setdatewisefood(res) {
    //   console.log('setgetfood=> ', res)
    //   if (res.ResponseCode == '1') {
    //     this.datedata = res.data
    //     console.log(this.datedata)
    //     this.caloriedata = res.calories
    //     console.log(this.caloriedata)
    //     this.displydata = '1'
    //   } else {
    //     this.displydata = '0'
    //   }
    //   const date = new Date();
    //   let day = date.getDate();
    //   let month = date.getMonth() + 1;
    //   let year = date.getFullYear();
    //   this.fdate = year + '' + month + '' + day
    //   console.log(this.fdate);
    //   if (this.datedata) {
    //     const dates = this.datedata[0].date;
    //     let d = new Date(new Date(dates).getTime())
    //     let yeara = d.getFullYear()
    //     let datea = d.getDate()
    //     let montha = d.getMonth() + 1;
    //     this.fdates = yeara + '' + montha + '' + datea
    //     console.log(this.fdates)
    //   }
    //   if (this.fdate == this.fdates) {
    //     var sumi = 0;
    //     var sumo = 0;
    //     var sum = 0;
    //     var csum = 0
    //     var psum = 0
    //     for (var j = 0; j < this.datedata.length; j++) {
    //       this.iron = this.datedata[j].qty * this.datedata[j].iron / this.datedata[j].food_weight
    //       this.irons = sumi += + this.iron
    //       this.carbo = this.datedata[j].carbo * this.datedata[j].qty / this.datedata[j].food_weight
    //       this.carbos = sumo += +this.carbo
    //       this.fat = this.datedata[j].fats * this.datedata[j].qty / this.datedata[j].food_weight
    //       this.fats = sum += + this.fat;
    //       this.calorie = this.datedata[j].calories * this.datedata[j].qty / this.datedata[j].food_weight
    //       this.calories = csum += +  this.calorie
    //       this.proteins = this.datedata[j].protein * this.datedata[j].qty / this.datedata[j].food_weight
    //       this.protein = psum += +  this.proteins;
    //     }
    //     // console.log(this.foods)
    //     // for (var i = 0; i < this.foods.length; i++) {
    //     //   for (var j = 0; j < this.datedata.length; j++) {
    //     //     for (var x = 0; x < this.foods[i].food.length; x++) {
    //     //       if (this.foods[i].food[x].id == this.datedata[j].food) {
    //     //         console.log(this.foods[i].food[x].id, ' ==', this.datedata[j].food)
    //     //         this.calories = csum += + this.foods[i].food[x].calories
    //     //         this.protein = psum += + this.foods[i].food[x].protein;
    //     //       }
    //     //     }
    //     //   }
    //     // }
    //     this.fat = this.fats / 10000
    //     this.ironss = this.irons / 10000
    //     this.crbo = this.carbos / 10000
    //     this.cal = this.calories / 10000
    //     this.prot = this.protein / 10000
    //   } else {
    //     this.fat = 0
    //     this.ironss = 0
    //     this.crbo = 0
    //     this.cal = 0
    //     this.prot = 0
    //   }
    //   console.log('fat=> ', this.fats, this.fat)
    //   console.log('iron=> ', this.irons, this.ironss)
    //   console.log('carbo=> ', this.carbos, this.crbo)
    //   console.log('calories=> ', this.calories, this.cal)
    //   console.log('protein=> ', this.protein, this.prot)
    // }
    setdatewisefood(res) {
        console.log('setgetfood=> ', res);
        if (res.ResponseCode == '1') {
            this.datedata = res.data;
            console.log(this.datedata);
            this.caloriedata = res.calories;
            console.log(this.caloriedata);
            this.displydata = '1';
        }
        else {
            this.displydata = '0';
        }
        /*
        
            console.log(this.child)
        
            for (var j = 0; j < this.childata.length; j++) {
              if (this.childata[j].id == this.child) {
                this.selectchail = this.childata[j]
              }
            }
            this.fats = this.selectchail.fats
            this.irons = this.selectchail.iron
            this.carbos = this.selectchail.carbo
            this.calories = this.selectchail.calories
            this.protein = this.selectchail.proteins
        
            console.log(this.selectchail)
        
            this.fat = this.fats / 1000
            this.ironss = this.irons / 1000
            this.crbo = this.carbos / 1000
            this.cal = this.calories / 1000
            this.prot = this.protein / 1000
            console.log('fat=> ', this.fats, this.fat)
            console.log('iron=> ', this.irons, this.ironss)
            console.log('carbo=> ', this.carbos, this.crbo)
            console.log('calories=> ', this.calories, this.cal)
            console.log('protein=> ', this.protein, this.prot)
        */
        this.getnut();
    }
    getnut() {
        const month = String(this.Datesave.getMonth() + 1).padStart(2, '0');
        this.fdate = 2023 + '-' + month + '-' + this.datedi;
        var params = {
            cdate: this.fdate,
            child_id: this.child
        };
        this.service.getneturition(params)
            .then((results) => this.setgetneturition(results));
    }
    calcal(price) {
        var pr = 0;
        this.price = pr += +price;
        console.log(pr);
        return this.price;
    }
    setgetneturition(res) {
        console.log(res);
        if (res.ResponseCode == '1' && res.data) {
            this.fat = res.data.fats;
            this.ironss = res.data.iron;
            this.crbo = res.data.carbo;
            this.cal = res.data.calories;
            this.prot = res.data.proteins;
            this.fiber = res.data.fiber;
        }
        else {
            this.fat = '';
            this.ironss = 0;
            this.crbo = '';
            this.cal = '';
            this.prot = '';
            this.fiber = '';
        }
    }
    getfood() {
        var params = {
            user_id: this.logindata.id,
            child_id: this.child,
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
        }
        this.getdatewisefood();
        this.conformdata();
    }
    DateChange(inx) {
        this.Datesave.setDate(this.Datesave.getDate() + inx);
        this.Dateshow = this.DateSets(this.Datesave);
        this.datedis = this.DateSet(this.Datesave);
        this.datedi = this.DateSetd(this.Datesave);
        this.conformdata();
        this.getdatewisefood();
    }
    DateSets(td) {
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
    conformdata() {
        // const year = this.Datesave.getFullYear()
        // const date = this.Datesave.getDate()
        // this.joined = [year, month, date].join('-');
        const month = String(this.Datesave.getMonth() + 1).padStart(2, '0');
        console.log(month);
        for (var i = 0; i < this.foods.length; i++) {
            this.date = this.foods[i].created_date;
            let d = new Date(new Date(this.date).getTime());
            const monthapi = String(d.getMonth() + 1).padStart(2, '0');
            // console.log(monthapi)
            this.date2 = d.toISOString().slice(8, 10);
            this.date1 = d.toISOString().slice(8, 10);
            if (this.date2 === this.datedi && month == monthapi) {
                this.displydatas = '1';
            }
            else {
                this.displydatas = '0';
            }
            // console.log(this.date2, '===', this.datedi, '&&', month, ' ==', monthapi, this.displydatas)
        }
    }
    addfood(id) {
        if (this.child) {
            let NavigationExtras = { state: { 'food_data': id, 'child_data': this.child } };
            console.log(NavigationExtras);
            this.router.navigate(['/food-add'], NavigationExtras);
        }
        else {
            alert('select child');
        }
    }
    editfood_details(data) {
        let NavigationExtras = { state: { 'food_data': data.food, 'all_data': data, 'child_data': this.child } };
        console.log(NavigationExtras);
        this.router.navigate(['/food-add'], NavigationExtras);
    }
    mealsc(cal) {
        return cal.toString().split("-")[1];
    }
    calcunt(cal) {
        return cal.toString().split("-")[0];
    }
    timerset(ftime) {
        let d = ftime.split('T')[1];
        let m = d.split(':')[0];
        let n = d.split(':')[1];
        var AmOrPm = m >= 12 ? 'PM' : 'AM';
        m = (m % 12) || 12;
        return m + ":" + n + AmOrPm;
    }
};
FmonitoringPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_4__.ServiceService },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService },
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
FmonitoringPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-fmonitoring',
        template: _raw_loader_fmonitoring_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_fmonitoring_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FmonitoringPage);



/***/ }),

/***/ 42836:
/*!***************************************************!*\
  !*** ./src/app/fmonitoring/fmonitoring.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".backarrow {\n  color: #000;\n  font-size: 18px;\n  margin-left: 24px;\n}\n\n.heaertitle {\n  font-size: 15px;\n  font-weight: 500;\n  color: #000;\n  text-align: center;\n}\n\n.listpadd {\n  padding: 0 14px;\n}\n\n.foodimgs {\n  width: 51px;\n  height: 51px;\n  border-radius: 14px;\n}\n\n.foodname {\n  font-size: 15px;\n  color: #000;\n  font-weight: 400;\n  padding-top: 6px;\n}\n\n.playcercul {\n  font-size: 24px;\n  color: #888888;\n}\n\n.titlehednm {\n  font-size: 15px;\n  color: #000;\n}\n\n.datespan {\n  font-size: 14px;\n  color: #888888;\n  padding: 0 50px;\n}\n\n.privios {\n  transform: rotate(180deg);\n}\n\n.playicon {\n  font-size: 16px;\n  color: #888888;\n}\n\n.dyvday {\n  text-align: center;\n  padding: 5px 0;\n}\n\n.dyvdate {\n  text-align: center;\n  padding: 5px 0;\n}\n\n.datenormals {\n  color: #858585;\n  font-size: 14px;\n  background: #fff;\n  padding: 10px 0;\n  border-radius: 14px;\n}\n\n.datemailsiv {\n  color: #fff;\n  font-size: 15px;\n  background: linear-gradient(135deg, #9bbdfe 24%, #93a9fd 60%);\n  padding: 10px 0;\n  border-radius: 14px;\n}\n\n.itemclass {\n  background: #f7f8f8;\n  --background: #f7f8f8;\n  border-radius: 50px;\n  --border-radius: 50px;\n  --min-height: 42px !important;\n}\n\n.timepicker {\n  background: #f7f8f8;\n  --background: #f7f8f8;\n  border-radius: 50px;\n  --border-radius: 50px;\n  font-size: 16px;\n  --font-size: 16px;\n  --padding-start: 8px;\n  width: 100%;\n  text-align: center;\n  letter-spacing: 4px;\n  color: #969696;\n}\n\n.roundclass {\n  height: 22px;\n  width: 22px;\n  border-radius: 50%;\n  background: #ff9a98;\n}\n\n.ellipsecls {\n  font-size: 12px;\n  color: #fff;\n}\n\n.quizz-progress ion-progress-bar {\n  --background: green;\n  --buffer-background: #eae2e2;\n  --progress-background: linear-gradient(to right,#94a2fd, #9d9dfa,#a899f8);\n  height: 6px;\n  border-radius: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZtb25pdG9yaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSw2REFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUdJO0VBQ0ksbUJBQUE7RUFDQSw0QkFBQTtFQUNBLHlFQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQVIiLCJmaWxlIjoiZm1vbml0b3JpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2thcnJvdyB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xyXG59XHJcblxyXG4uaGVhZXJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5saXN0cGFkZCB7XHJcbiAgICBwYWRkaW5nOiAwIDE0cHg7XHJcbn1cclxuXHJcbi5mb29kaW1ncyB7XHJcbiAgICB3aWR0aDogNTFweDtcclxuICAgIGhlaWdodDogNTFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbn1cclxuXHJcbi5mb29kbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG59XHJcblxyXG4ucGxheWNlcmN1bCB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBjb2xvcjogIzg4ODg4ODtcclxufVxyXG5cclxuLnRpdGxlaGVkbm0ge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi5kYXRlc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzg4ODg4ODtcclxuICAgIHBhZGRpbmc6IDAgNTBweDtcclxufVxyXG5cclxuLnByaXZpb3Mge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxufVxyXG5cclxuLnBsYXlpY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjODg4ODg4O1xyXG59XHJcblxyXG4uZHl2ZGF5IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG59XHJcblxyXG4uZHl2ZGF0ZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxufVxyXG5cclxuLmRhdGVub3JtYWxzIHtcclxuICAgIGNvbG9yOiAjODU4NTg1O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbn1cclxuXHJcbi5kYXRlbWFpbHNpdiB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM5YmJkZmUgMjQlLCAjOTNhOWZkIDYwJSk7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG59XHJcblxyXG4uaXRlbWNsYXNzIHtcclxuICAgIGJhY2tncm91bmQ6ICNmN2Y4Zjg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmN2Y4Zjg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgLS1taW4taGVpZ2h0OiA0MnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50aW1lcGlja2VyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmN2Y4Zjg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmN2Y4Zjg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgLS1mb250LXNpemU6IDE2cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuICAgIGNvbG9yOiAjOTY5Njk2O1xyXG59XHJcblxyXG4ucm91bmRjbGFzcyB7XHJcbiAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICB3aWR0aDogMjJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmZjlhOTg7XHJcbn1cclxuXHJcbi5lbGxpcHNlY2xzIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ucXVpenotcHJvZ3Jlc3Mge1xyXG4gICAgaW9uLXByb2dyZXNzLWJhciB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiBncmVlbjtcclxuICAgICAgICAtLWJ1ZmZlci1iYWNrZ3JvdW5kOiAjZWFlMmUyO1xyXG4gICAgICAgIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCM5NGEyZmQsICM5ZDlkZmEsI2E4OTlmOCk7XHJcbiAgICAgICAgaGVpZ2h0OiA2cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ 3993:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fmonitoring/fmonitoring.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"fullback\">\n\n  <div class=\"maindiv\">\n    <img src=\"assets/imgs/logo.png\" class=\"toplogo\" alt=\"\">\n\n    <div>\n      <div class=\"ht_45\"></div>\n      <ion-row>\n        <ion-col size=\"3\" class=\"vertical_centr\" (click)=\"backbutton()\">\n          <ion-icon name=\"chevron-back-outline\" class=\"backarrow\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"6\">\n          <div class=\"heaertitle\">Food Monitoring</div>\n        </ion-col>\n        <ion-col size=\"3\"></ion-col>\n      </ion-row>\n      <div class=\"ht_50\"></div>\n    </div>\n\n    <div style=\"width: 80%;\n    margin: auto;\">\n      <ion-item>\n        <ion-label style=\"color:black;font-size: 14px;\">Select Child</ion-label>\n        <ion-select [(ngModel)]=\"child\" (ionChange)=\"getdatewisefood()\">\n          <ion-select-option *ngFor=\"let c of childata\" value=\"{{c.id}}\">{{c.name}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </div>\n    <div class=\"ht_20\"></div>\n    <ion-row class=\"listpadd\">\n      <ion-col size=\"3\" class=\"vertical_centr\">\n        <div class=\"datebuttonback vertical_centr\" (click)=\"DateChange(-1)\">\n          <ion-icon name=\"play-outline\" class=\"datenext dateback\"></ion-icon>\n        </div>\n      </ion-col>\n      <ion-col size=\"6\" class=\"ion-no-padding vertical_centr\">\n        <div class=\"fridejune\">{{Dateshow}}</div>\n      </ion-col>\n      <ion-col size=\"3\" class=\"vertical_centr\">\n        <div class=\"datebuttonback vertical_centr\" (click)=\"DateChange(+1)\">\n          <ion-icon name=\"play-outline\" class=\"datenext\"></ion-icon>\n        </div>\n      </ion-col>\n    </ion-row>\n    <div class=\"ht_20\"></div>\n    <ion-row>\n      <ion-col size=\"4\">\n        <div class=\"datenormals\">\n          <div class=\"dyvday\">{{dayago}}</div>\n          <div class=\"dyvdate\">{{mindate}}</div>\n        </div>\n      </ion-col>\n      <ion-col size=\"4\">\n        <div class=\"datemailsiv\">\n          <div class=\"dyvday\">{{datedis}}</div>\n          <div class=\"dyvdate\">{{datedi}}</div>\n        </div>\n      </ion-col>\n      <ion-col size=\"4\">\n        <div class=\"datenormals\">\n          <div class=\"dyvday\">{{dayafter}}</div>\n          <div class=\"dyvdate\">{{maxdate}}</div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <div class=\"listpadd\">\n      <div class=\"ht_20\"></div>\n      <div *ngFor=\"let c of foods;let i=index;\">\n        <!-- <div *ngFor=\"let f of c.food;let i=index;\"> -->\n        <ion-row style=\"padding: 4px;margin-top: 7px;\">\n          <ion-col size=\"5.5\">\n            <div class=\"titlehednm\">{{c.name}}</div>\n          </ion-col>\n          <ion-col size=\"2\">\n            <div class=\"roundclass vertical_centr\" (click)=\"addfood(c.id)\">\n              <ion-icon name=\"add-outline\" class=\"ellipsecls\"></ion-icon>\n            </div>\n          </ion-col>\n          <ion-col size=\"4\" style=\"text-align: right;\" *ngIf=\"displydata == '0'\">\n            <div style=\"font-size: 13px;color: gray;\">Not Added\n            </div>\n          </ion-col>\n          <ion-col size=\"4\" style=\"text-align: right;\" *ngIf=\"displydata == '1'\">\n            <div *ngFor=\"let cat of caloriedata;let j=index;\">\n              <div style=\"font-size: 13px;color: gray;\" *ngIf=\"j == i && cat == '0-0'\">Not Added\n              </div>\n              <!-- <div style=\"font-size: 13px;color: gray;\" *ngIf=\"j == i && cat != '0-0'\">{{mealsc(cat)}} meals |\n                {{calcunt(cat)}} Calories</div> -->\n            </div>\n          </ion-col>\n        </ion-row>\n\n        <!-- <div *ngIf=\"displydatas == '1'\">\n          <div *ngFor=\"let f of c.food;let i=index;\">\n            <ion-row style=\"padding: 6px;\" (click)=\"detail(f)\">\n              <ion-col size=\"3\" class=\"ion-no-padding\">\n                <img src=\"{{config.imgapi}}{{f.icon}}\" class=\"foodimgs\">\n              </ion-col>\n              <ion-col size=\"8\">\n                <div class=\"foodname\">{{f.name}}</div>\n                <div style=\"color: gray;font-size: 14px;\">{{f.time}}</div>\n              </ion-col>\n            </ion-row>\n          </div>\n        </div> -->\n\n        <div *ngIf=\"displydata == '1'\">\n          <div *ngFor=\"let f of c.food;\">\n            <div *ngFor=\"let d of datedata;\">\n              <ion-row style=\"padding: 6px;\" *ngIf=\"f.id == d.food\">\n                <ion-col size=\"3\" class=\"ion-no-padding\"  (click)=\"detail(d)\">\n                  <img src=\"{{config.imgapi}}{{d.photo}}\" class=\"foodimgs\">\n                </ion-col>\n                <ion-col size=\"4\"  (click)=\"detail(d)\">\n                  <div class=\"foodname\">{{d.name}}</div>\n                  <div style=\"color: gray;font-size: 14px;\">{{timerset(d.time)}}</div>\n                </ion-col>\n                <ion-col size=\"4\"  (click)=\"editfood_details(d)\">\n                  <div class=\"foodname\">Edit</div>\n                </ion-col>\n              </ion-row>\n            </div>\n          </div>\n        </div>\n        <!-- </div> -->\n      </div>\n\n\n      <!-- <ion-row>\n        <ion-col size=\"5.5\">\n          <div class=\"titlehednm\">Early Morning</div>\n        </ion-col>\n        <ion-col size=\"2\">\n          <div class=\"roundclass vertical_centr\">\n            <ion-icon name=\"add-outline\" class=\"ellipsecls\"></ion-icon>\n          </div>\n        </ion-col>\n        <ion-col size=\"4.5\" style=\"text-align: right;\">\n          <div style=\"font-size: 13px;color: gray;\">230 calories</div>\n        </ion-col>\n      </ion-row>\n\n      <div class=\"ht_20\"></div> -->\n      <!-- <ion-row>\n        <ion-col size=\"3\" class=\"ion-no-padding\">\n          <img src=\"assets/imgs/coffee.png\" class=\"foodimgs\">\n        </ion-col>\n        <ion-col size=\"8\" (click)=\"detail()\">\n          <div class=\"foodname\">Coffee</div>\n          <div style=\"color: gray;font-size: 12px;\">06:30am</div>\n        </ion-col>\n        <ion-col size=\"1\" class=\"ion-no-padding vertical_centrC\">\n          <ion-icon name=\"play-circle-outline\" class=\"playcercul\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <div class=\"ht_10\"></div> -->\n      <!-- \n      <ion-row>\n        <ion-col size=\"5.5\">\n          <div class=\"titlehednm\">Breakfast</div>\n        </ion-col>\n        <ion-col size=\"2\">\n          <div class=\"roundclass vertical_centr\">\n            <ion-icon name=\"add-outline\" class=\"ellipsecls\"></ion-icon>\n          </div>\n        </ion-col>\n        <ion-col size=\"4.5\" style=\"text-align: right;\">\n          <div style=\"font-size: 13px;color: gray;\">2 meals 140 calories|</div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"3\" class=\"ion-no-padding\">\n          <img src=\"assets/imgs/milk.png\" class=\"foodimgs\">\n        </ion-col>\n        <ion-col size=\"8\" (click)=\"detail()\">\n          <div class=\"foodname\">Milk</div>\n          <div style=\"color: gray;font-size: 12px;\">09:00pm</div>\n        </ion-col>\n        <ion-col size=\"1\" class=\"ion-no-padding vertical_centrC\">\n          <ion-icon name=\"play-circle-outline\" class=\"playcercul\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <div class=\"ht_10\"></div>\n      <ion-row>\n        <ion-col size=\"3\" class=\"ion-no-padding\">\n          <img src=\"assets/imgs/orange.png\" class=\"foodimgs\">\n        </ion-col>\n        <ion-col size=\"8\" (click)=\"detail()\">\n          <div class=\"foodname\">Orange</div>\n          <div style=\"color: gray;font-size: 12px;\">09:00pm</div>\n        </ion-col>\n        <ion-col size=\"1\" class=\"ion-no-padding vertical_centrC\">\n          <ion-icon name=\"play-circle-outline\" class=\"playcercul\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <div class=\"ht_20\"></div>\n\n\n      <ion-row>\n        <ion-col size=\"5.5\">\n          <div class=\"titlehednm\">Mid-Morning</div>\n        </ion-col>\n        <ion-col size=\"2\">\n          <div class=\"roundclass vertical_centr\">\n            <ion-icon name=\"add-outline\" class=\"ellipsecls\"></ion-icon>\n          </div>\n        </ion-col>\n        <ion-col size=\"4.5\" style=\"text-align: right;\">\n          <div style=\"font-size: 13px;color: gray;\">2 meals | 140 calories</div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"3\" class=\"ion-no-padding\">\n          <img src=\"assets/imgs/milk.png\" class=\"foodimgs\">\n        </ion-col>\n        <ion-col size=\"8\" (click)=\"detail()\">\n          <div class=\"foodname\">Milk</div>\n          <div style=\"color: gray;font-size: 12px;\">12:00pm</div>\n        </ion-col>\n        <ion-col size=\"1\" class=\"ion-no-padding vertical_centrC\">\n          <ion-icon name=\"play-circle-outline\" class=\"playcercul\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <div class=\"ht_10\"></div>\n      <ion-row>\n        <ion-col size=\"3\" class=\"ion-no-padding\">\n          <img src=\"assets/imgs/orange.png\" class=\"foodimgs\">\n        </ion-col>\n        <ion-col size=\"8\" (click)=\"detail()\">\n          <div class=\"foodname\">Orange</div>\n          <div style=\"color: gray;font-size: 12px;\">12:00pm</div>\n        </ion-col>\n        <ion-col size=\"1\" class=\"ion-no-padding vertical_centrC\">\n          <ion-icon name=\"play-circle-outline\" class=\"playcercul\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <div class=\"ht_20\"></div>\n\n\n      <ion-row>\n        <ion-col size=\"5.5\">\n          <div class=\"titlehednm\">Lunch</div>\n        </ion-col>\n        <ion-col size=\"2\">\n          <div class=\"roundclass vertical_centr\">\n            <ion-icon name=\"add-outline\" class=\"ellipsecls\"></ion-icon>\n          </div>\n        </ion-col>\n        <ion-col size=\"4.5\" style=\"text-align: right;\">\n          <div style=\"font-size: 13px;color: gray;\">2 meals | 120 calories</div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"3\" class=\"ion-no-padding\">\n          <img src=\"assets/imgs/milk.png\" class=\"foodimgs\">\n        </ion-col>\n        <ion-col size=\"8\" (click)=\"detail()\">\n          <div class=\"foodname\">Milk</div>\n          <div style=\"color: gray;font-size: 12px;\">02:10pm</div>\n        </ion-col>\n        <ion-col size=\"1\" class=\"ion-no-padding vertical_centrC\">\n          <ion-icon name=\"play-circle-outline\" class=\"playcercul\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <div class=\"ht_10\"></div>\n      <ion-row>\n        <ion-col size=\"3\" class=\"ion-no-padding\">\n          <img src=\"assets/imgs/orange.png\" class=\"foodimgs\">\n        </ion-col>\n        <ion-col size=\"8\" (click)=\"detail()\">\n          <div class=\"foodname\">Orange</div>\n          <div style=\"color: gray;font-size: 12px;\">02:10pm</div>\n        </ion-col>\n        <ion-col size=\"1\" class=\"ion-no-padding vertical_centrC\">\n          <ion-icon name=\"play-circle-outline\" class=\"playcercul\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <div class=\"ht_20\"></div>\n\n      <ion-row>\n        <ion-col size=\"5.5\">\n          <div class=\"titlehednm\">Evening</div>\n        </ion-col>\n        <ion-col size=\"2\">\n          <div class=\"roundclass vertical_centr\">\n            <ion-icon name=\"add-outline\" class=\"ellipsecls\"></ion-icon>\n          </div>\n        </ion-col>\n        <ion-col size=\"4.5\" style=\"text-align: right;\">\n          <div style=\"font-size: 13px;color: gray;\">2 meals | 120 calories</div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"3\" class=\"ion-no-padding\">\n          <img src=\"assets/imgs/milk.png\" class=\"foodimgs\">\n        </ion-col>\n        <ion-col size=\"8\" (click)=\"detail()\">\n          <div class=\"foodname\">Milk</div>\n          <div style=\"color: gray;font-size: 12px;\">05:10pm</div>\n        </ion-col>\n        <ion-col size=\"1\" class=\"ion-no-padding vertical_centrC\">\n          <ion-icon name=\"play-circle-outline\" class=\"playcercul\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <div class=\"ht_10\"></div>\n      <ion-row>\n        <ion-col size=\"3\" class=\"ion-no-padding\">\n          <img src=\"assets/imgs/orange.png\" class=\"foodimgs\">\n        </ion-col>\n        <ion-col size=\"8\" (click)=\"detail()\">\n          <div class=\"foodname\">Orange</div>\n          <div style=\"color: gray;font-size: 12px;\">05:10pm</div>\n        </ion-col>\n        <ion-col size=\"1\" class=\"ion-no-padding vertical_centrC\">\n          <ion-icon name=\"play-circle-outline\" class=\"playcercul\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <div class=\"ht_20\"></div>\n\n      <ion-row>\n        <ion-col size=\"5.5\">\n          <div class=\"titlehednm\">Dinner</div>\n        </ion-col>\n        <ion-col size=\"2\">\n          <div class=\"roundclass vertical_centr\">\n            <ion-icon name=\"add-outline\" class=\"ellipsecls\"></ion-icon>\n          </div>\n        </ion-col>\n        <ion-col size=\"4.5\" style=\"text-align: right;\">\n          <div style=\"font-size: 13px;color: gray;\">Not added</div>\n        </ion-col>\n      </ion-row>\n\n      <div class=\"ht_20\"></div>\n\n      <ion-row>\n        <ion-col size=\"5.5\">\n          <div class=\"titlehednm\">Bed time</div>\n        </ion-col>\n        <ion-col size=\"2\">\n          <div class=\"roundclass vertical_centr\">\n            <ion-icon name=\"add-outline\" class=\"ellipsecls\"></ion-icon>\n          </div>\n        </ion-col>\n        <ion-col size=\"4.5\" style=\"text-align: right;\">\n          <div style=\"font-size: 13px;color: gray;\">Not added</div>\n        </ion-col>\n      </ion-row> -->\n      <div class=\"ht_50\"></div>\n      <div *ngIf=\"cal != ''\" >\n      <ion-row>\n        <ion-col>\n          <div class=\"titlehednm\">Today Meal Butritions</div>\n        </ion-col>\n      </ion-row>\n      <div class=\"ht_20\"></div>\n      <div>\n        <ion-card style=\"color: aliceblue;border-radius: 10px;\">\n          <ion-row style=\"width:90%;margin:auto\">\n            <ion-col size=\"4\" style=\"color:black;margin: auto;\">\n              Energy\n            </ion-col>\n            <ion-col size=\"4\" style=\"margin: auto;\">\n              <img src=\"assets/imgs/kal.png\">\n            </ion-col>\n            <ion-col size=\"4\" style=\"color: gray;font-size: 12px;\n            margin: auto;text-align: right;\">\n              {{cal}} kCal\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <div class=\"quizz-progress ion-text-center\">\n                <ion-progress-bar value=\"{{cal}}\"></ion-progress-bar>\n              </div>\n            </ion-col>\n          </ion-row>\n          <div class=\"ht_10\"></div>\n        </ion-card>\n      </div>\n      <div>\n        <ion-card style=\"border-radius: 10px;background-color: #fff;\">\n          <ion-row style=\"width:90%;margin:auto\">\n            <ion-col size=\"4\" style=\"color:black;margin: auto;\">\n              Proteins\n            </ion-col>\n            <ion-col size=\"4\" style=\"margin: auto;\">\n              <img style=\"height: 28px;\" src=\"assets/imgs/prot.png\">\n            </ion-col>\n            <ion-col size=\"4\" style=\"color: gray;font-size: 12px;\n            margin: auto;text-align: right;\">\n              {{prot}} g\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <div class=\"quizz-progress ion-text-center\">\n                <ion-progress-bar value=\"{{prot}}\"></ion-progress-bar>\n              </div>\n            </ion-col>\n          </ion-row>\n          <div class=\"ht_10\"></div>\n        </ion-card>\n      </div>\n      <div>\n        <ion-card style=\"border-radius: 10px;background-color: #fff;\">\n          <ion-row style=\"width:90%;margin:auto\">\n            <ion-col size=\"4\" style=\"color:black;margin: auto;\">\n              Fats\n            </ion-col>\n            <ion-col size=\"4\" style=\"margin: auto;\">\n              <img style=\"height: 28px;\" src=\"assets/imgs/eg.jpg\">\n            </ion-col>\n            <ion-col size=\"4\" style=\"color: gray;font-size: 12px;\n            margin: auto;text-align: right;\">\n              {{fat}} g\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <div class=\"quizz-progress ion-text-center\">\n                <ion-progress-bar value=\"{{fat}}\"></ion-progress-bar>\n              </div>\n            </ion-col>\n          </ion-row>\n          <div class=\"ht_10\"></div>\n        </ion-card>\n      </div>\n      <div>\n        <ion-card style=\"border-radius: 10px;background-color: #fff;\">\n          <ion-row style=\"width:90%;margin:auto\">\n            <ion-col size=\"4\" style=\"color:black;margin: auto;\">\n              Carbo\n            </ion-col>\n            <ion-col size=\"4\" style=\"margin: auto;\">\n              <img style=\"height: 28px;\" src=\"assets/imgs/carbo.png\">\n            </ion-col>\n            <ion-col size=\"4\" style=\"color: gray;font-size: 12px;\n            margin: auto;text-align: right;\">\n              {{crbo}} g\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <div class=\"quizz-progress ion-text-center\">\n                <ion-progress-bar value=\"{{crbo}}\"></ion-progress-bar>\n              </div>\n            </ion-col>\n          </ion-row>\n          <div class=\"ht_10\"></div>\n        </ion-card>\n      </div>\n      <div>\n        <ion-card style=\"border-radius: 10px;background-color: #fff;\">\n          <ion-row style=\"width:90%;margin:auto\">\n            <ion-col size=\"4\" style=\"color:black;margin: auto;\">\n              Iron\n            </ion-col>\n            <ion-col size=\"4\" style=\"margin: auto;\">\n              <img style=\"height: 28px;\" src=\"assets/imgs/carbo.png\">\n            </ion-col>\n            <ion-col size=\"4\" style=\"color: gray;font-size: 12px;\n            margin: auto;text-align: right;\">\n              {{ironss}} ng\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <div class=\"quizz-progress ion-text-center\">\n                <ion-progress-bar value=\"{{ironss}}\"></ion-progress-bar>\n              </div>\n            </ion-col>\n          </ion-row>\n          <div class=\"ht_10\"></div>\n        </ion-card>\n      </div> \n\n\n      <div>\n        <ion-card style=\"border-radius: 10px;background-color: #fff;\">\n          <ion-row style=\"width:90%;margin:auto\">\n            <ion-col size=\"4\" style=\"color:black;margin: auto;\">\n              Fiber\n            </ion-col>\n            <ion-col size=\"4\" style=\"margin: auto;\">\n              <img style=\"height: 28px;\" src=\"assets/imgs/carbo.png\">\n            </ion-col>\n            <ion-col size=\"4\" style=\"color: gray;font-size: 12px;\n            margin: auto;text-align: right;\">\n              {{fiber}} g\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <div class=\"quizz-progress ion-text-center\">\n                <ion-progress-bar value=\"{{fiber}}\"></ion-progress-bar>\n              </div>\n            </ion-col>\n          </ion-row>\n          <div class=\"ht_10\"></div>\n        </ion-card>\n      </div> \n\n\n      \n\n\n    </div>\n  </div>\n  \n  \n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_fmonitoring_fmonitoring_module_ts.js.map