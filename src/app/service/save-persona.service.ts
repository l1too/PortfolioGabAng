import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { persona } from 'src/app/model/persona.model';


@Injectable({
  providedIn: 'root'
})

export class SavePersonaService {
  constructor(private http: HttpClient) {}

  updateData( persona: persona): Observable<any> {
    return this.http.put(`http://localhost:8080/personas/editar/${persona.id}`, persona);
  }
}

