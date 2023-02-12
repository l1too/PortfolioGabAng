import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/model/user';


@Injectable({
  providedIn: 'root'
})
export class LoginuserService {
  URL = 'http://localhost:8080/user/login';
  constructor(private http: HttpClient) { }

  loginUSer(user: User): Observable<object>{
    console.log(user);
    return this.http.post(`${this.URL}`, user);
  }
}
