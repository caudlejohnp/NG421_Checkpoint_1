import { Component, OnInit, ViewChild } from "@angular/core";
import { ITodo } from '../interfaces/itodo';
import { TodoService } from '../services/todo.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: "app-todo-table",
  templateUrl: "./todo-table.component.html",
  styleUrls: ["./todo-table.component.css"],
})
export class TodoTableComponent implements OnInit {
  displayedColumns: string[] = [
    "title",
    "description",
    "status",
    "createdAt",
  ];
  dataSource: MatTableDataSource<ITodo>;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.todoService.getTodos());
    this.dataSource.sort = this.sort;
  }

  applyFilter(filter: string): void {
    this.dataSource.filter = filter.trim().toLocaleLowerCase();
  }
}
