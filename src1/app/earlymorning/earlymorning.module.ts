import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EarlymorningPageRoutingModule } from './earlymorning-routing.module';

import { EarlymorningPage } from './earlymorning.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EarlymorningPageRoutingModule
  ],
  declarations: [EarlymorningPage]
})
export class EarlymorningPageModule {}
