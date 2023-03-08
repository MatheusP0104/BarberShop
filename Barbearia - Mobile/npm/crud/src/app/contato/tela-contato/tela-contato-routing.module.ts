import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaContatoPage } from './tela-contato.page';

const routes: Routes = [
  {
    path: '',
    component: TelaContatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaContatoPageRoutingModule {}
