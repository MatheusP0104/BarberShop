import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaTinturaPage } from './tela-tintura.page';

const routes: Routes = [
  {
    path: '',
    component: TelaTinturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaTinturaPageRoutingModule {}
