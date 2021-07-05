import { Component, OnDestroy, OnInit } from '@angular/core';

// NGRX
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';

// RXJS
import { Subscription, timer } from 'rxjs';
import { SearchService } from 'src/app/services/search/search.service';
import * as actions from 'src/app/store/actions';

// SERVICES
import { ToastrService } from 'ngx-toastr';

//MODELS
import { LauncheModel } from 'src/app/models/launche/launche.model';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  futurLaunches?: LauncheModel[];
  pastLaunches?: LauncheModel[];
  color = 'rgb(61, 175, 170)';
  title = 'Lista de lançamentos futuros';
  loader = false;
  maTab = 'First';
  loadingSubscription: Subscription | any;

  constructor(  private store: Store<AppState>, 
                private searchService: SearchService, 
                private toastr: ToastrService) { }

  ngOnInit(): void {
    this.changingHeader(this.maTab)

    // NGRX LISTEN LOADES CHAMGES
    this.loadingSubscription = this.store.select('loading')
      .subscribe(res => {
        setTimeout(() => { this.loader = res.isLoading; }, 10);
      });
  }
  
  ngOnDestroy(): void {
    this.loadingSubscription.unsubscribe();
  }

  changingHeader(val: any) {
    if (val.tab?.textLabel === 'First' || val === 'First') {
      this.color = '#2193b0';
      this.title = 'Lista de lançamentos futuros';
      this.maTab = 'First';
    } else if (val.tab?.textLabel === 'Second' || val === 'Second') {
      this.color = '#1faccc';
      this.title = 'Lista de lançamentos passados';
      this.maTab = 'Second';
    }
  }

  // SEARCH FUTURE LAUNCGES
  searchFutureLaunches(event: LauncheModel[]) {
    this.getFutureByName('searchControlFuture', event)
  }

  getFutureByName(searchControl?: any, searchLaunches?: any) {
    this.store.dispatch(actions.isLoading());
    const source = timer(1000);
    const subscribe = source.subscribe(() => this.store.dispatch(actions.stopLoading()));

    this.futurLaunches = this.searchService.getFutureByName(searchControl, searchLaunches)
    if (this.futurLaunches?.length === 0) {
      this.toastr.error('Nome não encontrado', 'Ops! 😌');
    }
  }

  // SEARCH PAST LAUNCGES
  searchPastLaunches(event: LauncheModel[]) {
    this.getPastByName('searchControlPast', event)
  }

  getPastByName(searchControl?: any, searchLaunches?: any) {
    this.store.dispatch(actions.isLoading());
    const source = timer(1000);
    const subscribe = source.subscribe(() => this.store.dispatch(actions.stopLoading()));

    this.pastLaunches = this.searchService.getPastByName(searchControl, searchLaunches)
    if (this.pastLaunches?.length === 0) {
      this.toastr.error('Nome não encontrado', 'Ops! 🌝');
    }
  }
}