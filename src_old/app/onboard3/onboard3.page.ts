import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-onboard3',
  templateUrl: './onboard3.page.html',
  styleUrls: ['./onboard3.page.scss'],
})
export class Onboard3Page implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  finish(){
    this.navCtrl.navigateForward('/login');
  }
}
