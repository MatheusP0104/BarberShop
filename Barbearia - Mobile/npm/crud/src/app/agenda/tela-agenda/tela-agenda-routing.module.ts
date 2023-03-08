import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaAgendaPage } from './tela-agenda.page';

const routes: Routes = [
  {
    path: '',
    component: TelaAgendaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaAgendaPageRoutingModule {}
