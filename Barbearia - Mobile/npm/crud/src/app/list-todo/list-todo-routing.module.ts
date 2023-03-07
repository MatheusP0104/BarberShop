import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListTodoPage } from './list-todo.page';

const routes: Routes = [
  {
    path: '',
    component: ListTodoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListTodoPageRoutingModule {}
