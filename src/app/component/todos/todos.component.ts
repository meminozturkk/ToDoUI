import { Component, Inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PriorityType } from 'src/app/models/priority.enum';
import { Todo } from 'src/app/models/todo.model';
import { ErrorToastService } from 'src/app/services/error-toast.service';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
todos: Todo[] = []; 

constructor(private errorToastService: ErrorToastService,private todoService: TodoService, private router:Router) { }
ngOnInit(): void {
    this.getAllTodos();
}
getAllTodos(): void {
  this.todoService.getAllTodos().subscribe({
    next: (todos) => {
      this.todos = todos;
    },
    error: (error) => {
      
      this.errorToastService.showError('You must Login');
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
      this.errorToastService.showSuccess('Todo deleted successfully')
      this.getAllTodos();
    }
  })
}
showDetails(id:string){
  this.router.navigate(['/todoDetail']);
}

goToDetail(id: string): void {
  this.router.navigate(['/todoDetail' , id]);
}
}
