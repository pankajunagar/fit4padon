import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { ConfigService } from '../config.service';
import { LoaderService } from '../loader.service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  logindata: any;
  noti: any;
  fdate: any;
  Datesave: any;
  datedata: any;
  displydata: any;
  chiddata: any;

  constructor(
    private alertController: AlertController,
    public navCtrl: NavController, private service: ServiceService, public router: ActivatedRoute,
    private config: ConfigService, public loader: LoaderService
  ) {
    this.logindata = JSON.parse(localStorage.getItem("ccs_login"))
    console.log(this.logindata)
    this.getdemographicdata()
  }

  ngOnInit() {
    this.notification()
  }
  ionViewWillEnter() {
    this.getdemographicdata()
  }
  backbutton() {
    this.navCtrl.pop()
  }



  earlymorning() {
    this.navCtrl.navigateForward('/fmonitoring');
  }

  notification() {
    var params = {
      user_id: this.logindata.id
    }
    this.loader.showLoader()
    this.service.getnotification(params)
      .then((results) => this.setnoti(results))
  }
  setnoti(res) {
    this.loader.dissmissLoader()
    console.log('getconfig=> ', res)
    if (res.ResponseCode == '1') {
      this.noti = res.data
      console.log(this.noti)
    }
  }

  getdemographicdata() {
    this.loader.showLoader()
    var params = {
      user_id: this.config.logindata.id
    }
    console.log(params)
    this.service.getdemographicdata(params)
      .then((result) => this.setdemographicdata(result))
  }
  setdemographicdata(res) {
    console.log('setdemographicdata=> ', res)
    this.loader.dissmissLoader()
    if (res.ResponseCode == '1') {
      this.chiddata = res.data
      console.log('chiddata===>>', this.chiddata)
      for (var j = 0; j < this.chiddata.length; j++) {
        console.log('================', this.chiddata[j].id)
        this.getdatewisefood(this.chiddata[j].id)
      }
    }
  }
  getdatewisefood(cid) {
    const date = new Date();
    console.log(date);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    this.fdate = year + '-' + month + '-' + day
    var params = {
      user_id: this.logindata.id,
      fdate: this.fdate,
      child_id: cid
    }
    console.log(params);
    this.service.getdatewisefood(params)
      .then((results) => this.setdatewisefood(results))
  }
  setdatewisefood(res) {
    console.log('setgetfood=> ', res)
    if (res.ResponseCode == '0') {
      this.displydata = '0'
    }
    if (res.ResponseCode == '1') {
      this.datedata = res.data
      console.log(this.datedata)
      this.displydata = '1'
    } else {
      this.displydata = '0'
    }

  }
}
