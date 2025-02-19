import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-earlymorning',
  templateUrl: './earlymorning.page.html',
  styleUrls: ['./earlymorning.page.scss'],
})
export class EarlymorningPage implements OnInit {

  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  backbutton() {
    this.navCtrl.pop()
  }

}
