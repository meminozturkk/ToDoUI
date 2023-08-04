import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  baseApiUrl:string = 'https://localhost:7143';
  constructor(private http: HttpClient) { }


  getAllTodos(): Observable<Todo[]> {
    let getAllApiUrl :string = this.baseApiUrl + '/api/todo'
    return this.http.get<Todo[]>(getAllApiUrl);
  }
  addTodo(newTodo:Todo): Observable<Todo> {
    newTodo.id = '00000000-0000-0000-0000-000000000000'
    return this.http.post<Todo>(this.baseApiUrl + '/api/todo/addtodo', newTodo);
  }

 updateTodo(id: string,todo: Todo): Observable<Todo>{
  let updateUrl = this.baseApiUrl + '/api/ToDo/updatetodo/';
  return this.http.put<Todo>(updateUrl + id, todo);
 }
 deleteTodo(id: string): Observable<Todo> {
  return this.http.delete<Todo>(this.baseApiUrl + '/api/ToDo/deletetodo/'+ id);
}

  getTodoDetails(id: string): Observable<Todo> {
    let getTodoDetailsUrl = this.baseApiUrl + '/api/ToDo/GetTodoDetails/';
    return this.http.get<Todo>(getTodoDetailsUrl + id);
  }
}  
