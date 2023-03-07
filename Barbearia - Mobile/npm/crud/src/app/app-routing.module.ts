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
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
