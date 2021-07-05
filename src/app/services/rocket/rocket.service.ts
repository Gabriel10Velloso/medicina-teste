import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { RocketModel } from 'src/app/models/rocket/rocket.model';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RocketService {
  
  API_URL: string = environment.API_URL + 'rockets';

  constructor(private http: HttpClient) { }

  findRocket(id: string): Observable<RocketModel> {
    return this.http.get<RocketModel>(`${this.API_URL}/${id}`).pipe(
      map((res) => {
        return res;
      }));
  }
}