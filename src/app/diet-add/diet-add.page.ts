import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { ConfigService } from '../config.service';
import { LoaderService } from '../loader.service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-diet-add',
  templateUrl: './diet-add.page.html',
  styleUrls: ['./diet-add.page.scss'],
})
export class DietAddPage implements OnInit {
  logindata: any;
  data: any;
  date2: any;
  date1: any;
  wakeup_time: any;
  bed_time: any;
  diet_type: any;
  detail: any;
  food_allergies: any;
  diet: any;
  dietdata: any;
  graphicsdata: any;
  childata: any;
  usrimg: any;
  bdate: any;
  chkd: number;
  datas: any;

  constructor(public navCtrl: NavController, public router: ActivatedRoute,
    private service: ServiceService,
    private alertController: AlertController,
    private config: ConfigService, public loader: LoaderService) {
    this.logindata = JSON.parse(localStorage.getItem("ccs_login"));
    console.log(this.logindata)
    this.data = this.router.snapshot.params
    console.log(this.data)
    // this.datas = this.router.snapshot.params.key
    // console.log(this.datas)


    if (this.data) {
      this.wakeup_time = this.data.wakeup_time,
        this.bed_time = this.data.bed_time,
        this.diet_type = this.data.diet_type,
        this.food_allergies = this.data.food_allergies
      // this.detail = this.data.detail
      if (this.data.detail == null || this.data.detail == 'null') {
        this.detail = ' '
      } else {
        this.detail = this.data.detail
      }
      // if (!this.data.detail) {
      //   this.detail = this.data.detail
      // }

    }




    this.getdemographicdata()
  }

  ngOnInit() {
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
      for (var x = 0; x < this.graphicsdata.length; x++) {
        if (this.data.child_id == this.graphicsdata[x].id) {
          console.log(this.graphicsdata[x])
          this.childata = this.graphicsdata[x]
          this.usrimg = this.childata.image
          this.bdate = this.childata.dob
          let d = new Date(new Date(this.bdate))
          d.setMonth(d.getMonth())
          this.date2 = d.toISOString().slice(0, 4);
          let newd = new Date(new Date())
          newd.setMonth(newd.getMonth())
          this.date1 = newd.toISOString().slice(0, 4);
          this.chkd = this.date1 - this.date2
        } else {
          if (this.data.id == this.graphicsdata[x].id) {
            console.log(this.graphicsdata[x])
            this.childata = this.graphicsdata[x]
            this.usrimg = this.childata.image
            this.bdate = this.childata.dob
            let d = new Date(new Date(this.bdate))
            d.setMonth(d.getMonth())
            this.date2 = d.toISOString().slice(0, 4);
            let newd = new Date(new Date())
            newd.setMonth(newd.getMonth())
            this.date1 = newd.toISOString().slice(0, 4);
            this.chkd = this.date1 - this.date2
          }
        }
      }
    }
  }
  backbutton() {
    this.navCtrl.pop()
  }

  changed(t) {
    //data.wakeup_time
    console.log(t.detail.value);

  }

  submit() {
    if (!this.wakeup_time) {
      alert('Please select wakeup time');
    } else if (!this.bed_time) {
      alert('Please select bed time');
    } else {
      this.loader.showLoader()
      if (!this.data.child_id) {
        var cid = this.data.id;
      } else {
        var cid = this.data.child_id;
      }
      var params = {
        user_id: this.logindata.id,
        wakeup_time: this.wakeup_time.substr(11, 8),
        bed_time: this.bed_time.substr(11, 8),
        diet_type: this.diet_type,
        detail: this.detail,
        food_allergies: this.food_allergies,
        //child_id: this.data.id
        child_id: cid
      }
      console.log(params)
      this.service.adddiet(params)
        .then((result) => this.handlediet(result))
    }
  }

  handlediet(result) {
    console.log(result)
    this.loader.dissmissLoader()
    if (result.ResponseCode == '1') {
      alert('Details successfully submitted');
      this.navCtrl.navigateRoot('/home')
    } else {
      alert(result.ResponseMsg);
    }
  }


  editdetail() {
    var params = {
      id: this.data.id,
      user_id: this.logindata.id,
      wakeup_time: this.wakeup_time,
      bed_time: this.bed_time,
      diet_type: this.diet_type,
      detail: this.detail,
      food_allergies: this.food_allergies,
      child_id: this.data.child_id
    }
    console.log(params)
    this.service.editdiet_history(params)
      .then((result) => this.handleditdetails(result))
  }

  handleditdetails(result) {
    console.log(result)
    this.loader.dissmissLoader()
    if (result.ResponseCode == '1') {
      alert('Details successfully edit');
      this.navCtrl.navigateRoot('/home')
    } else {
      alert(result.ResponseMsg);
    }
  }
}
