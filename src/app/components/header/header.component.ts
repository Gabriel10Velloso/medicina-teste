import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { LauncheModel } from 'src/app/models/launche/launche.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() color: any;
  @Input() title: any;
  @Input() maTab: any;
  
  futureSearch = new FormControl();
  pastSearch = new FormControl();

  @Input() futurLaunches?: LauncheModel[];
  @Input() pastLaunches?: LauncheModel[];

  @Output() searchEventFuture = new EventEmitter<any>();
  @Output() searchEventPast = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {  
    this.futureSearchSpaceX();
    this.pastSearchSpaceX();
  }

  // SEARCH SpaceX API NAME (LOCAL)
  futureSearchSpaceX() {
    this.futureSearch.valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged())
      .subscribe(value => {
        this.searchEventFuture.emit(value)
      });
  }

    // SEARCH SpaceX API NAME (LOCAL)
    pastSearchSpaceX() {
      this.pastSearch.valueChanges
        .pipe(
          debounceTime(1000),
          distinctUntilChanged())
        .subscribe(value => {
          this.searchEventPast.emit(value)
        });
    }
}
