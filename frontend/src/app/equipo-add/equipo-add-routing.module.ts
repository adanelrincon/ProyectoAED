import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquipoAddPage } from './equipo-add.page';

const routes: Routes = [
  {
    path: '',
    component: EquipoAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EquipoAddPageRoutingModule {}
