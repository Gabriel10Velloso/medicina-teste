import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from 'src/app/containers/main/main.component';

// Componentes Material, Forms (Reusable)
import { ComponentsModule } from 'src/app/components/components.module';
import { FutureLaunchesComponent } from 'src/app/containers/future-launches/future-launches.component';
import { PastLaunchesComponent } from 'src/app/containers/past-launches/past-launches.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
];
@NgModule({
  declarations: [MainComponent, FutureLaunchesComponent, PastLaunchesComponent],
  exports: [
    CommonModule,
    ComponentsModule,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(routes),
  ],
  providers: []
})
export class MainModule { }
