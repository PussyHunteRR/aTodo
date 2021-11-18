import { Component, OnInit } from '@angular/core';
import { TodoService, Todo } from '../shared/todo.service';


@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {

  title: string = ""

  constructor(public todoService: TodoService) { }

  ngOnInit(): void {
  }
  addTodo() {
    let todo: Todo = {
      title: this.title,
      id: Date.now(),
      completed: false
    }
    this.todoService.addTodos(todo)
    this.title = ''
  }
}
