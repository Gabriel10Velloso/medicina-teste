import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CrewModel } from 'src/app/models/crew/crew.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrewService {

  API_URL: string = environment.API_URL + 'crew';

  constructor(private http: HttpClient) { }

  crewRocket(id: string): Observable<CrewModel> {
    return this.http.get<CrewModel>(`${this.API_URL}/${id}`).pipe(
      map((res) => {
        return res;
      }));
  }
}
