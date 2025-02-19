import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, Platform } from '@ionic/angular';
import { ServiceService } from '../service.service';
import { LoaderService } from '../loader.service';
import { ConfigService } from '../config.service';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
// import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off-outline';
  email: any;
  password: any;
  device_id: any;
  logindata: any;
  dateTime: string;
  mobile: any;
  googledata: any;
  ldata: any;
  fbresponce: { accessToken: string; data_access_expiration_time: string; expiresIn: number; userID: string; };
  FacebokData: { email: any; first_name: any; picture: any; username: any; };
  DevicesId: string;
  constructor(public navctrl: NavController,
    public alertCtrl: AlertController,
    private service: ServiceService,
    public loader: LoaderService,
    private facebook: Facebook,
    private googlePlus: GooglePlus,
    private platform: Platform,
    private fcm: FirebaseX,
    private config: ConfigService) {
  }

  ngOnInit() {
    if (this.platform.is('cordova')) {
      this.fcm.getToken().then((token) => {
        console.log('THe first===>', token);
        localStorage.setItem('compfcmid', token);
        this.DevicesId = token
      }).catch((error) => {
        console.error('Error getting token', error)
      });
    }
  }
  googleLogin() {
    console.log('google')
    this.googlePlus.login({})
      .then((res) => {
        
        console.log(res)
        this.googledata = res;
        this.SocialLogin('google');
      })
      .catch(err => console.error(err));
  }
  async fblogin() {
    console.log('fbbb')
    this.facebook.login(['public_profile', 'user_friends', 'email'])
      .then((response: FacebookLoginResponse) => {
        console.log('this.facebook')
        console.log(response)
        this.fbresponce = response.authResponse;
        console.log(this.fbresponce)
        this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {

          this.FacebokData = { email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name'] }
          console.log(this.FacebokData)
          this.SocialLogin('fb');
        });
      })
      .catch(err => console.error(err));
  }
  SocialLogin(type) {
    console.log('type=> ', type)
    if (type == 'fb') {
      var params = {
        name: this.FacebokData.username,
        email: this.FacebokData.email,
        authid: this.fbresponce.userID,
        img: this.FacebokData.picture,
        device_id: this.DevicesId
      }
      console.log(params);
      this.service.socialsignup(params)
        .then((results) => this.handlensocialregister(results))
    } else {
      var param = {
        name: this.googledata.displayName,
        email: this.googledata.email,
        authid: this.googledata.userId,
        img: this.googledata.imageUrl,
        device_id: this.DevicesId
      }
      console.log(param);
      this.service.socialsignup(param)
        .then((results) => this.handlensocialregister(results))
    }

  }

  handlensocialregister(results) {
    console.log(results)
    if (results.ResponseCode == '1') {
      localStorage.setItem("ccs_login", JSON.stringify(results.user_data))
      this.config.refresh();
      this.navctrl.navigateRoot('/home')
    }
  }

  singupvalidate() {
    if (!this.mobile) {
      alert("Please enter email OR mobile number");
      return false
    }
    if (!this.password) {
      alert("Please enter password");
      return false
    }
    return true;
  }

  Login() {
    if (this.singupvalidate()) {
      this.loader.showLoader()
      var params = {
        mobile: this.mobile,
        password: this.password,
        device_id: this.DevicesId
      }
      console.log(params)
      this.service.login(params)
        .then((result) => this.handleLogin(result))
    }
  }

  handleLogin(result) {
    console.log(result)
    console.log(result.user_data)
    this.ldata = result.user_data;
    console.log(this.ldata)
    this.loader.dissmissLoader()
    if (result.ResponseCode == '1') {
      localStorage.setItem("ccs_login", JSON.stringify(result.user_data))
      this.config.refresh();
      this.navctrl.navigateRoot('/home')
    } else {
      alert(result.ResponseMsg);
    }
  }

  singgup() {
    this.navctrl.navigateRoot('/singup')
  }

  forgot() {
    this.navctrl.navigateForward('/forgot')
  }

}