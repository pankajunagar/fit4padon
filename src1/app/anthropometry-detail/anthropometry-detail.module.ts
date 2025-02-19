import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnthropometryDetailPageRoutingModule } from './anthropometry-detail-routing.module';

import { AnthropometryDetailPage } from './anthropometry-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnthropometryDetailPageRoutingModule
  ],
  declarations: [AnthropometryDetailPage]
})
export class AnthropometryDetailPageModule {}
