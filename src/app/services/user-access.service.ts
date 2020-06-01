import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RegisterModel} from '../models/register.model';
import {LoginModel} from '../models/login.model';
import {TokenModel} from '../models/token.model.';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserAccessService {

  loginUrl = 'http://127.0.0.1:8080/api/login';
  registerUrl = 'http://127.0.0.1:8080/api/register';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  register(client: RegisterModel) {
    return this.http.post<boolean>(this.registerUrl , client , this.httpOptions);
  }

  loginMethod(client: LoginModel) {
    return this.http.post(this.loginUrl , client , this.httpOptions)
      .pipe(
        map ((result: TokenModel) => {
          if (result && result.token) {
            localStorage.setItem('token', result.token);
            console.log(result.token);
            return true;
          }
          return false;
        })
      );
  }
}
