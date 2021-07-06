import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// SERVICES
import { FutureLaunchesService } from 'src/app/services/future-launches/future-launches.service';

// MODEL
import { LauncheModel } from 'src/app/models/launche/launche.model';

// NGRX
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from 'src/app/store/actions';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-future-launches',
  templateUrl: './future-launches.component.html',
  styleUrls: ['./future-launches.component.scss']
})
export class FutureLaunchesComponent implements OnInit {
  @Input() maTab: any;
  @Input() launches?: LauncheModel[];
  infoHeader = 'Informação da tripulação';
  infoHeader2 = 'Informação da carga útil';
  infoHeader3 = 'Informação do foguete';

  @Output() searchFutureLaunches = new EventEmitter<LauncheModel[]>();

  constructor(  private futureLaunchesService: FutureLaunchesService,
                private store: Store<AppState>,  
                private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getFutureLauches();
  }

  getFutureLauches() {
    this.store.dispatch(actions.isLoading());
    
    this.futureLaunchesService.getFutureLauches()
      .subscribe((res: LauncheModel[]) => {
        this.launches = res;
        this.searchFutureLaunches.emit(this.launches);
        this.store.dispatch(actions.stopLoading());
      }, err => {
        this.store.dispatch(actions.stopLoading());
        this.toastr.error('Recarregue  a página', 'Ops! 😅');
      })
  }

}
