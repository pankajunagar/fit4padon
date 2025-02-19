import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartslidePageRoutingModule } from './startslide-routing.module';

import { StartslidePage } from './startslide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartslidePageRoutingModule
  ],
  declarations: [StartslidePage]
})
export class StartslidePageModule {}
