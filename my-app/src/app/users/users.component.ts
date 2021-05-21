import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {UserRestService} from "../user-rest.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usuarios: User[] = [];

  constructor(private readonly _userRest: UserRestService) { }

  ngOnInit(): void {
      const usuarios$ = this._userRest.findAll();
      usuarios$.subscribe((usuarios) => {
        this.usuarios = usuarios;
        console.log(this.usuarios)
      });
  }

}
