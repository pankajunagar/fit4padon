import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodmonitorningPage } from './foodmonitorning.page';

const routes: Routes = [
  {
    path: '',
    component: FoodmonitorningPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodmonitorningPageRoutingModule {}
