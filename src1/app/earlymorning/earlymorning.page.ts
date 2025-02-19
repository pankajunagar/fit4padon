import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { ConfigService } from '../config.service';
import { LoaderService } from '../loader.service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-earlymorning',
  templateUrl: './earlymorning.page.html',
  styleUrls: ['./earlymorning.page.scss'],
})
export class EarlymorningPage implements OnInit {
  logindata: any;
  graphicsdata: any;

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
}
