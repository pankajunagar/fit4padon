import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController, AlertController, NavController } from '@ionic/angular';
import { ConfigService } from '../config.service';
import { LoaderService } from '../loader.service';
import { ServiceService } from '../service.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.page.html',
  styleUrls: ['./food-add.page.scss'],
})
export class FoodAddPage implements OnInit {
  Dateshow: any;
  Datesave: Date;
  datedis: any;
  datedi: any;
  mindate: number;
  maxdate: number;
  dayago: any;
  dayafter: string;
  logindata: any;
  category: any;
  foods: any;
  joined: string;
  date: any;
  date2: string;
  displydata: any;
  date1: any;
  fdate: any;
  ftime: any;
  qty: any;
  apidate: any;
  chkid: any;
  other_foods:any;
  ffod: any;
  data: any;
  food: any;
  food_data: any;
  child_data: any;
  dynamicData: any;
  minimum: any;
  currentDate: string;
  currentTime: string;
  options: any;
  tm: any;
  Myimage: any;
  croppedImagePath: any;
  image: any;
  id: any;
  all_data: void;
  alldata: any;
  seledate: string;
  datadate: any;
  constructor(
    private alertController: AlertController,
    public navCtrl: NavController, private service: ServiceService, public router: ActivatedRoute,
    private config: ConfigService, public loader: LoaderService,
    public routers: Router,
    private camera: Camera,
    private transfer: FileTransfer,
    public actionSheetController: ActionSheetController,
  ) {
    const now = new Date();
    const isoTime = now.toISOString() // extract time part (HH:mm)
    this.currentDate = isoTime;
    var today = new Date();

    this.minimum = today.getHours() + ":" + today.getMinutes();
    console.log('mini time =>>> ', this.minimum)
    this.logindata = JSON.parse(localStorage.getItem("ccs_login"))
    console.log(this.logindata)
    this.displydata = '0'
    this.chkid = []

    // this.router.queryParams.subscribe(params => {
    //   if (this.routers.getCurrentNavigation().extras.state) {
    this.food_data = this.routers.getCurrentNavigation().extras.state.food_data;
    console.log(this.food_data)
    this.child_data = this.routers.getCurrentNavigation().extras.state.child_data;
    console.log(this.child_data)
    this.alldata = this.routers.getCurrentNavigation().extras.state.all_data
    console.log(this.alldata)

    this.getfood(this.child_data)
    if (this.alldata) {
      console.log('11111111111111')
      this.ftime = this.alldata.time
      this.qty = this.alldata.qty
      this.datadate = this.alldata.date
      this.other_foods = this.alldata.other_foods
      this.Myimage = this.alldata.photo
      this.Datesave = new Date(this.datadate)
    } else {
      this.Datesave = new Date()
    }
    console.log(this.Datesave)
    this.Dateshow = this.DateSets(this.Datesave)
    this.datedis = this.DateSet(this.Datesave)
    this.datedi = this.DateSetd(this.Datesave)
    // }
    // });
  }

  ngOnInit() {

  };

  backbutton() {
    console.log('back')
    this.navCtrl.pop()
  }
  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: "Select Image source",
      buttons: [{
        text: 'Load from Library',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Use Camera',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }
  pickImage(sourceType) {
    console.log('sourchtype=>> ',sourceType)
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE,
      targetHeight: 500,
      targetWidth: 500,
    }
    console.log('option=>> ',options)
    this.camera.getPicture(options).then((imageData) => {
      console.log('under==>> ',imageData)
      let base64Image = 'data:image/png;base64,' + imageData;
      this.croppedImagePath = base64Image;
      console.log('cropedimg==> ',this.croppedImagePath)
      this.upload(this.croppedImagePath);
    },
      (err) => {
        console.log(err);
      });

  }
  upload(image) {
    var d = new Date();
    var n = d.getTime();
    let options: FileUploadOptions = {
      fileKey: "image",
      fileName: "image_" + n.toString() + ".png",
      chunkedMode: false,
      mimeType: "image/png"
    }; console.log(options)
    const fileTransfer: FileTransferObject = this.transfer.create();
    fileTransfer.upload(image, this.config.api + 'imageupload.php', options)
      .then((data) => {
        console.log("data:", data.response)
        var imgdata = JSON.parse(data.response)
        console.log(imgdata)
        if (imgdata.ResponseCode == 1) {
          console.log(imgdata.image_url)
          this.image = imgdata.image_url
          this.Myimage = this.image
          console.log(this.Myimage)
          alert('Image Uploaded')
        }
      })
  }

  detail(data) {
    this.navCtrl.navigateForward(['/detail', data]);
  }
  DateSets(td) {
    console.log(td)
    this.apidate = td.getFullYear().toString().slice(-4) + '-' + ('0' + (td.getMonth() + 1).toString().slice(-2)) + '-' + ('0' + td.getDate().toString()).slice(-2)
    console.log(this.apidate)
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return months[td.getMonth()] + ' ' + (td.getFullYear().toString()).slice(-4);
  }

  DateSet(td) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    this.dayago = days[td.getDay() - 1]
    this.dayafter = days[td.getDay() + 1]
    return days[td.getDay()];
  }

