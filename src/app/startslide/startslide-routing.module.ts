import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartslidePage } from './startslide.page';

const routes: Routes = [
  {
    path: '',
    component: StartslidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartslidePageRoutingModule {}
