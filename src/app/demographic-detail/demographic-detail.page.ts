import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { ConfigService } from '../config.service';
import { LoaderService } from '../loader.service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-demographic-detail',
  templateUrl: './demographic-detail.page.html',
  styleUrls: ['./demographic-detail.page.scss'],
})
export class DemographicDetailPage implements OnInit {
  logindata: any;
  data: any;


  constructor(public navCtrl: NavController, public router: ActivatedRoute,
    private service: ServiceService,
    private alertController: AlertController,
    private config: ConfigService, public loader: LoaderService) {
    this.logindata = JSON.parse(localStorage.getItem("ccs_login"));
    console.log(this.logindata)
    this.data = this.router.snapshot.params
    console.log(this.data)
  }

  ngOnInit() {
  }

  backbutton() {
    this.navCtrl.pop()
  }

}
