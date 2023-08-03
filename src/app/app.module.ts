import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './component/todos/todos.component';
import { AddtodosComponent } from './component/addtodos/addtodos.component';
import { UserLoginComponent } from './component/user.login/user.login.component';
import { RegisterComponent } from './component/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    AddtodosComponent,
    UserLoginComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
