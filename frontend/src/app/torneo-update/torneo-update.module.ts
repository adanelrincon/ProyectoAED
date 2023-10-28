import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TorneoUpdatePageRoutingModule } from './torneo-update-routing.module';
import { TorneoUpdatePage } from './torneo-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TorneoUpdatePageRoutingModule
  ],
  declarations: [TorneoUpdatePage]
})
export class TorneoUpdatePageModule {}
