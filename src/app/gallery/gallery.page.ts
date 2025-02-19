import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
  video_id: any;
  safeSrc: any;

  constructor(
    private alertController: AlertController, public sanitizer: DomSanitizer,
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
  
  updateVideoUrl(url) {
    this.video_id = url.split('v=')[1];
    var ampersandPosition = this.video_id.indexOf('&');
    // console.log(ampersandPosition)
    if (ampersandPosition != -1) {
      this.video_id = 'https://www.youtube.com/embed/' + this.video_id.substring(0, ampersandPosition);
    }
    this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.video_id);
    // console.log(this.safeSrc)
    return this.safeSrc;
  }

}
