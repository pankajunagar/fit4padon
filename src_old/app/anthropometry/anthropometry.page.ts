import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-anthropometry',
  templateUrl: './anthropometry.page.html',
  styleUrls: ['./anthropometry.page.scss'],
})
export class AnthropometryPage implements OnInit {

  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  backbutton() {
    this.navCtrl.pop()
  }

  detailopen(){
    this.navCtrl.navigateForward('/anthropometry-detail')
  }

}
