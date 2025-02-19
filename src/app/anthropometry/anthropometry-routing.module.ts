import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnthropometryPage } from './anthropometry.page';

const routes: Routes = [
  {
    path: '',
    component: AnthropometryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnthropometryPageRoutingModule {}
