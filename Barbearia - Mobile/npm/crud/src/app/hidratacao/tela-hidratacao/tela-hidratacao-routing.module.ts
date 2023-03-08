import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaHidratacaoPage } from './tela-hidratacao.page';

const routes: Routes = [
  {
    path: '',
    component: TelaHidratacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaHidratacaoPageRoutingModule {}
