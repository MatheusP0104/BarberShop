import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tela-agenda',
    loadChildren: () => import('./agenda/tela-agenda/tela-agenda.module').then( m => m.TelaAgendaPageModule)
  },
  {
    path: 'tela-login',
    loadChildren: () => import('./Login/tela-login/tela-login.module').then( m => m.TelaLoginPageModule)
  },
  {
    path: 'tela-cadastro',
    loadChildren: () => import('./cadastro/tela-cadastro/tela-cadastro.module').then( m => m.TelaCadastroPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }