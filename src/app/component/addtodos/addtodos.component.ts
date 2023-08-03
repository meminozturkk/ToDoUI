import { Component, OnInit } from '@angular/core';
import { PriorityType } from 'src/app/models/priority.enum';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';


@Component({
  selector: 'app-addtodos',
  templateUrl: './addtodos.component.html',
  styleUrls: ['./addtodos.component.css']
})
export class AddtodosComponent {
  constructor(private todoService: TodoService) {}
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

addTodo() {
  this.todoService.addTodo(this.newTodo).subscribe({
    next:(todo)=>{

    }
  })
}
}
