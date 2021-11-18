import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

export interface Todo {
    id: number
    title: string
    completed: boolean
}



@Injectable({providedIn: "root"})
export class TodoService {
    public todos: Todo[] = []
    constructor(private http: HttpClient) {}

    fetch(): Observable<Todo[]> {
        return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .pipe(tap(todos => this.todos = todos))
    }

      onToggle(id: number) {
        const idx = this.todos.findIndex(i => i.id === id)
        this.todos[idx].completed = !this.todos[idx].completed
      } 
      removeId(id: number) {
        this.todos = this.todos.filter(i => i.id !== id)
      }
      addTodos(todo: Todo) {
          this.todos.push(todo)
      }
}