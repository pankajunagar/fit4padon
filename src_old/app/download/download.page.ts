import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-download',
  templateUrl: './download.page.html',
  styleUrls: ['./download.page.scss'],
})
export class DownloadPage implements OnInit {

  constructor(
    public navCtrl: NavController
  ) { }
  ngOnInit() {
  }

  backbutton() {
    this.navCtrl.pop()
  }

}
