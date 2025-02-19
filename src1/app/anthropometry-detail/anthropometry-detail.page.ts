import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { ConfigService } from '../config.service';
import { LoaderService } from '../loader.service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-anthropometry-detail',
  templateUrl: './anthropometry-detail.page.html',
  styleUrls: ['./anthropometry-detail.page.scss'],
})
export class AnthropometryDetailPage implements OnInit {

  Dateshow: any;
  Datesave: Date;
  logindata: any;
  data: any;
  anthropometry: any;
  cdate: any;
  selectdate: any;
  date: any;
  date2: string;
  date1: string;
  displydata: any;
  datedis: any;
  datedi: any;
  dayago: string;
  dayafter: string;
  mindate: number;
  maxdate: any;
  disdata: any;
  joined: string;
  joineda: string;
  disdatas: any;

  constructor(public navCtrl: NavController, public router: ActivatedRoute,
    private service: ServiceService,
    private alertController: AlertController,
    private config: ConfigService, public loader: LoaderService) {
    this.logindata = JSON.parse(localStorage.getItem("ccs_login"));
    console.log(this.logindata)
    this.data = this.router.snapshot.params
    console.log(this.data)
    this.Datesave = new Date()
    this.displydata = '0'
    this.Dateshow = this.DateSets(this.Datesave)
    this.datedi = this.DateSetd(this.Datesave)
    this.getanthropometrydata()
  }



  ngOnInit() {
  }

  backbutton() {
    this.navCtrl.pop()
  }
  getanthropometrydata() {
    this.loader.showLoader()
    var params = {
      user_id: this.logindata.id,
      demographic_id: this.data.id
    }
    console.log(params)
    this.service.getanthropometrydata(params)
      .then((result) => this.setgetanthropometrydata(result))
  }
  setgetanthropometrydata(res) {
    console.log('setgetanthropometrydata=> ', res)
    this.loader.dissmissLoader()
    if (res.ResponseCode == '1') {
      this.anthropometry = res.data
    }
    this.conformdata()
  }
  DateChange(inx) {
    this.Datesave.setDate(this.Datesave.getDate() + inx);
    this.Dateshow = this.DateSets(this.Datesave)
    this.datedi = this.DateSetd(this.Datesave)
    this.conformdata()
  }

  DateSets(td) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[td.getDay()] + ', ' + ('0' + td.getDate().toString()).slice(-2) + ' ' + months[td.getMonth()] + ' ' + (td.getFullYear().toString()).slice(-2);
  }

  DateSetd(td) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    this.mindate = td.getDate().toString() - 1
    this.maxdate = (td.getDate() + 1).toString()
    return ('0' + td.getDate().toString()).slice(-2);
  }


  conformdata() {

    const year = this.Datesave.getFullYear()
    const date = this.Datesave.getDate()
    const month = String(this.Datesave.getMonth() + 1).padStart(2, '0');
    this.joined = [year, month, date].join('');

    this.disdatas = []
    for (var i = 0; i < this.anthropometry.length; i++) {
      this.date = this.anthropometry[i].date
      let d = new Date(new Date(this.date).getTime())
      const yeara = d.getFullYear()
      const datea = d.getDate()
      const montha = String(d.getMonth() + 1).padStart(2, '0');
      this.joineda = [yeara, montha, datea].join('');

      if (this.joined === this.joineda) {
        this.displydata = '1'
        this.disdata = this.anthropometry[i]
        break
      } else {
        this.displydata = '0'
        this.disdatas.push(this.anthropometry[i])
      }
    }
    console.log(this.displydata, '=====', this.disdata)
  }
}
