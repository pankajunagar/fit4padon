import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DietAddPage } from './diet-add.page';

const routes: Routes = [
  {
    path: '',
    component: DietAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DietAddPageRoutingModule {}
