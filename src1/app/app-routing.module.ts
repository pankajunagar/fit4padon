import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./startslide/startslide.module').then( m => m.StartslidePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'startslide',
    loadChildren: () => import('./startslide/startslide.module').then( m => m.StartslidePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'singup',
    loadChildren: () => import('./singup/singup.module').then( m => m.SingupPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./forgot/forgot.module').then( m => m.ForgotPageModule)
  },
  {
    path: 'demographic',
    loadChildren: () => import('./demographic/demographic.module').then( m => m.DemographicPageModule)
  },
  {
    path: 'demographic-detail',
    loadChildren: () => import('./demographic-detail/demographic-detail.module').then( m => m.DemographicDetailPageModule)
  },
  {
    path: 'demographic-add',
    loadChildren: () => import('./demographic-add/demographic-add.module').then( m => m.DemographicAddPageModule)
  },
  {
    path: 'anthropometry',
    loadChildren: () => import('./anthropometry/anthropometry.module').then( m => m.AnthropometryPageModule)
  },
  {
    path: 'anthropometry-detail',
    loadChildren: () => import('./anthropometry-detail/anthropometry-detail.module').then( m => m.AnthropometryDetailPageModule)
  },
  {
    path: 'diet-history',
    loadChildren: () => import('./diet-history/diet-history.module').then( m => m.DietHistoryPageModule)
  },
  {
    path: 'diet-add',
    loadChildren: () => import('./diet-add/diet-add.module').then( m => m.DietAddPageModule)
  },
  {
    path: 'food-add',
    loadChildren: () => import('./food-add/food-add.module').then( m => m.FoodAddPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'download',
    loadChildren: () => import('./download/download.module').then( m => m.DownloadPageModule)
  },
  {
    path: 'earlymorning',
    loadChildren: () => import('./earlymorning/earlymorning.module').then( m => m.EarlymorningPageModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./gallery/gallery.module').then( m => m.GalleryPageModule)
  },
  {
    path: 'foodmonitorning',
    loadChildren: () => import('./foodmonitorning/foodmonitorning.module').then( m => m.FoodmonitorningPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'onboard',
    loadChildren: () => import('./onboard/onboard.module').then( m => m.OnboardPageModule)
  },
  {
    path: 'onboard2',
    loadChildren: () => import('./onboard2/onboard2.module').then( m => m.Onboard2PageModule)
  },
  {
    path: 'onboard3',
    loadChildren: () => import('./onboard3/onboard3.module').then( m => m.Onboard3PageModule)
  },
  {
    path: 'fmonitoring',
    loadChildren: () => import('./fmonitoring/fmonitoring.module').then( m => m.FmonitoringPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'changepassword',
    loadChildren: () => import('./changepassword/changepassword.module').then( m => m.ChangepasswordPageModule)
  },
  {
    path: 'userprofile',
    loadChildren: () => import('./userprofile/userprofile.module').then( m => m.UserprofilePageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
