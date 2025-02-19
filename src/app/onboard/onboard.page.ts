import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.page.html',
  styleUrls: ['./onboard.page.scss'],
})
export class OnboardPage implements OnInit {

  constructor(public navCtrl: NavController) {  }

  ngOnInit() {
  }

  next(){

    this.navCtrl.navigateForward('/onboard2');
  }


}
