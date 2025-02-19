import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EarlymorningPage } from './earlymorning.page';

const routes: Routes = [
  {
    path: '',
    component: EarlymorningPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EarlymorningPageRoutingModule {}
