import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { ConfigService } from '../config.service';
import { LoaderService } from '../loader.service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  logindata: any;
  data: any;
  nutrition: any;

  slideOpts = {
    slidesPerView:4,
    width:450,
  }
  constructor(public navCtrl: NavController, public router: ActivatedRoute,
    private service: ServiceService,
    private alertController: AlertController,
    private config: ConfigService, public loader: LoaderService) {
    this.logindata = JSON.parse(localStorage.getItem("ccs_login"));
    console.log(this.logindata)
    this.data = this.router.snapshot.params
    console.log(this.data)
    
    // this.nutrition = this.data.nutrition.split(',')
    // console.log(this.nutrition)
  }

  ngOnInit() {
  }


  backbutton() {
    this.navCtrl.pop()
  }
}
