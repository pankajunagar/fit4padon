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
  date2: string;
  social_economical_strength: any;
  education: any;
  diganosis: any;
  patient_family_history_of_cancer: false;
  details: any;
  pc: any;
  monthlyincome: any;
  getdiganosi: any;
  ducationf: any;
  menstrual_status_data: any;
  gettype_of_treatment_data: any;
  type_of_treatment_data: any;

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
    this.getparent_occupation()
    this.getmonthly_income()
    this.getdiganosis()
    this.geteducation_of_the_family()
    this.getmenstrual_status()
    this.gettype_of_treatment()
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
  getparent_occupation() {
    this.loader.showLoader()
    this.service.getparent_occupation()
      .then((results) => this.setconfig(results))
  }
  setconfig(res) {
    this.loader.dissmissLoader()
    this.pc = res.data
    console.log('getparent_occupation=> ', this.pc)
  }
  getmonthly_income() {
    this.loader.showLoader()
    this.service.getmonthly_income()
      .then((results) => this.setmonthly_income(results))
  }
  setmonthly_income(res) {
    this.loader.dissmissLoader()
    this.monthlyincome = res.data
    console.log('getparent_occupation=> ', this.pc)
  }
  getdiganosis(){
    this.loader.showLoader()
      this.service.getdiganosis()
      .then((results) => this.setdiganosis(results))
  }
  setdiganosis(res){
    this.loader.dissmissLoader()
    this.getdiganosi = res.data
    console.log('getdiganosi=> ',this.getdiganosi)
  }

  geteducation_of_the_family(){
    this.loader.showLoader()
      this.service.geteducation_of_the_family()
      .then((results) => this.setducation_of_the_family(results))
  }
  setducation_of_the_family(res){
    this.loader.dissmissLoader()
    this.ducationf = res.data
    console.log('setducation_of_the_family=> ',this.ducationf)
  }

  getmenstrual_status(){
    this.loader.showLoader()
      this.service.getmenstrual_status()
      .then((results) => this.handlegetmenstrual_status(results))
  }
  handlegetmenstrual_status(res){
    this.loader.dissmissLoader()
    console.log(res.data);
    this.menstrual_status_data = res.data
  }

  gettype_of_treatment(){
    this.loader.showLoader()
      this.service.gettype_of_treatment()
      .then((results) => this.handlegettype_of_treatment(results))
  }
  handlegettype_of_treatment(res){
    this.loader.dissmissLoader()
    console.log(res.data);
    this.type_of_treatment_data = res.data
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
    // if (!this.history_cancer) {
    //   alert('Enter history_cancer...')
    //   return false;
    // }
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

    

   if(!this.patient_family_history_of_cancer){
     var patient_family_history_of_cancer1 = 'No';
   }else{
     var patient_family_history_of_cancer1 = 'Yes';
   }

    
    if (this.validmess()) {
      this.loader.showLoader()

      let d = new Date(new Date(this.dob).getTime())
      d.setMonth(d.getMonth())
      this.date2 = d.toISOString().slice(0, 10);
      console.log(this.date2)


      var params = {
        user_id: this.logindata.id,
        image: this.Myimage,
        name: this.name,
        dob: this.date2,
        gender: this.gender,
        parent_occupation: this.parent_occupation,
        education_family_head: this.education_family_head,
        monthly_income: this.monthly_income,
        history_cancer: this.history_cancer,
        type_of_treatment: this.type_of_treatment,
        menstrual_status: this.menstrual_status,
        education: this.education,
        diganosis: this.diganosis,
        description: this.details,
        patient_family_history_of_cancer: patient_family_history_of_cancer1
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
      alert("Details successfully submitted");
    }
    else {
      alert(result.ResponseMsg)
    }
  }

}
