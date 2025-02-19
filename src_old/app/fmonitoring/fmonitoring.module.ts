import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FmonitoringPageRoutingModule } from './fmonitoring-routing.module';

import { FmonitoringPage } from './fmonitoring.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FmonitoringPageRoutingModule
  ],
  declarations: [FmonitoringPage]
})
export class FmonitoringPageModule {}
