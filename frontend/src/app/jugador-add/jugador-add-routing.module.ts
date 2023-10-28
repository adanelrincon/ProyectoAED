import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JugadorAddPage } from './jugador-add.page';

const routes: Routes = [
  {
    path: '',
    component: JugadorAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JugadorAddPageRoutingModule {}
