import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TorneoUpdatePage } from './torneo-update.page';

const routes: Routes = [
  {
    path: '',
    component: TorneoUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TorneoUpdatePageRoutingModule {}
