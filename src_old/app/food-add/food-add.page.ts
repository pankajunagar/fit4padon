import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.page.html',
  styleUrls: ['./food-add.page.scss'],
})
export class FoodAddPage implements OnInit {

  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  };

  backbutton() {
    this.navCtrl.pop()
  }

  detail(){
    this.navCtrl.navigateForward('/detail');
  }

  

}
