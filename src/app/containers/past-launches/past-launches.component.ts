import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LauncheModel } from 'src/app/models/launche/launche.model';
import { PastLouchesService } from 'src/app/services/past-launches/past-louches.service';

// NGRX
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from 'src/app/store/actions';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-past-launches',
  templateUrl: './past-launches.component.html',
  styleUrls: ['./past-launches.component.scss']
})
export class PastLaunchesComponent implements OnInit{
  @Input() maTab: any;
  @Input() launches?: LauncheModel[];
  @Output() searchPastLaunches = new EventEmitter<LauncheModel[]>();
  
  infoHeader = 'Informação da tripulação';
  infoHeader2 = 'Informação da carga útil'; 
  infoHeader3 = 'Informação do foguete';

  constructor(private pastLouchesService: PastLouchesService, private store: Store<AppState>,  private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getPastLauches();
  }

  getPastLauches() {
    this.store.dispatch(actions.isLoading());

    this.pastLouchesService.getPastLauches()
      .subscribe((res: LauncheModel[]) => {
        this.launches = res;
        this.searchPastLaunches.emit(this.launches);
        this.store.dispatch(actions.stopLoading());
      },
      err=>{
        this.store.dispatch(actions.stopLoading());
        this.toastr.error('Recarregue a página', 'Ops! 😌');
      })
  }





}