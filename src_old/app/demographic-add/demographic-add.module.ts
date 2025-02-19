import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemographicAddPageRoutingModule } from './demographic-add-routing.module';

import { DemographicAddPage } from './demographic-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemographicAddPageRoutingModule
  ],
  declarations: [DemographicAddPage]
})
export class DemographicAddPageModule {}
