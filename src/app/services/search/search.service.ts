import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LauncheModel } from 'src/app/models/launche/launche.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchFutureLaunches: any[] = [];
  searchPastLaunches: any[] = [];
  constructor() { }

  getFutureByName(searchName: any, searchLaunches: any) {
    const nameID = searchName;

    if (searchName === 'searchControlFuture') {
      this.searchFutureLaunches.push(searchLaunches)
      return this.searchFutureLaunches[0];
    }

    this.searchFutureLaunches.push(searchLaunches)
    const foundSpaceName = this.searchFutureLaunches[0]
      .filter((spaceName: any) => spaceName.name.toLowerCase().includes(nameID.toLowerCase()));

    return foundSpaceName;
  }

  getPastByName(searchName: any, searchLaunches: any) {
    const nameID = searchName;

    if (searchName === 'searchControlPast') {
      this.searchPastLaunches.push(searchLaunches)
      return this.searchPastLaunches[0];
    }

    this.searchPastLaunches.push(searchLaunches)
    const foundSpaceName2 = this.searchPastLaunches[0]
      .filter((spaceName: any) => spaceName.name.toLowerCase().includes(nameID.toLowerCase()));

    return foundSpaceName2;
  }
}