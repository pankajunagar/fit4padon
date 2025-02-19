import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { ConfigService } from '../config.service';
import { LoaderService } from '../loader.service';
import { ServiceService } from '../service.service';

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
  constructor(
    private alertController: AlertController,
    public navCtrl: NavController, private service: ServiceService, public router: ActivatedRoute,
    private config: ConfigService, public loader: LoaderService
  ) {
    this.logindata = JSON.parse(localStorage.getItem("ccs_login"))
    console.log(this.logindata)
    this.Datesave = new Date()
    this.Dateshow = this.DateSets(this.Datesave)
    this.datedis = this.DateSet(this.Datesave)
    this.datedi = this.DateSetd(this.Datesave)

  }

  ngOnInit() {
    this.getcategory()
  }
  backbutton() {
    this.navCtrl.pop()
  }

  detail() {
    // this.navCtrl.navigateForward('/detail');
  }


  getcategory() {
    this.loader.showLoader()
    this.service.getcategory()
      .then((results) => this.setcategory(results))
  }
  setcategory(res) {
    console.log('getcategory=> ', res)
    if (res.ResponseCode == '1') {
      this.category = res.data
      console.log(this.category)
    }
  }

  DateChange(inx) {
    this.Datesave.setDate(this.Datesave.getDate() + inx);
    this.Dateshow = this.DateSets(this.Datesave)
    this.datedis = this.DateSet(this.Datesave)
    this.datedi = this.DateSetd(this.Datesave)
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
}
