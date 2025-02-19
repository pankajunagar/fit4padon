import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-diet-add',
  templateUrl: './diet-add.page.html',
  styleUrls: ['./diet-add.page.scss'],
})
export class DietAddPage implements OnInit {

  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  backbutton() {
    this.navCtrl.pop()
  }

}
