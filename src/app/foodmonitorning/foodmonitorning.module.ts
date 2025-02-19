import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodmonitorningPageRoutingModule } from './foodmonitorning-routing.module';

import { FoodmonitorningPage } from './foodmonitorning.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodmonitorningPageRoutingModule
  ],
  declarations: [FoodmonitorningPage]
})
export class FoodmonitorningPageModule {}
