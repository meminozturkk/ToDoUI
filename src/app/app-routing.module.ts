import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './component/todos/todos.component';
import { AddtodosComponent } from './component/addtodos/addtodos.component';
import { UserLoginComponent } from './component/user.login/user.login.component';
import { RegisterComponent } from './component/register/register.component';
import { TodoDetailComponent } from './component/todo-detail/todo-detail.component';
import { UserService } from './services/user.service';

const routes: Routes = [
  {
    path: '',
    component: UserLoginComponent
  },
  {
    path: 'todos',
    component: TodosComponent,
    canActivate: [UserService]
  },
  {
    path: 'addtodos',
    component: AddtodosComponent,
    canActivate: [UserService]
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
    component: TodoDetailComponent,
    canActivate: [UserService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
