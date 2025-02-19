import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnthropometryPageRoutingModule } from './anthropometry-routing.module';

import { AnthropometryPage } from './anthropometry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnthropometryPageRoutingModule
  ],
  declarations: [AnthropometryPage]
})
export class AnthropometryPageModule {}
