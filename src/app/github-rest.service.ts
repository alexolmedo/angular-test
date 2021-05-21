import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./user";
import {environment} from "../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GithubRestService {

  private model = "/users";

  constructor(private readonly _httpClient: HttpClient) {
  }

  // Get userdata from Github
  find(username: string): Observable<User> {
    return this._httpClient
      .get(environment.githubURL + this.model + '/' + username)
      .pipe(map(r => r as User));
  }
}
