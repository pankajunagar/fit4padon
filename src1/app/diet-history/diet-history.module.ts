import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DietHistoryPageRoutingModule } from './diet-history-routing.module';

import { DietHistoryPage } from './diet-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DietHistoryPageRoutingModule
  ],
  declarations: [DietHistoryPage]
})
export class DietHistoryPageModule {}
