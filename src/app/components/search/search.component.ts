import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../../services/todo.service';
import { UsersService } from '../../services/users.service';
import { iTodo } from './../../i-todo';
import { Component } from '@angular/core';
import { iUsers } from '../../i-users';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  searchQuery: string = '';
  filteredTodos: iTodo[] = [];

  constructor(
    private route: ActivatedRoute,
    private todoSvc: TodoService,
    private userSvc: UsersService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.searchQuery = params['query'] || '';
      this.todosSingle();
    });
  }

  todosSingle() {
    if (this.searchQuery) {
      const userSearched = this.userSvc.arrUsers.filter(
        (user: iUsers) =>
          user.firstName
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase()) ||
          user.lastName.toLowerCase().includes(this.searchQuery.toLowerCase())
      );

      const searchUserById = userSearched.map((user) => user.id);

      this.filteredTodos = this.todoSvc.arrTodo.filter((todo: iTodo) =>
        searchUserById.includes(todo.userId)
      );
    }
  }
}
