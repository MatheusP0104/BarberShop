import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaContatoPageRoutingModule } from './tela-contato-routing.module';

import { TelaContatoPage } from './tela-contato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaContatoPageRoutingModule
  ],
  declarations: [TelaContatoPage]
})
export class TelaContatoPageModule {}
