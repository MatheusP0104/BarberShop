import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaRedeSocialPageRoutingModule } from './tela-rede-social-routing.module';

import { TelaRedeSocialPage } from './tela-rede-social.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaRedeSocialPageRoutingModule
  ],
  declarations: [TelaRedeSocialPage]
})
export class TelaRedeSocialPageModule {}
