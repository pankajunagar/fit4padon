import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodAddPageRoutingModule } from './food-add-routing.module';

import { FoodAddPage } from './food-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodAddPageRoutingModule
  ],
  declarations: [FoodAddPage]
})
export class FoodAddPageModule {}
