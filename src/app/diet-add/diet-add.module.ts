import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DietAddPageRoutingModule } from './diet-add-routing.module';

import { DietAddPage } from './diet-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DietAddPageRoutingModule
  ],
  declarations: [DietAddPage]
})
export class DietAddPageModule {}
