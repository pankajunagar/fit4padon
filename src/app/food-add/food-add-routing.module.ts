import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodAddPage } from './food-add.page';

const routes: Routes = [
  {
    path: '',
    component: FoodAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodAddPageRoutingModule {}
