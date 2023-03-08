import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaMapaPageRoutingModule } from './tela-mapa-routing.module';

import { TelaMapaPage } from './tela-mapa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaMapaPageRoutingModule
  ],
  declarations: [TelaMapaPage]
})
export class TelaMapaPageModule {}
