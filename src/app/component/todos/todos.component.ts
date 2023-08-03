import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
todos: Todo[] = []; 
constructor(private todoService: TodoService) { }
ngOnInit(): void {
    this.getAllTodos();
}
getAllTodos(): void {
  this.todoService.getAllTodos().subscribe({
    next: (todos) =>{
      this.todos = todos;
    }
  })
}
onCompletedChange(id: string, todo:Todo):void{
  
  todo.isCompleted = !todo.isCompleted;
this.todoService.updateTodo(id, todo).subscribe({
  next:(response) => {
    this.getAllTodos();
  }})
}
deleteTodo(id:string){
  this.todoService.deleteTodo(id).subscribe({
    next: (response) =>{
      this.getAllTodos();
    }
  })

}
}
