import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemographicDetailPageRoutingModule } from './demographic-detail-routing.module';

import { DemographicDetailPage } from './demographic-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemographicDetailPageRoutingModule
  ],
  declarations: [DemographicDetailPage]
})
export class DemographicDetailPageModule {}
