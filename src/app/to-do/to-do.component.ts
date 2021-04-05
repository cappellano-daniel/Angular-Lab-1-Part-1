import { Component, OnInit } from '@angular/core';
import { ToDo } from './../interfaces/to-do'

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  todos: ToDo[] = [
    {task: 'take out garbage', completed: false},
    {task: 'complete the lab', completed: false},
    {task: 'pay a bill', completed: true},
    {task: 'do laundry', completed: false}
  ]
  searchText: string | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
