import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaLojaPage } from './tela-loja.page';

const routes: Routes = [
  {
    path: '',
    component: TelaLojaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaLojaPageRoutingModule {}
