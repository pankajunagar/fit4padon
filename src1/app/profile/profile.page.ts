import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  backbutton() {
    this.navCtrl.pop()
  }
  logout(){
      localStorage.removeItem('ccs_login');
      this.navCtrl.navigateForward('/login')
  }

  updateprofile(){
    this.navCtrl.navigateForward('/userprofile')
  }

  changepasssword(){

    this.navCtrl.navigateForward('/changepassword')
  }
}
