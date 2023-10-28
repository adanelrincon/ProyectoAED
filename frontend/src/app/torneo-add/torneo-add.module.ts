import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TorneoAddPage } from './torneo-add.page';
import { TorneoAddPageRoutingModule } from './torneo-add-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TorneoAddPageRoutingModule, 
  ],
  declarations: [TorneoAddPage]
})
export class TorneoAddPageModule {}
