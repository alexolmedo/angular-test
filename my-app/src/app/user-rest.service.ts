import { Injectable } from '@angular/core';
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

  constructor(private readonly _httpClient: HttpClient) { }

  findAll(): Observable<User[]> {
    return this._httpClient
      .get(environment.url + this.model)
      .pipe(map(r => r as User[]));
  }

}
