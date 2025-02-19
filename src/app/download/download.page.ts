import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { ConfigService } from '../config.service';
import { LoaderService } from '../loader.service';
import { ServiceService } from '../service.service';
//import { WebView } from '@awesome-cordova-plugins/ionic-webview/ngx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-download',
  templateUrl: './download.page.html',
  styleUrls: ['./download.page.scss'],
})
export class DownloadPage implements OnInit {
  downloddata: any;
  date2: string;
  month: number;
  pdffopener: any;

  constructor(
    private alertController: AlertController,
    public navCtrl: NavController, private service: ServiceService, public router: ActivatedRoute,

    private config: ConfigService, public loader: LoaderService,
    // private webview: WebView
    private fileOpener: FileOpener,
    private file: File,
    private transfer: FileTransfer,
    private iab: InAppBrowser
  ) { }
  ngOnInit() {
    this.getdownloads()
  }

  backbutton() {
    this.navCtrl.pop()
  }
  getdownloads() {
    this.loader.showLoader()
    this.service.getdownloads()
      .then((results) => this.setgetdownloads(results))
  }
  setgetdownloads(res) {
    console.log(res)
    this.loader.dissmissLoader()
    if (res.ResponseCode == '1') {
      this.downloddata = res.data
      console.log('downloaddata=> ', this.downloddata)
    }
  }
  Ciratifile(fl) {
    var sdff = fl.substr(fl.lastIndexOf('.') + 1)
    if (sdff == 'jpg' || sdff == 'JPG' || sdff == 'png' || sdff == 'PNG') {
      return 'PNG'
    } else if (sdff == 'mp3') {
      return "MP3"
    } else if (sdff == 'pdf') {
      return 'PDF'
    } else if (sdff == 'mp4') {
      return 'MP4'
    }
  }

  docfile(fileName) {
    this.pdffopener = this.config.imgpdf  + fileName
    var urlimg = this.pdffopener.replace(' ', '%20');
    var urlim = urlimg.replace(' ', '%20');
    var urli = urlim.replace(' ', '%20');
    var url = urli.replace(' ', '%20');
    console.log(url)

    const browser = this.iab.create(url, '_system');

    // this.fileOpener.open(url, 'application/pdf')
    // .then(() => console.log('File opened successfully'))
    // .catch(e => console.log('Error opening file', e));
  
    
    // let dir_name = 'Download';
    // let file_name =  this.pdffopener;
    // console.log(file_name)
    // var imagePath =  this.pdffopener;
    // console.log(imagePath)
    // const fileTransfer: FileTransferObject = this.transfer.create();
    // let result = this.file.createDir(this.file.externalRootDirectory, dir_name, true);
    // console.log(result)
    // result.then((resp) => {
    //   var path = resp.toURL();
    //   console.log(path);
    //   fileTransfer.download(imagePath, path + file_name)
    //     .then((data) => {
    //       console.log(data)
    //       console.log('download complete: ' + data.toURL())
    //       this.fileOpener.open(path + file_name, 'application/pdf')
    //         .then(() => console.log('File is opened'))
    //         .catch(e => {
    //           console.log('Error opening file', e)
    //         })
    //     }, (error) => {
    //       console.log(error)

    //     });
    // }, (err) => {
    //   console.log('error on creating path : ' + err);
    // });

  }

  chkdate(td) {
    let d = new Date(new Date(td))
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[d.getMonth()] + ' ' + d.getFullYear();
  }
  findextin(data) {
    return data.slice(-3)
  }
}
