import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './component/todos/todos.component';
import { AddtodosComponent } from './component/addtodos/addtodos.component';
import { UserLoginComponent } from './component/user.login/user.login.component';
import { RegisterComponent } from './component/register/register.component';
import { TodoDetailComponent } from './component/todo-detail/todo-detail.component';

const routes: Routes = [
  {
    path: '',
    component: UserLoginComponent
  },
  {
    path: 'todos',
    component: TodosComponent
  },
  {
    path: 'addtodos',
    component: AddtodosComponent
  },
  {
    path: 'login',
    component: UserLoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'todoDetail/:id',
    component: TodoDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