  DateSetd(td) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    this.mindate = td.getDate().toString() - 1
    this.maxdate = (td.getDate() + 1).toString()
    return ('0' + td.getDate().toString()).slice(-2);
  }

  DateChange(inx) {
    this.Datesave.setDate(this.Datesave.getDate() + inx);
    this.Dateshow = this.DateSets(this.Datesave)
    this.datedis = this.DateSet(this.Datesave)
    this.datedi = this.DateSetd(this.Datesave)
  }

  getfood(cid) {
    var params = {
      user_id: this.logindata.id,
      child_id: cid
    }
    console.log(params);
    this.service.getfood(params)
      .then((results) => this.setgetfood(results))
  }
  setgetfood(res) {
    console.log('setgetfood=> ', res)
    if (res.ResponseCode == '1') {
      this.foods = res.data
      console.log(this.foods)
      console.log(this.food_data)
      for (var x = 0; x < this.foods.length; x++) {
        if (this.food_data == this.foods[x].id) {
          this.food = this.foods[x].food
          console.log(this.food)
        }
      }
    }

  }
  chk(data) {
    this.chkid = data
    console.log(this.chkid)
    // if (!this.chkid.includes(data)) {
    //   this.chkid.push(data)
    //   console.log(this.chkid.length)
    // }
  }
  valid() {
    
    
    if (!this.ftime) {
      alert('Please Select Time..')
      return false
    }
    

    this.options = { hour: 'numeric', minute: 'numeric', hour12: true };
    this.currentTime = new Date().toLocaleTimeString('en-US', this.options);
    console.log(this.ftime)
    let d = this.ftime.split('T')[1];
    let m = d.split(':')[0];
    let n = d.split(':')[1];
    var AmOrPm = m >= 12 ? 'PM' : 'AM';
    m = (m % 12) || 12;
    this.tm = m + ":" + n + AmOrPm;
    console.log(this.currentTime.slice(-2), this.tm.slice(-2), this.currentTime.slice(0, 1), m)

    /*
    if (this.currentTime.slice(-2) != this.tm.slice(-2)) {
      alert('Please select ' + this.currentTime.slice(-2) + '..')
      return false
    }
    */
    /*
    if (this.currentTime.slice(0, 1) > m) {
      alert('Please select valid hours...')
      return false
    }
    */
    if (!this.qty) {
      alert('Please Enter Quantity..')
      return false
    }
    return true
  }
  add() {
    if (this.valid()) {
      var params = {
        user_id: this.logindata.id,
        fdate: this.apidate,
        ftime: this.ftime,
        food: this.chkid,
        qty: this.qty,
        child_id: this.child_data,
        other_foods:this.other_foods,
        photo:this.Myimage
      }
      console.log(params);
      this.service.addfood_details(params)
        .then((results) => this.setaddfood_details(results))
    }
  }
  setaddfood_details(res) {
    console.log('setgetfood=> ', res)
    if (res.ResponseCode == '1') {
      alert("Details successfully submitted");
      this.navCtrl.navigateBack('/fmonitoring')
    }
  }

  editfood_details() {
    if (this.valid()) {
      var params = {
        id: this.alldata.id,
        fdate: this.apidate,
        ftime: this.ftime,
        food: this.food_data,
        qty: this.qty,
        other_foods:this.other_foods,
        photo:this.Myimage
      }
      console.log(params)
      this.service.editfood_details(params)
        .then((results) => this.setaddfood_details(results))
    }

  }
}

