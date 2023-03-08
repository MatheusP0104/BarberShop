import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaBarbaPage } from './tela-barba.page';

const routes: Routes = [
  {
    path: '',
    component: TelaBarbaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaBarbaPageRoutingModule {}
