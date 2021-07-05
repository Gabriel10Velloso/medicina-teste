import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// MODELS
import { MaterialModule } from './material.module';

// COMPONENTS REUSABLE
import { HeaderComponent } from './header/header.component';
import { ModalInfoComponent } from './modal-info/modal-info.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    HeaderComponent, 
    ModalInfoComponent, 
    LoaderComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
  ],

  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,

    // Components
    HeaderComponent,
    ModalInfoComponent,
    LoaderComponent,
  ],
  providers: [],
})

export class ComponentsModule { }




