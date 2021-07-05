import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

// OPEN DIALOG
import { MatDialog } from '@angular/material/dialog';

// SERVICES
import { CrewService } from 'src/app/services/crew/crew.service';
import { PayloadService } from 'src/app/services/payload/payload.service';

// MODELS
import { PayloadModel } from '../../models/payload/payload.modal';
import { RocketModel } from 'src/app/models/rocket/rocket.model';
import { CrewModel } from 'src/app/models/crew/crew.model';

// NGRX
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from 'src/app/store/actions';
import { RocketService } from 'src/app/services/rocket/rocket.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.scss']
})
export class ModalInfoComponent implements OnInit {

  crew?: CrewModel;
  rocket?: RocketModel;
  payload?: PayloadModel;
  showAndHiden = false;

  infoHeader: string = '';
  crews: string[] = [];
  payloads: string[] = [];
  crewMember: any = '';

  valImg?: number = 0;

  @ViewChild('dialogCrewRocket', { static: false }) dialogCrewRocket: TemplateRef<any> | any; // open modal crew
  @ViewChild('dialogPayloads', { static: false }) dialogPayloads: TemplateRef<any> | any; // open modal payloads

  constructor(  public dialog: MatDialog, 
                private srewService: CrewService,
                private payloadService: PayloadService, 
                private store: Store<AppState>,
                private rocketService: RocketService,
                private toastr: ToastrService) { }

  ngOnInit(): void { }

  // OPEN MODAL CREWS
  openDialogModalCrews(infoHeader: string, crews: any): void {
    this.showAndHiden = true;
    this.crews = [];
    this.payloads = [];
    this.rocket = {};

    this.infoHeader = infoHeader;
    this.crews = crews;
    this.dialog.open(this.dialogCrewRocket, {
      autoFocus: false,
      disableClose: false,
      panelClass: 'custom-dialog-crewsRocket'
    });
    this.crewRocket(this.crews[0], 0)
  }

  // FIND CREW
  crewRocket(id: string, crewMember: any) {
    this.store.dispatch(actions.isLoading());
    this.crewMember = `0${crewMember + 1}`;

    this.srewService.crewRocket(id)
      .subscribe((res: CrewModel) => {
        this.crew = res;
        this.store.dispatch(actions.stopLoading());
      }, err => {
        this.store.dispatch(actions.stopLoading());
        this.toastr.error('Erro ao encontrar', 'Tripulação');
      })
  }

  // OPEN MODAL PAYLOADS
  openDialogModalPayloads(infoHeader2: string, payloads: any): void {
    this.crews = [];
    this.payloads = [];
    this.rocket = {};
    this.infoHeader = infoHeader2;
    this.payloads = payloads;

    this.dialog.open(this.dialogPayloads, {
      autoFocus: false,
      disableClose: false,
      panelClass: 'custom-dialog-payloads'
    });
    this.payloadRocket(this.payloads[0])
  }

  // FIND PAYLOADS
  payloadRocket(id: string) {
    this.store.dispatch(actions.isLoading());

    this.payloadService.payloadRocket(id)
      .subscribe((res: PayloadModel) => {
        this.payload = res;
        this.store.dispatch(actions.stopLoading());
      }, err => {
        this.store.dispatch(actions.stopLoading());
        this.toastr.error('Erro ao encontrar', 'Carga útil');
      })
  }

  // OPEN MODAL ROCKETS
  openDialogModalRockets(infoHeader3: string, rocketInfo: any) {
    this.showAndHiden = false;
    this.rocket = {};
    this.crews = [];
    this.payloads = [];
    this.rocket = rocketInfo;
    this.infoHeader = infoHeader3;
    this.dialog.open(this.dialogCrewRocket, {
      autoFocus: false,
      disableClose: false,
      panelClass: 'custom-dialog-crewsRocket'
    });
    this.findRocket(this.rocket)
  }

  // FIND PAYLOADS
  findRocket(id: any) {
    this.store.dispatch(actions.isLoading());
    
    this.rocketService.findRocket(id)
      .subscribe((res: PayloadModel) => {
        this.rocket = res;
        this.store.dispatch(actions.stopLoading());
      }, err => {
        this.store.dispatch(actions.stopLoading());
        this.toastr.error('Erro ao encontrar', 'Foguete');
      })
  }

  showImg(i: number) {
    this.valImg = i;
  }
}
