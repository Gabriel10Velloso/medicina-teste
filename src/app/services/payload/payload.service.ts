import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PayloadModel } from 'src/app/models/payload/payload.modal';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PayloadService {

  API_URL: string = environment.API_URL + 'payloads';

  constructor(private http: HttpClient) { }

  payloadRocket(id: string): Observable<PayloadModel> {
    return this.http.get<PayloadModel>(`${this.API_URL}/${id}`).pipe(
      map((res) => {
        return res;
      }));
  }
}
