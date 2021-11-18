import { Pipe, PipeTransform } from '@angular/core'
import { Todo } from './todo.service'


@Pipe({
    name: 'todoSearch'
})

export class searchTodo implements PipeTransform {
    transform(todos: Todo[], searchItem: string = ''): Todo[] {
        if (!searchItem.trim()) {
            return todos
        }
        return todos.filter( todo => {
            return todo.title.toLocaleLowerCase().indexOf(searchItem.toLowerCase()) !== -1
        })
    }
}