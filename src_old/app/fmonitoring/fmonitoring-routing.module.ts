import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FmonitoringPage } from './fmonitoring.page';

const routes: Routes = [
  {
    path: '',
    component: FmonitoringPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FmonitoringPageRoutingModule {}
