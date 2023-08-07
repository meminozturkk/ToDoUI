import { Component, OnInit } from '@angular/core';
import { PriorityType } from 'src/app/models/priority.enum';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';
import { TodosComponent } from '../todos/todos.component';
import { Router } from '@angular/router';
import { UserLoginComponent } from '../user.login/user.login.component';
import { ErrorToastService } from 'src/app/services/error-toast.service';



@Component({
  selector: 'app-addtodos',
  templateUrl: './addtodos.component.html',
  styleUrls: ['./addtodos.component.css']
})
export class AddtodosComponent {
  public priority:PriorityType;
  constructor(private errorToastService : ErrorToastService,private todoService: TodoService, private router:Router) {}
  todos : Todo[] = [];
  newTodo: Todo ={
    id :'',
    title :'',
    createDate : new Date(),
    isCompleted: false,
    detail: '',
    priority : PriorityType.Low,
    userId: '00000000-0000-0000-0000-000000000000'
};

btnClick= function () {
    this.router.navigateByUrl('/todos');;
};

onSubmitInvalid: boolean = false;
addTodo() {
  if (this.newTodo.title.trim() === '') {
    this.onSubmitInvalid = true;
    return ;
  }
  this.todoService.addTodo(this.newTodo).subscribe({
    next:(todo)=>{
     this.btnClick();
    },
    error: (error) => {
      
      this.errorToastService.showError('You must Log in');
    }
  })
  this.onSubmitInvalid = false;
}
}
