import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { UsersService } from '../../services/users.service';
import { iUsers } from '../../i-users';
import { iTodo } from '../../i-todo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private todoSvc: TodoService, private usersSvc: UsersService) {}

  arrUsers: iUsers[] = [];
  arrTodo: iTodo[] = [];

  ngOnInit() {
    this.arrTodo = this.todoSvc.arrTodo;
    this.arrUsers = this.usersSvc.arrUsers;
    this.arrTodo = this.todoSvc.getUsersId(this.arrUsers);

    console.log(this.arrTodo);
  }
  toggleTaskActive(task: iTodo) {
    this.todoSvc.updateTaskEsecutionSuccess(task);
  }
}
