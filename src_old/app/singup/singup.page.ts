import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ConfigService } from '../config.service';
import { LoaderService } from '../loader.service';
import { ServiceService } from '../service.service';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.page.html',
  styleUrls: ['./singup.page.scss'],
})
export class SingupPage implements OnInit {
  socialdiv: any;
  name: any;
  email: any;
  birthdate: any;
  mobileno: any;
  country: any;
  city: any;
  googledata: any;
  fbresponce: { accessToken: string; data_access_expiration_time: string; expiresIn: number; userID: string; };
  FacebokData: { email: any; first_name: any; picture: any; username: any; };
  pwd: any;
  confirmpwd: any;
  recode: any;
  type: any;
  DevicesId: any;
  alert: any;

  gmaildata: any;
  userpic: any;
  Myimage: string;
  isLoading: boolean;
  picture: string;
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off-outline';
  passwordType1: string = 'password';
  passwordIcon1: string = 'eye-off-outline';
  number: number;
  scannedData: any;
  encodedData: '';
  encodeData: any;
  inputData: any;
  scanSub: any;
  qrText: string;
  qrScanCtrl: any;
  isOn: boolean;
  QRSCANNED_DATA: string;
  terms: any;
  yyear: any;
  barcode: string;
  account_type: any;
  password: any;
  referral_code: any;
  registerdata: any;
  mobile: string = '';
  public phoneerrormes = '';
  public errormes = '';
  firstname: any;
  lastname: any;
  userData: any = {};
  constructor(public navctrl: NavController,
    private service: ServiceService,
    public loader: LoaderService,
    private config: ConfigService,
    private google: GooglePlus,
    public facebook: Facebook,
  ) { }

  ngOnInit() {
  }

  Loggin() {
    this.navctrl.navigateRoot("/login")
  }
  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off-outline' ? 'eye-outline' : 'eye-off-outline';
  }
  singupvalidate() {
    if (!this.firstname) {
      alert("Please enter your firstname");
      return false
    }

    if (!this.lastname) {
      alert("Please enter your lastname");
      return false
    }
    if (!this.email) {
      alert("Please enter your email address");
      return false;
    }
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(this.email)) {
      alert('Please provide a valid email address');
      return false;
    }
    if (this.mobile == "") {
      alert("Please enter your mobile number");
      return false;
    }
    // var pattern = /^[7-9][0-9]{9}$/;
    // if (!pattern.test(this.mobile)) {
    //   alert("Please provide 10 digits mobile number.");
    //   return false;
    // }

    if (!this.password) {
      alert("Please enter your password");
      return false
    }
    return true;
  }

  register() {
    if (this.singupvalidate()) {
      this.loader.showLoader()
      var params = {
        first_name: this.firstname,
        last_name: this.lastname,
        mobile: this.mobile,
        password: this.password,
        email: this.email,

      }
      console.log(params)
      this.service.signup(params)
        .then((result) => this.postdata(result))
    }
  }
  postdata(result) {
    console.log(result)
    this.loader.dissmissLoader()
    if (result.ResponseCode == '1') {
      this.registerdata = result.user_id;
      console.log(this.registerdata)
      this.navctrl.navigateForward(['/otp', { 'userid': this.registerdata }])
    } else {
      alert(result.ResponseMsg)
    }
  }
  //https://console.cloud.google.com/apis/credentials?project=ccsproject-381211
  //ionic cordova plugin remove cordova-plugin-googleplus --save --variable REVERSED_CLIENT_ID=com.googleusercontent.apps.iql1rrtvud3bn0d5a4lsp0kr86t020tk-549064080980 --variable WEB_APPLICATION_CLIENT_ID=549064080980-iql1rrtvud3bn0d5a4lsp0kr86t020tk.apps.googleusercontent.com
  //823210742701-uv7bdrq5d8509csvgs495lem7ukjoi35.apps.googleusercontent.com
  //ionic cordova plugin remove cordova-plugin-googleplus --save --variable REVERSED_CLIENT_ID=com.googleusercontent.apps.uv7bdrq5d8509csvgs495lem7ukjoi35-823210742701 --variable WEB_APPLICATION_CLIENT_ID=823210742701-uv7bdrq5d8509csvgs495lem7ukjoi35.apps.googleusercontent.com
  //823210742701-vqekal2ob6kfdlg6hfghkvpn74b59lst.apps.googleusercontent.com
  //ionic cordova plugin remove cordova-plugin-googleplus --save --variable REVERSED_CLIENT_ID=com.googleusercontent.apps.vqekal2ob6kfdlg6hfghkvpn74b59lst-823210742701 --variable WEB_APPLICATION_CLIENT_ID=823210742701-vqekal2ob6kfdlg6hfghkvpn74b59lst.apps.googleusercontent.com
  //ionic cordova plugin add cordova-plugin-googleplus --save --variable REVERSED_CLIENT_ID=com.googleusercontent.apps.tevg0tlu8min3aa922bl0c440kgqdbne-823210742701 --variable WEB_APPLICATION_CLIENT_ID=823210742701-tevg0tlu8min3aa922bl0c440kgqdbne.apps.googleusercontent.com
  //823210742701-tevg0tlu8min3aa922bl0c440kgqdbne.apps.googleusercontent.com

  googleLogin() {
    this.google.login({})
      .then((res) => {
        console.log(res)
        this.googledata = res;
        this.SocialLogin('google');
      })
      .catch(err => console.error(err));
  }


  //https://developers.facebook.com/apps/
  //ionic cordova plugin add cordova-plugin-facebook4 --variable APP_ID="600533891943866" --variable APP_NAME="cssnew"
  //https://developers.facebook.com/apps/1343105482901267/dashboard/
  //ionic cordova plugin add cordova-plugin-facebook4 --variable APP_ID="1343105482901267" --variable APP_NAME="ccs"
  //1343105482901267

  async fblogin() {
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
    console.log('type', type)
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

    // } else {
    //   alert("deviceid not generated")
    // }

  }
  // SocialLogin(type) {
  //   this.loader.showLoader()
  //   if (type == 'fb') {
  //     var params = {
  //       name: this.FacebokData.username,
  //       email: this.FacebokData.email,
  //       authid: this.fbresponce.userID,
  //       img: this.FacebokData.picture,
  //       device_id: this.DevicesId,
  //       mobile: this.mobileno,
  //     }
  //     console.log(params)
  //     this.service.socialsignup(params)
  //       .then((results) => this.handlensocialregister(results))
  //   }if(type == 'google') {
  //     var params = {
  //       name: this.gmaildata.displayName,
  //       email: this.gmaildata.email,
  //       authid: this.gmaildata.userId,
  //       img: this.gmaildata.imageUrl,
  //       device_id: this.DevicesId,
  //       mobile: this.mobileno,
  //     }
  //     console.log(params)
  //     this.service.socialsignup(params)
  //       .then((results) => this.handlensocialregister(results))
  //   }
  // }


  handlensocialregister(results) {
    console.log(results)
    if (results.ResponseCode == '1') {
      localStorage.setItem("ccs_login", JSON.stringify(results.user_data))
      this.config.refresh();
      this.navctrl.navigateRoot('/home')
    }
  }
}
