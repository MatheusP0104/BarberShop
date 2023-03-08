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
    path: 'create-todo',
    loadChildren: () => import('./create-todo/create-todo.module').then( m => m.CreateTodoPageModule)
  },
  {
    path: 'update-todo/:id',
    loadChildren: () => import('./update-todo/update-todo.module').then( m => m.UpdateTodoPageModule)
  },
  {
    path: 'list-todo',
    loadChildren: () => import('./list-todo/list-todo.module').then( m => m.ListTodoPageModule)
  },
  {
    path: 'tela-login',
    loadChildren: () => import('./login/tela-login/tela-login.module').then( m => m.TelaLoginPageModule)
  },
  {
    path: 'tela-principal',
    loadChildren: () => import('./principal/tela-principal/tela-principal.module').then( m => m.TelaPrincipalPageModule)
  },
  {
    path: 'tela-cabelo',
    loadChildren: () => import('./cabelo/tela-cabelo/tela-cabelo.module').then( m => m.TelaCabeloPageModule)
  },  {
    path: 'tela-barba',
    loadChildren: () => import('./barba/tela-barba/tela-barba.module').then( m => m.TelaBarbaPageModule)
  },
  {
    path: 'tela-hidratacao',
    loadChildren: () => import('./hidratacao/tela-hidratacao/tela-hidratacao.module').then( m => m.TelaHidratacaoPageModule)
  },
  {
    path: 'tela-tintura',
    loadChildren: () => import('./tintura/tela-tintura/tela-tintura.module').then( m => m.TelaTinturaPageModule)
  },
  {
    path: 'tela-depilacao',
    loadChildren: () => import('./depilacao/tela-depilacao/tela-depilacao.module').then( m => m.TelaDepilacaoPageModule)
  },
  {
    path: 'tela-loja',
    loadChildren: () => import('./loja/tela-loja/tela-loja.module').then( m => m.TelaLojaPageModule)
  },
  {
    path: 'tela-mapa',
    loadChildren: () => import('./mapa/tela-mapa/tela-mapa.module').then( m => m.TelaMapaPageModule)
  },
  {
    path: 'config',
    loadChildren: () => import('./config/config.module').then( m => m.ConfigPageModule)
  },
  {
    path: 'tela-perfil',
    loadChildren: () => import('./perfil/tela-perfil/tela-perfil.module').then( m => m.TelaPerfilPageModule)
  },
  {
    path: 'tela-agenda',
    loadChildren: () => import('./agenda/tela-agenda/tela-agenda.module').then( m => m.TelaAgendaPageModule)
  },
  {
    path: 'tela-contato',
    loadChildren: () => import('./contato/tela-contato/tela-contato.module').then( m => m.TelaContatoPageModule)
  },
  {
    path: 'tela-rede-social',
    loadChildren: () => import('./redesSociais/tela-rede-social/tela-rede-social.module').then( m => m.TelaRedeSocialPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
