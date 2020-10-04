import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyformRoutingModule } from './lazyform-routing.module';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormularioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LazyformRoutingModule
  ]
})
export class LazyformModule { }
