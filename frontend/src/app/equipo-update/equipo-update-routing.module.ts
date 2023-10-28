import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquipoUpdatePage } from './equipo-update.page';

const routes: Routes = [
  {
    path: '',
    component: EquipoUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EquipoUpdatePageRoutingModule {}
