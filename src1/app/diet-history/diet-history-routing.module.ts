import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DietHistoryPage } from './diet-history.page';

const routes: Routes = [
  {
    path: '',
    component: DietHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DietHistoryPageRoutingModule {}
