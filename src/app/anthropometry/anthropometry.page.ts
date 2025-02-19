import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { ConfigService } from '../config.service';
import { LoaderService } from '../loader.service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-anthropometry',
  templateUrl: './anthropometry.page.html',
  styleUrls: ['./anthropometry.page.scss'],
})
export class AnthropometryPage implements OnInit {
  logindata: any;
  graphicsdata: any;
  date2: any;
  date1: any;

  constructor(
    private alertController: AlertController,
    public navCtrl: NavController, private service: ServiceService, public router: ActivatedRoute,
    private config: ConfigService, public loader: LoaderService
  ) {
    this.logindata = JSON.parse(localStorage.getItem("ccs_login"))
    console.log(this.logindata)
  }

  ngOnInit() {
    this.getdemographicdata()
  }

  backbutton() {
    this.navCtrl.pop()
  }

  detailopen(i) {
    console.log('selected data=> ', this.graphicsdata[i])
    this.navCtrl.navigateForward(["/anthropometry-detail", this.graphicsdata[i]])
  }
  getdemographicdata() {
    this.loader.showLoader()
    var params = {
      user_id: this.logindata.id
    }
    console.log(params)
    this.service.getdemographicdata(params)
      .then((result) => this.setdemographicdata(result))
  }
  setdemographicdata(res) {
    console.log('setdemographicdata=> ', res)
    this.loader.dissmissLoader()
    if (res.ResponseCode == '1') {
      this.graphicsdata = res.data
      console.log('graphicsdata=>', this.graphicsdata)
    }
  }
  chkyear(date) {
    let d = new Date(new Date(date))
    d.setMonth(d.getMonth())
    this.date2 = d.toISOString().slice(0, 4);
    let newd = new Date(new Date())
    newd.setMonth(newd.getMonth())
    this.date1 = newd.toISOString().slice(0, 4);
    var chkd = this.date1 - this.date2
    return chkd
  }
}
