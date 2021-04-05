import { Pipe, PipeTransform } from '@angular/core';
import { ToDo } from './interfaces/to-do';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todos: ToDo[], searchText: string | null) {
    if(!searchText) {
      return todos;
    }
    return todos.filter((todo: ToDo) => todo.task.includes(searchText))
  }

}
