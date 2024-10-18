import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { UsersService } from '../../services/users.service';
import { iTodo } from '../../i-todo';
import { iUsers } from '../../i-users';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss',
})
export class CompletedComponent implements OnInit {
  constructor(private todoSvc: TodoService, private usersSvc: UsersService) {}

  arrTodo: iTodo[] = [];
  arrUsers: iUsers[] = [];

  ngOnInit() {
    this.arrTodo = this.todoSvc.arrTodo;
    this.taskComplitedAutor();
  }
  taskComplitedAutor() {
    this.arrTodo = this.todoSvc
      .getUsersId(this.usersSvc.arrUsers)
      .filter((p) => p.completed);
  }
}
