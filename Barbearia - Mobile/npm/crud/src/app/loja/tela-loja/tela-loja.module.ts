import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaLojaPageRoutingModule } from './tela-loja-routing.module';

import { TelaLojaPage } from './tela-loja.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaLojaPageRoutingModule
  ],
  declarations: [TelaLojaPage]
})
export class TelaLojaPageModule {}
