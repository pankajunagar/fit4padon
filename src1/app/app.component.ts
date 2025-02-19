import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { NavController, Platform } from '@ionic/angular';
import { ConfigService } from './config.service';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';


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
    public config :ConfigService,
    private firebaseX: FirebaseX
  ) {
    this.intializeApp()
  }


  async intializeApp() {
    this.platform.ready().then(() => {
      setTimeout(() => {
        this.splashScreen.hide();
      }, 1000);

      if (this.platform.is('cordova')) {
        this.firebaseX.getToken().then((token) => {
          console.log('THe first===>', token);
          localStorage.setItem('compfcmid', token);
        }).catch((error) => {
          console.error('Error getting token', error)
        });

        this.firebaseX.onMessageReceived().subscribe((data) => {
          if (data['tap']) {
            console.log('tapped data663', data);
          }
        });
      }

      this.logindata = JSON.parse(localStorage.getItem("ccs_login"));
      console.log(this.logindata)
      if (this.logindata) {
        this.navCtrl.navigateRoot('/home')
        // this.navCtrl.navigateRoot('/startslide')
      }else {
        this.navCtrl.navigateRoot('/startslide')
        // this.navCtrl.navigateRoot('/home')

      }
    })
  }

}
