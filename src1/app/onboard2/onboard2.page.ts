import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-onboard2',
  templateUrl: './onboard2.page.html',
  styleUrls: ['./onboard2.page.scss'],
})
export class Onboard2Page implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  next(){

    this.navCtrl.navigateForward('/onboard3');
  }
}
