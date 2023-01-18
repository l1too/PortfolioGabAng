import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { sobreMi } from '../model/sobremi.model';

@Injectable({
  providedIn: 'root'
})
export class SobreMiService {
  URL = 'http://localhost:8080/sobremis/';
  constructor(private http: HttpClient) { }

  public getSobreMi(): Observable<sobreMi> {
    return this.http.get<sobreMi>(this.URL + 'traer/perfil');
}
}
