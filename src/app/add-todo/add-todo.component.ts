import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodoValue = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addToDo(todoValue: string) {
    console.log("Creating new to do: " + todoValue);
    this.addTodoValue.next(todoValue);
  }

}
