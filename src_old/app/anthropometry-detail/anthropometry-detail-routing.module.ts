import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnthropometryDetailPage } from './anthropometry-detail.page';

const routes: Routes = [
  {
    path: '',
    component: AnthropometryDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnthropometryDetailPageRoutingModule {}
