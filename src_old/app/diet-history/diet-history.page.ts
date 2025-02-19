import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-diet-history',
  templateUrl: './diet-history.page.html',
  styleUrls: ['./diet-history.page.scss'],
})
export class DietHistoryPage implements OnInit {

  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  backbutton() {
    this.navCtrl.pop()
  }

  detailopen() {
    this.navCtrl.navigateForward('/diet-add')
  }

}
