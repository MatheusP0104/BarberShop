import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaPerfilPageRoutingModule } from './tela-perfil-routing.module';


import { TelaPerfilPage } from './tela-perfil.page';
import { SimpleMaskModule } from 'ngx-ion-simple-mask'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaPerfilPageRoutingModule,
    ReactiveFormsModule,
    SimpleMaskModule
  ],
  declarations: [TelaPerfilPage]
})
export class TelaPerfilPageModule {}
