import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoList: string[] = ["Finish assignment", "Walk the dog", "Call mom"];

  addToList(newToDo: string) {
    this.todoList.push(newToDo);
  }



}
