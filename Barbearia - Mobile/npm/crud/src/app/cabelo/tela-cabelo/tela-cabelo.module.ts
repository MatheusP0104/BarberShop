import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaCabeloPageRoutingModule } from './tela-cabelo-routing.module';

import { TelaCabeloPage } from './tela-cabelo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaCabeloPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TelaCabeloPage]
})
export class TelaCabeloPageModule {}
