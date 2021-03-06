import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { User } from '../shared/user/user';
import { UserService } from '../shared/user/user.service';
import { environment } from '../../environments/environment';

@Injectable()
export class PasswordService {

  private apiUrlUser = `${environment.apiUrl}/User`;
  private headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  private httpOptions = { headers: this.headers };

  constructor(private httpclient: HttpClient,
    private userService: UserService
  ) { }

  changePassword(loginUser: User, newPassword: any): Observable<User> {
    // const body: User = loginUser;
    // body.password = newPassword;
    // return this.httpclient.put<User>(`${this.apiUrlUser}/${loginUser.id}`, body, this.httpOptions);
    return this.userService.changePassword(loginUser, newPassword);
  }

}
