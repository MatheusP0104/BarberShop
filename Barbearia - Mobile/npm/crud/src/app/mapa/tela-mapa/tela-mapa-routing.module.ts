import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaMapaPage } from './tela-mapa.page';

const routes: Routes = [
  {
    path: '',
    component: TelaMapaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaMapaPageRoutingModule {}
