import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateTodoPageRoutingModule } from './create-todo-routing.module';

import { CreateTodoPage } from './create-todo.page';
import { SimpleMaskModule } from 'ngx-ion-simple-mask'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateTodoPageRoutingModule,
    ReactiveFormsModule,
    SimpleMaskModule
  ],
  declarations: [CreateTodoPage]
})
export class CreateTodoPageModule {}
