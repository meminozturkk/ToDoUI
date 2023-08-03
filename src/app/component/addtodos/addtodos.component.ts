import { Component, OnInit } from '@angular/core';
import { PriorityType } from 'src/app/models/priority.enum';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';
import { TodosComponent } from '../todos/todos.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-addtodos',
  templateUrl: './addtodos.component.html',
  styleUrls: ['./addtodos.component.css']
})
export class AddtodosComponent {
  public priority:PriorityType;
  constructor(private todoService: TodoService, private router:Router) {}
  todos : Todo[] = [];
  newTodo: Todo ={
    id :'',
    title :'',
    createDate : new Date(),
    isCompleted: false,
    detail: '',
    priority : PriorityType.Low,
    userId:'1'
};
btnClick= function () {
    this.router.navigateByUrl('/todos');;
};
addTodo() {
  this.todoService.addTodo(this.newTodo).subscribe({
    next:(todo)=>{
     this.todoService.getAllTodos();
     this.btnClick();
    }
  })
  
}
}
