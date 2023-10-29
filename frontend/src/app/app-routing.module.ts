import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TorneoUpdatePage } from './torneo-update/torneo-update.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'torneo',
    pathMatch: 'full'
  },
  {
    path: 'torneo',
    loadChildren: () => import('./torneo/torneo.module').then( m => m.TorneoPageModule)
  },
  {
    path: 'torneo-add',
    loadChildren: () => import('./torneo-add/torneo-add.module').then( m => m.TorneoAddPageModule)
  },
  {
    path: 'torneo-update/:id',
    loadChildren: () => import('./torneo-update/torneo-update.module').then( m => m.TorneoUpdatePageModule)
  },
  {
    path: 'torneo-update/:id',
    component: TorneoUpdatePage,
  },
  {
    path: 'equipo',
    loadChildren: () => import('./equipo/equipo.module').then( m => m.EquipoPageModule)
  },
  {
    path: 'equipo-add',
    loadChildren: () => import('./equipo-add/equipo-add.module').then( m => m.EquipoAddPageModule)
  },
  {
    path: 'jugador',
    loadChildren: () => import('./jugador/jugador.module').then( m => m.JugadorPageModule)
  },
  {
    path: 'jugador-add',
    loadChildren: () => import('./jugador-add/jugador-add.module').then( m => m.JugadorAddPageModule)
  },
  {
    path: 'equipo-update/:id',
    loadChildren: () => import('./equipo-update/equipo-update.module').then( m => m.EquipoUpdatePageModule)
  },
  {
    path: 'jugador-update/:id',
    loadChildren: () => import('./jugador-update/jugador-update.module').then( m => m.JugadorUpdatePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
