import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-demographic',
  templateUrl: './demographic.page.html',
  styleUrls: ['./demographic.page.scss'],
})
export class DemographicPage implements OnInit {

  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  backbutton() {
    this.navCtrl.pop()
  }
  
  add() {
    this.navCtrl.navigateForward("/demographic-add")
  }

  detailopen() {
    this.navCtrl.navigateForward("/demographic-detail")
  }


}
