import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { ConfigService } from '../config.service';
import { LoaderService } from '../loader.service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  data: any;
  images: any;
  videos: any;
  logindata: any;

  constructor(
    private alertController: AlertController,
    public navCtrl: NavController, private service: ServiceService, public router: ActivatedRoute,
    private config: ConfigService, public loader: LoaderService
  ) {
    this.logindata = JSON.parse(localStorage.getItem("ccs_login"))
    console.log(this.logindata)
    this.data = [
      { id: "1", name: "Demographic Data", user: "Swetha | 12yrs | Female", imgs: "assets/imgs/demografy.png" },
      { id: "2", name: "Anthropomentry data", user: "Swetha | 124CM | 42KG", imgs: "assets/imgs/antropor.png" },
    ];
  }

  ngOnInit() {
    console.log('Home Page');
    this.getcanfig()
    this.getimagesvideos()
    this.getdemographicdata()
  };

  demographic(id) {
    if (id == '1') {
      this.navCtrl.navigateForward('/demographic');
    } else {
      this.navCtrl.navigateForward('/anthropometry');
    };
  };

  DietHistrory() {
    this.navCtrl.navigateForward('/diet-history');
  };

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
    this.navCtrl.navigateForward('/earlymorning');
  }

  fmonitoring() {
    this.navCtrl.navigateForward('/fmonitoring')
  }

  FoodAdd() {
    this.navCtrl.navigateForward('/food-add');
  };

  getcanfig() {
    this.loader.showLoader()
    this.service.getcanfig()
      .then((results) => this.setconfig(results))
  }
  setconfig(res) {
    console.log('getconfig=> ', res)
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
    }
  }

  getimagesvideos() {
    this.loader.showLoader()
    this.service.getimagesvideos()
      .then((results) => this.setimagesvideos(results))
  }
  setimagesvideos(results) {
    console.log('setimagesvideos=> ', results)
    this.loader.dissmissLoader()
    if (results.ResponseCode == '1') {
      this.images = results.images
      this.videos = results.videos
      console.log('img=> ', this.images)
      console.log('video=> ', this.videos)
    } else {

    }
  }
}
