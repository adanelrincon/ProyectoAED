import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TorneoAddPage } from './torneo-add.page';

const routes: Routes = [
  {
    path: '',
    component: TorneoAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TorneoAddPageRoutingModule {}
