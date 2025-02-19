import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  datashowpg: any;
  cuerntlat: any;
  cuerntlang: any;
  logindata: any;

  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public splashScreen: SplashScreen,
  ) {
    this.intializeApp()
  }


  async intializeApp() {
    this.platform.ready().then(() => {
      setTimeout(() => {
        this.splashScreen.hide();
      }, 1000);
      this.logindata = JSON.parse(localStorage.getItem("ccs_login"));
      console.log(this.logindata)
      if (this.logindata) {
        this.navCtrl.navigateRoot('/home')
        // this.navCtrl.navigateRoot('/startslide')

      }
      else {
        this.navCtrl.navigateRoot('/startslide')
      }
    })
  }

}
