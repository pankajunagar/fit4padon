import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { ConfigService } from '../config.service';
import { LoaderService } from '../loader.service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  images: any;
  videos: any;

  constructor(
    private alertController: AlertController,
    public navCtrl: NavController, private service: ServiceService, public router: ActivatedRoute,
    private config: ConfigService, public loader: LoaderService
  ) { }

  ngOnInit() {
    this.getimagesvideos()
  }

  backbutton() {
    this.navCtrl.pop()
  }
  getimagesvideos() {
    this.loader.showLoader()
    this.service.getimagesvideos()
      .then((results) => this.setimagesvideos(results))
  }
  setimagesvideos(results) {
    console.log('setimagesvideos=> ', results)
    this.loader.dissmissLoader()
    if (results.ResponseCode == '1') {
      this.images = results.images
      this.videos = results.videos
      console.log('img=> ', this.images)
      console.log('video=> ', this.videos)
    } else {

    }
  }
}
