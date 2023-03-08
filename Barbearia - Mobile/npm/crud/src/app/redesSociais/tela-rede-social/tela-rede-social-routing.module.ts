import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaRedeSocialPage } from './tela-rede-social.page';

const routes: Routes = [
  {
    path: '',
    component: TelaRedeSocialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaRedeSocialPageRoutingModule {}
