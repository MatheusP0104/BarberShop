import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaDepilacaoPage } from './tela-depilacao.page';

const routes: Routes = [
  {
    path: '',
    component: TelaDepilacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaDepilacaoPageRoutingModule {}
