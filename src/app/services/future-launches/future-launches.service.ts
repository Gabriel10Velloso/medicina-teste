import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { LauncheModel } from 'src/app/models/launche/launche.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FutureLaunchesService {
  
  API_URL: string = environment.API_URL + 'launches/upcoming';

  constructor(private http: HttpClient,) { }

  getFutureLauches(): Observable<LauncheModel[]> {
    return this.http.get<LauncheModel[]>(this.API_URL).pipe(
      map((res) => {
        return res;
      }));
  }
}
