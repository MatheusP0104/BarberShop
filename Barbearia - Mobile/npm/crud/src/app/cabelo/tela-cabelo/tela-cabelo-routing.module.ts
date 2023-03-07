import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaCabeloPage } from './tela-cabelo.page';

const routes: Routes = [
  {
    path: '',
    component: TelaCabeloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaCabeloPageRoutingModule {}
