import { Component, OnInit } from "@angular/core";
import { TodoService } from "../services/todo.service";

@Component({
  selector: "app-create-todo",
  templateUrl: "./create-todo.component.html",
  styleUrls: ["./create-todo.component.css"],
})
export class CreateTodoComponent implements OnInit {
  todoTitle = "";
  todoStatus = "";
  todoDate = new Date();
  constructor(private todoService: TodoService) {}

  ngOnInit() {}
  addTodo(): void {
    this.todoService.addTodo({
      title: this.todoTitle,
      status: this.todoStatus,
      createdAt: this.todoDate,
    });

    // resets our todoTitle variable to an empty string
    this.todoTitle = "";
  }
}
