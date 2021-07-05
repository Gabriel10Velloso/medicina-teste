import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureLaunchesComponent } from './future-launches.component';

describe('FutureLaunchesComponent', () => {
  let component: FutureLaunchesComponent;
  let fixture: ComponentFixture<FutureLaunchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FutureLaunchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureLaunchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
