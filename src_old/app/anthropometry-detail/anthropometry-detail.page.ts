import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-anthropometry-detail',
  templateUrl: './anthropometry-detail.page.html',
  styleUrls: ['./anthropometry-detail.page.scss'],
})
export class AnthropometryDetailPage implements OnInit {

  Dateshow: any;
  Datesave: Date;

  constructor(
    public navCtrl: NavController
  ) {
    this.Datesave = new Date()
    this.Dateshow = this.DateSets(this.Datesave)
  }

  ngOnInit() {
  }

  backbutton() {
    this.navCtrl.pop()
  }

  DateChange(inx) {
    this.Datesave.setDate(this.Datesave.getDate() + inx);
    this.Dateshow = this.DateSets(this.Datesave)
  }

  DateSets(td) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[td.getDay()] + ', ' + ('0' + td.getDate().toString()).slice(-2) + ' ' + months[td.getMonth()] + ' ' + (td.getFullYear().toString()).slice(-2);
  }

}
