import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemographicAddPage } from './demographic-add.page';

const routes: Routes = [
  {
    path: '',
    component: DemographicAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemographicAddPageRoutingModule {}
