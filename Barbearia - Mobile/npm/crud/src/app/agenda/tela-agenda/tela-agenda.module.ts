import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaAgendaPageRoutingModule } from './tela-agenda-routing.module';

import { TelaAgendaPage } from './tela-agenda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaAgendaPageRoutingModule
  ],
  declarations: [TelaAgendaPage]
})
export class TelaAgendaPageModule {}
