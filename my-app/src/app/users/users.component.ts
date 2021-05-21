import {Component, OnInit} from '@angular/core';
import {User} from "../user";
import {UserRestService} from "../user-rest.service";
import {FormlyFieldConfig} from "@ngx-formly/core";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private readonly _userRest: UserRestService) {
  }

  ngOnInit(): void {
    const usuarios$ = this._userRest.findAll();
    usuarios$.subscribe((users) => {
      this.users = users;
      console.log(this.users)
    });
  }

  form = new FormGroup({});
  model = {username: ''};
  fields: FormlyFieldConfig[] = [
    {
      key: 'username',
      type: 'input',
      templateOptions: {
        label: 'Add Github username:',
        placeholder: 'Enter a username'
      }
    }
  ];

  onSubmit() {
    console.log(this.model);
  }

  deleteUser(id: number | string) {
    const eliminarConductor = this._userRest.delete(id);
    eliminarConductor.subscribe(
      (usuario) => {
        this.users.splice(this.users.findIndex((m) => m.id === id), 1);
        alert('User deleted!');
      },
      (error) => alert('User ' + id + ' couldn\'t be deleted')
    );
  }

}
