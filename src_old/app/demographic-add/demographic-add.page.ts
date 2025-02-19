import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController, NavController } from '@ionic/angular';
import { ConfigService } from '../config.service';
import { LoaderService } from '../loader.service';
import { ServiceService } from '../service.service';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';

@Component({
  selector: 'app-demographic-add',
  templateUrl: './demographic-add.page.html',
  styleUrls: ['./demographic-add.page.scss'],
})
export class DemographicAddPage implements OnInit {
  name: any;
  dob: any;
  parent_occupation: any;
  gender: any;
  education_family_head: any;
  monthly_income: any;
  history_cancer: any;
  type_of_treatment: any;
  menstrual_status: any;
  logindata: any;
  Myimage: any;
  croppedImagePath: any;
  image: any;
  description: any;

  constructor(
    public navCtrl: NavController,
    private camera: Camera,
    public actCtrl: ActionSheetController,
    public actionSheetController: ActionSheetController,
    private service: ServiceService,
    public loader: LoaderService,
    private config: ConfigService,
    private transfer: FileTransfer,

  ) {
    this.logindata = JSON.parse(localStorage.getItem("ccs_login"))
    console.log(this.logindata)
  }

  ngOnInit() {
  }

  backbutton() {
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
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE,
      targetHeight: 500,
      targetWidth: 500,
    }
    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/png;base64,' + imageData;
      this.croppedImagePath = base64Image;
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
    fileTransfer.upload(image, this.config.imgapi + 'imageupload.php', options)
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

  validmess() {
    if (!this.name) {
      alert('Enter Name...')
      return false;
    }
    if (!this.dob) {
      alert('Enter dob...')
      return false;
    }
    if (!this.gender) {
      alert('Enter gender...')
      return false;
    }
    if (!this.parent_occupation) {
      alert('Enter parent_occupation...')
      return false;
    }
    if (!this.education_family_head) {
      alert('Enter education_family_head...')
      return false;
    }
    if (!this.monthly_income) {
      alert('Enter monthly_income...')
      return false;
    }
    if (!this.history_cancer) {
      alert('Enter history_cancer...')
      return false;
    }
    if (!this.type_of_treatment) {
      alert('Enter type_of_treatment...')
      return false;
    }
    if (!this.menstrual_status) {
      alert('Enter menstrual_status...')
      return false;
    }
    return true;
  }
  submit() {
    if (this.validmess()) {
      this.loader.showLoader()
      var params = {
        user_id: this.logindata.id,
        image: this.Myimage,
        name: this.name,
        dob: this.dob,
        gender: this.gender,
        parent_occupation: this.parent_occupation,
        education_family_head: this.education_family_head,
        monthly_income: this.monthly_income,
        history_cancer: this.history_cancer,
        type_of_treatment: this.type_of_treatment,
        menstrual_status: this.menstrual_status
      }
      console.log(params)
      this.service.adddemographicdata(params)
        .then((result) => this.setdemographicdata(result))
    }
  }
  setdemographicdata(result) {
    console.log(result)
    this.loader.dissmissLoader()
    if (result.ResponseCode == '1') {

    }
    else {
      alert(result.ResponseMsg)
    }
  }
}
