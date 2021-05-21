import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {UserRestService} from "../user-rest.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private readonly _userRest: UserRestService) { }

  ngOnInit(): void {
      const usuarios$ = this._userRest.findAll();
      usuarios$.subscribe((users) => {
        this.users = users;
        console.log(this.users)
      });
  }

}
