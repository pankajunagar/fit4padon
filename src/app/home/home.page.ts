import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { ConfigService } from '../config.service';
import { LoaderService } from '../loader.service';
import { ServiceService } from '../service.service';
import { DomSanitizer } from '@angular/platform-browser';

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
  graphicsdata: any;
  graphics: any;
  gname: any;
  gimage: any;
  anthropometry: any;
  anthropometrydata: any;
  aname: any;
  aimage: any;
  category: any;
  noti: any;
  fdate: any;
  Datesave: any;
  datedata: any;
  displydata: any;
  chiddata: any;
  biochemical: void;
  clinical: void;
  play_video: any;
  typesof: any;
  video_id: any;
  newoldurl: any;
  safeSrc: any;

  constructor(
    private alertController: AlertController, public sanitizer: DomSanitizer,
    public navCtrl: NavController, private service: ServiceService, public router: ActivatedRoute,
    private config: ConfigService, public loader: LoaderService
  ) {
    this.config.refresh()
    this.logindata = JSON.parse(localStorage.getItem("ccs_login"))
    console.log(this.logindata)
    this.data = [
      { id: "1", name: "Demographic Data", user: "Swetha | 12yrs | Female", imgs: "assets/imgs/demografy.png" },
      { id: "2", name: "Anthropomentry data", user: "Swetha | 124CM | 42KG", imgs: "assets/imgs/antropor.png" },
    ];
    this.getdemographicdata()
    this.getcategory()
    // this.getimagesvideos()
    this.getfood_details()
    this.notifications()
  }
  ionViewWillEnter() {
    this.getdemographicdata()
  }
  ngOnInit() {
    console.log('2222222222')
    console.log('Home Page');
  };

  demographic() {
    console.log('graphicsdata=>', this.graphicsdata)
    this.navCtrl.navigateForward('/demographic');
  };
  anthrophic() {
    this.navCtrl.navigateForward('/anthropometry');
  }
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
    this.navCtrl.navigateForward('/fmonitoring');
  }

  fmonitoring() {
    this.navCtrl.navigateForward('/fmonitoring')
  }

  FoodAdd() {
    this.navCtrl.navigateForward('/food-add');
  };

  play(id) {
    this.play_video = id
  }
  getcanfig() {
    this.loader.showLoader()
    this.service.getcanfig()
      .then((results) => this.setconfig(results))
  }
  setconfig(res) {
    this.loader.dissmissLoader()
    console.log('getconfig=> ', res)
  }
  profile() {
    this.navCtrl.navigateForward('/profile')
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
      this.graphics = res.data.reverse()
      this.graphicsdata = this.graphics[0]
      this.gname = this.graphicsdata.name
      this.gimage = this.graphicsdata.image
      this.biochemical = this.graphicsdata.biochemical
      this.clinical = this.graphicsdata.clinical
      console.log('graphicsdata=>', this.gname)
    }
  }
  getcategory() {
    this.loader.showLoader()
    this.service.getcategory()
      .then((result) => this.setgetcategory(result))
  }
  setgetcategory(res) {
    console.log('setgetcategory ===> ', res)
    this.loader.dissmissLoader()
    if (res.ResponseCode == '1') {
      this.category = res.data
      console.log(this.category)
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
      this.typesof = this.videos[1].url
      console.log('img=> ', this.images)
      console.log('video=> ', this.videos)
      console.log('typesof=> ', this.typesof)

      // this.video_id = this.typesof.split('v=')[1];
      // var ampersandPosition = this.video_id.indexOf('&');
      // console.log(ampersandPosition)
      // if (ampersandPosition != -1) {
      //   this.video_id = 'https://www.youtube.com/embed/' + this.video_id.substring(0, ampersandPosition);
      // }
      // console.log(this.video_id)

      // var video_id = this.typesof.split("v=")[1].substring(0, 11)
      // this.video_id = 'https://www.youtube.com/embed/' + video_id;
      // console.log(this.video_id)
      // this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.video_id);
      // console.log(this.safeSrc)

    } else {

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

  getfood_details() {
    this.loader.showLoader()
    var params = {
      user_id: this.logindata.id
    }
    console.log(params)
    this.service.getfood_details(params)
      .then((result) => this.setgetfood_details(result))
  }
  setgetfood_details(res) {
    console.log('setgetfood_details=> ', res)
    this.loader.dissmissLoader()
    if (res.ResponseCode == '1') {

    }
  }
  notifications() {
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
