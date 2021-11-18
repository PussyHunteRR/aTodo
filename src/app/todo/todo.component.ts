import { Component, OnInit } from '@angular/core';
import { TodoService } from './../shared/todo.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  public loading: boolean = true;
  public todosSearch: string = ''

  constructor(public todoService: TodoService){ }

  ngOnInit(): void {
    this.todoService.fetch().subscribe( () => {
      this.loading = false
    })
  }

  onChange(id: number) {
    this.todoService.onToggle(id)
  }

  removeTodo(id: number) {
    this.todoService.removeId(id)
  }

}
