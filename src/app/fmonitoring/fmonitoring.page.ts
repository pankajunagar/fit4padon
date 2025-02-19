import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { ConfigService } from '../config.service';
import { LoaderService } from '../loader.service';
import { ServiceService } from '../service.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-fmonitoring',
  templateUrl: './fmonitoring.page.html',
  styleUrls: ['./fmonitoring.page.scss'],
})
export class FmonitoringPage implements OnInit {
  Dateshow: any;
  Datesave: Date;
  datedis: any;
  datedi: any;
  mindate: number;
  maxdate: number;
  dayago: any;
  dayafter: string;
  logindata: any;
  category: any;
  foods: any;
  joined: string;
  date: any;
  date2: string;
  displydata: any;
  date1: any;
  fdate: any;
  datedata: any;
  displydatas: string;
  fats: any;
  iron: any;
  carbo: any;
  calories: any;
  protein: any;
  fat: any;
  irons: any;
  crbo: any;
  cal: any;
  prot: any;
  price: any;
  fdates: any;
  caloriedata: any;
  carbos: number;
  calorie: number;
  proteins: any;
  ironss: number;
  childata: any;
  child: any;
  clidwisedata: any;
  selectchail: any;
  fiber: any;
  constructor(
    private alertController: AlertController,
    public navCtrl: NavController, private service: ServiceService,
    private config: ConfigService, public loader: LoaderService,
    public router: Router

  ) {
    this.logindata = JSON.parse(localStorage.getItem("ccs_login"))
    console.log(this.logindata)
    this.Datesave = new Date()
    this.Dateshow = this.DateSets(this.Datesave)
    this.datedis = this.DateSet(this.Datesave)
    this.datedi = this.DateSetd(this.Datesave)
    this.displydata = '0'
    console.log('111111')
  }

  ngOnInit() {
    console.log('2222222222')
    this.getfood()
    this.getdatewisefood()
    this.childdata()
  }

  ionViewWillEnter() {
    console.log('333333')
    this.getfood()
    this.getdatewisefood()
    this.childdata()
  }


  childdata() {
    this.loader.showLoader()
    var params = {
      user_id: this.logindata.id
    }
    console.log(params)
    this.service.getdemographicdata(params)
      .then((result) => this.setchilddata(result))
  }
  setchilddata(res) {
    console.log('setchilddata=> ', res)
    this.loader.dissmissLoader()
    if (res.ResponseCode == '1') {
      this.childata = res.data
      console.log('setchilddata=>', this.childata)
    }
  }

  backbutton() {
    this.navCtrl.pop()
  }

  detail(data) {
    console.log(data)
    this.navCtrl.navigateForward(['/detail', data]);
  }



  getdatewisefood() {
    const month = String(this.Datesave.getMonth() + 1).padStart(2, '0');
    console.log(month)
    console.log(this.datedi)
    this.fdate = 2023 + '-' + month + '-' + this.datedi
    var params = {
      user_id: this.logindata.id,
      fdate: this.fdate,
      child_id: this.child
    }
    console.log(params);
    this.service.getdatewisefood(params)
      .then((results) => this.setdatewisefood(results))
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




    console.log('setgetfood=> ', res)
    if (res.ResponseCode == '1') {
      this.datedata = res.data
      console.log(this.datedata)

      this.caloriedata = res.calories
      console.log(this.caloriedata)
      this.displydata = '1'
    } else {
      this.displydata = '0'
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
    this.fdate = 2023 + '-' + month + '-' + this.datedi
    var params = {
      cdate: this.fdate,
      child_id: this.child
    }
    this.service.getneturition(params)
      .then((results) => this.setgetneturition(results))
}

  calcal(price) {
    var pr = 0;
    this.price = pr += + price;
    console.log(pr)
    return this.price
  }

  setgetneturition(res){

    console.log(res);
    

    if (res.ResponseCode == '1' && res.data) {

      this.fat = res.data.fats;
      this.ironss = res.data.iron;
      this.crbo = res.data.carbo;
      this.cal = res.data.calories;
      this.prot = res.data.proteins;
      this.fiber = res.data.fiber;
    }else{

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
    }
    console.log(params);
    this.service.getfood(params)
      .then((results) => this.setgetfood(results))
  }
  setgetfood(res) {
    console.log('setgetfood=> ', res)
    if (res.ResponseCode == '1') {
      this.foods = res.data
      console.log(this.foods)
    }
    this.getdatewisefood()
    this.conformdata()
  }

  DateChange(inx) {
    this.Datesave.setDate(this.Datesave.getDate() + inx);
    this.Dateshow = this.DateSets(this.Datesave)
    this.datedis = this.DateSet(this.Datesave)
    this.datedi = this.DateSetd(this.Datesave)
    this.conformdata()
    this.getdatewisefood()
  }

  DateSets(td) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return months[td.getMonth()] + ' ' + (td.getFullYear().toString()).slice(-4);
  }

  DateSet(td) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    this.dayago = days[td.getDay() - 1]
    this.dayafter = days[td.getDay() + 1]
    return days[td.getDay()];
  }
  DateSetd(td) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    this.mindate = td.getDate().toString() - 1
    this.maxdate = (td.getDate() + 1).toString()
    return ('0' + td.getDate().toString()).slice(-2);
  }

  conformdata() {
    // const year = this.Datesave.getFullYear()
    // const date = this.Datesave.getDate()
    // this.joined = [year, month, date].join('-');
    const month = String(this.Datesave.getMonth() + 1).padStart(2, '0');
    console.log(month)
    for (var i = 0; i < this.foods.length; i++) {
      this.date = this.foods[i].created_date
      let d = new Date(new Date(this.date).getTime())
      const monthapi = String(d.getMonth() + 1).padStart(2, '0');
      // console.log(monthapi)
      this.date2 = d.toISOString().slice(8, 10);
      this.date1 = d.toISOString().slice(8, 10);
      if (this.date2 === this.datedi && month == monthapi) {
        this.displydatas = '1'
      } else {
        this.displydatas = '0'
      }
      // console.log(this.date2, '===', this.datedi, '&&', month, ' ==', monthapi, this.displydatas)
    }
  }
  addfood(id) {
    if (this.child) {
      let NavigationExtras: NavigationExtras = { state: { 'food_data': id, 'child_data': this.child } }
      console.log(NavigationExtras)
      this.router.navigate(['/food-add'], NavigationExtras)
    } else {
      alert('select child')
    }
  }
  editfood_details(data) {
    let NavigationExtras: NavigationExtras = { state: { 'food_data': data.food, 'all_data': data, 'child_data': this.child } }
    console.log(NavigationExtras)
    this.router.navigate(['/food-add'], NavigationExtras)
  }

  mealsc(cal) {
    return cal.toString().split("-")[1]
  }
  calcunt(cal) {
    return cal.toString().split("-")[0]
  }
  
  timerset(ftime) {
    let d = ftime.split('T')[1];
    let m = d.split(':')[0];
    let n = d.split(':')[1];
    var AmOrPm = m >= 12 ? 'PM' : 'AM';
    m = (m % 12) || 12;
    return m + ":" + n + AmOrPm;
  }
}
