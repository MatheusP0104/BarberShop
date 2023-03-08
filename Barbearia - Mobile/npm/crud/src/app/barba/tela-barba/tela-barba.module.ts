import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaBarbaPageRoutingModule } from './tela-barba-routing.module';

import { TelaBarbaPage } from './tela-barba.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaBarbaPageRoutingModule
  ],
  declarations: [TelaBarbaPage]
})
export class TelaBarbaPageModule {}
