import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { ConfigService } from '../config.service';
import { LoaderService } from '../loader.service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-diet-history',
  templateUrl: './diet-history.page.html',
  styleUrls: ['./diet-history.page.scss'],
})
export class DietHistoryPage implements OnInit {
  logindata: any;
  graphicsdata: any;
  date2: any;
  date1: any;
  diet: any;
  dietdata: any;

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
    this.getdiet()
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

  getdiet() {
    this.loader.showLoader()
    var params = {
      user_id: this.logindata.id
    }
    console.log(params)
    this.service.getdiet(params)
      .then((result) => this.setgetdiet(result))
  }
  setgetdiet(res) {
    console.log('setgetdiet=> ', res)
    this.loader.dissmissLoader()
    if (res.ResponseCode == '1') {
      this.diet = res.data
      console.log(this.diet)
    }
  }

  deletediet(id){
    this.loader.showLoader()
    var params = {
      id: id
    }
    console.log(params)
    this.service.deletediet(params)
      .then((result) => this.deletedietmsg(result))

  }
  deletedietmsg(res){
    
    this.loader.dissmissLoader()
    if (res.ResponseCode == '1') {
     alert('Successfully deleted');
     this.getdiet();
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
  backbutton() {
    this.navCtrl.pop()
  }


  detailopen(data) {
    // if (i == '0') {
    //   this.navCtrl.navigateForward(["/diet-add",{'key':0}])
    // } else {
    if (this.diet) {
      for (var x = 0; x < this.diet.length; x++) {
        if (data.id == this.diet[x].child_id) {
          this.dietdata = this.diet[x]
        }
      }
    }

    if (!this.dietdata) {
      this.dietdata = data
    }

    console.log(this.dietdata)
    this.navCtrl.navigateForward(["/diet-add", this.dietdata])
  }
}

// }
