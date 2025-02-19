import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-startslide',
  templateUrl: './startslide.page.html',
  styleUrls: ['./startslide.page.scss'],
})
export class StartslidePage implements OnInit {

  constructor(
    public navCtrl: NavController
  ) {

  }

  ngOnInit() {
    
  }

  GetStart() {
    this.navCtrl.navigateRoot('/onboard')
  }

}
