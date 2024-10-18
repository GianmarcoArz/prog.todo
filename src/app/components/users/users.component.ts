import { Component } from '@angular/core';
import { iTodo } from '../../i-todo';
import { iUsers } from '../../i-users';
import { TodoService } from '../../services/todo.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  users: iUsers[] = [];
  todos: iTodo[] = [];

  constructor(private todoSvc: TodoService, private usersSvc: UsersService) {
    this.users = this.usersSvc.arrUsers;
    this.todos = this.todoSvc.arrTodo;
  }

  getUserTodos(userId: number): iTodo[] {
    return this.todos.filter((todo) => todo.userId === userId);
  }
}
