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

  Arrusers: iUsers[] = [];
  Arrtodo: iTodo[] = [];

  ngOnInit() {
    this.Arrtodo = this.todoSvc.Arrtodo;
    this.Arrusers = this.usersSvc.Arrusers;
    this.Arrtodo = this.todoSvc.getUsersId(this.Arrusers);

    console.log(this.Arrtodo);
  }
}
