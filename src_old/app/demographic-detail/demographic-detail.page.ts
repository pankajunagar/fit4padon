import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-demographic-detail',
  templateUrl: './demographic-detail.page.html',
  styleUrls: ['./demographic-detail.page.scss'],
})
export class DemographicDetailPage implements OnInit {

  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  backbutton() {
    this.navCtrl.pop()
  }

}
