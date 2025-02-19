import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemographicDetailPage } from './demographic-detail.page';

const routes: Routes = [
  {
    path: '',
    component: DemographicDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemographicDetailPageRoutingModule {}
