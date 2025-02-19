import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  isLoading: boolean;

  constructor(private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingController: LoadingController) { }

    async showAlert(title, text) {
      const alert = await this.alertCtrl.create({
        header: title,
        // subHeader: Subtitle,
        message: text,
        buttons: ['ok']
      });
      await alert.present();
    }
  
    async showLoader() {
      this.isLoading = true;
      return await this.loadingController.create({
        duration: 8000,
      }).then(a => {
        a.present().then(() => {
          if (!this.isLoading) {
            a.dismiss().then();
          }
        });
      });
    }
  
    async showToast(msg) {
      const alert = await this.toastCtrl.create({
        // header: title,
        // subHeader: Subtitle,
        message: msg,
        buttons: ['ok']
      });
      await alert.present();
    }
  
    async dissmissLoader() {
      this.isLoading = false;
      return await this.loadingController.dismiss().then();
    }
  }
