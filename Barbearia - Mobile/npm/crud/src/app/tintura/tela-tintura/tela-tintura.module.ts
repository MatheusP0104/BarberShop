import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaTinturaPageRoutingModule } from './tela-tintura-routing.module';

import { TelaTinturaPage } from './tela-tintura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaTinturaPageRoutingModule
  ],
  declarations: [TelaTinturaPage]
})
export class TelaTinturaPageModule {}
