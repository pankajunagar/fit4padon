import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ServiceService } from '../service.service';
import { ConfigService } from '../config.service';
import { ActivatedRoute } from '@angular/router';
import { LoaderService } from '../loader.service';


@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {
  today = new Date();
  showButton: boolean;
  logindata: any;
  interval;
  newdis = 1;
  hidevalue: any;
  val: number;
  veriotp: string;
  regidata: any;
  otp: any;
  constructor(public navctrl: NavController, private service: ServiceService,
    private config: ConfigService, public router: ActivatedRoute, public loader: LoaderService,) {
    this.regidata = this.router.snapshot.params;
    console.log(this.regidata);
  }

  ngOnInit() {
  }
 
  otpvalid(){
    if(!this.otp){
      alert("Please Enter Your Otp");
      return false
    }
    return true
  }
  verify() {
    if(this.otpvalid()){
    var params = {
      user_id: this.regidata.userid,
      otp: this.otp
    }
    console.log(params);
    this.service.verifyotp(params)
      .then((result) => this.setotp(result))
  }
}
  setotp(result) {
    console.log(result)
    if (result.ResponseCode == '1') {
      this.navctrl.navigateForward('/login')
    } else {
      alert(result.ResponseMsg)
    }
  }
  reotp() {
    this.loader.showLoader()
    var params = {
      user_id: this.regidata.userid,
    }
    console.log(params);
    this.service.reotp(params)
      .then((result) => this.setreotp(result))
  }
  setreotp(result) {
    console.log(result)
    this.loader.dissmissLoader()
    if (result.ResponseCode == '1') {

    } else {
      alert(result.ResponseMsg)
    }
  }
}
