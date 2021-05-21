import {Component, OnInit} from '@angular/core';
import {User} from "../user";
import {UserRestService} from "../user-rest.service";
import {FormlyFieldConfig} from "@ngx-formly/core";
import {FormGroup} from "@angular/forms";
import {GithubRestService} from "../github-rest.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private readonly _userRest: UserRestService,
              private readonly _githubRest: GithubRestService) {
  }

  ngOnInit(): void {
    const usuarios$ = this._userRest.findAll();
    usuarios$.subscribe((users) => {
      this.users = users;
    });
  }

  form = new FormGroup({});
  formModel = {username: ''};
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
    const username = this.formModel.username
    const usuarios$ = this._githubRest.find(username);
    usuarios$.subscribe((user) => {
      this.createUser(user)
    });
  }

  deleteUser(id: number | string) {
    this._userRest.delete(id)
      .subscribe(
        (usuario) => {
          this.users.splice(this.users.findIndex((m) => m.id === id), 1);
          alert('User deleted!');
        },
        (error) => alert('User ' + id + ' couldn\'t be deleted')
      );
  }

  createUser(user: User) {
    this._userRest.create(
      user
    ).subscribe(
      (user: User) => {
        alert(`User added successfully: ${user.login}`);
        const url = [
          '/',
          'users'
        ];
        window.location.reload();
      }, (error => {
        console.error('Error: ', error);
      })
    );
  }

}
