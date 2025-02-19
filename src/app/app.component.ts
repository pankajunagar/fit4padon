import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { NavController, Platform } from '@ionic/angular';
import { ConfigService } from './config.service';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
// import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';

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
    public config: ConfigService,
    private firebaseX: FirebaseX,
    // private fcm: FCM
  ) {
    this.intializeApp()

  }


  async intializeApp() {
    this.platform.ready().then(() => {
      setTimeout(() => {
        this.splashScreen.hide();
      }, 1000);
      console.log('this page app component ts...........')

      if (this.platform.is('cordova')) {

        this.firebaseX.getToken().then((token) => {
          console.log('THe first===>', token);
          localStorage.setItem('compfcmid', token);
        }).catch((error) => {
          console.error('Error getting token', error)
        });

        this.firebaseX.onMessageReceived().subscribe((data) => {
          console.log(`User opened a notification ${JSON.stringify(data)}`);
          if (data['tap']) {
            console.log('tapped data663', data);
            // const payload = JSON.parse(data.payload);
          }
        });
      }
      // this.fcm.getToken().then(token => {
      //   console.log('1111111111111=> ',token)
      // });
      // this.platform.ready()
      //   .then(() => {
      //     this.fcm.onNotification().subscribe(data => {
      //       if (data.wasTapped) {
      //         console.log("Received in background");
      //       } else {
      //         console.log("Received in foreground");
      //       };
      //     });

      //     this.fcm.onTokenRefresh().subscribe(token => {
            // Register your new token in your back-end if you want
        //     // backend.registerToken(token);
        //     console.log('2222222222=> ',token)
        //   });
        // })

      this.logindata = JSON.parse(localStorage.getItem("ccs_login"));
      console.log(this.logindata)
      if (this.logindata) {

        this.navCtrl.navigateRoot('/home')
        // this.navCtrl.navigateRoot('/startslide')
      } else {
        this.navCtrl.navigateRoot('/startslide')
        // this.navCtrl.navigateRoot('/home')

      }
    })
    // this.subscribeToTopic()
  }
  // subscribeToTopic() {
  //   this.fcm.subscribeToTopic('enappd');
  //   this.getToken()
  // }
  // getToken() {
  //   this.fcm.getToken().then(token => {
  //     // Register your new token in your back-end if you want
  //     // backend.registerToken(token);
  //   });
  // }
  // unsubscribeFromTopic() {
  //   this.fcm.unsubscribeFromTopic('enappd');
  // }
}
