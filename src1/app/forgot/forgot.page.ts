import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { LoaderService } from '../loader.service';
import { ServiceService } from '../service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {
  email: any;

  constructor(
    public navCtrl: NavController, private service: ServiceService,
    private config: ConfigService, public loader: LoaderService) { }

  ngOnInit() {
  }
  submit() {
    this.loader.showLoader()
    var params = {
      email: this.email
    }
    console.log(params)
    this.service.forgotpassword(params)
      .then((res) => this.handlensubmit(res))
  }


  handlensubmit(results) {
    console.log(results)
    this.loader.dissmissLoader()
    if (results.ResponseCode == '1') {
      this.loader.showAlert("", "A password reset email has been sent. Check your inbox!")
    }
    else {
      this.loader.showAlert("error", results.ResponseMsg)

    }
  }

}
