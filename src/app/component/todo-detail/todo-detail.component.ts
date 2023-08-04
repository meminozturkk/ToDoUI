import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service'; 
@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})

export class TodoDetailComponent implements OnInit {
todo: Todo | undefined;
constructor(private route: ActivatedRoute, private router:Router, private todoService: TodoService) {}

ngOnInit(): void {
  this.route.params.subscribe(params => {
    const todoId = params['id'];
    this.getTodoDetail(todoId);
  });
}

getTodoDetail(id: string): void {
debugger
  this.todoService.getTodoDetails(id).subscribe(
    (data) => {
      this.todo = data;
    },
    (error) => {
      console.log('Error while fetching Todo details:', error);
    }
  );
}

updateTodo(id: string, todo:Todo):void{

this.todoService.updateTodo(id, todo).subscribe({
  next:(response) => {
    this.router.navigate(['/todos']);
  }})
 
}
}
