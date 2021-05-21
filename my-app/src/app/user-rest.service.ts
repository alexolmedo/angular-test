import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {User} from "./user";
import {environment} from "../environments/environment";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserRestService {

  private model = "/users"

  constructor(private readonly _httpClient: HttpClient) {
  }

  // Find all users to display in table
  findAll(): Observable<User[]> {
    return this._httpClient
      .get(environment.apiURL + this.model)
      .pipe(map(r => r as User[]));
  }

  // Delete a user
  delete(id: number | string): Observable<number> {
    return this._httpClient
      .delete(environment.apiURL + this.model + `/${id}`)
      .pipe(map(r => r as number));
  }

  // Add a new user
  create(user: User) {
    const url = environment.apiURL + this.model;
    return this._httpClient
      .post(environment.apiURL + this.model, user)
      .pipe(map(r => r as User));
  }

}
