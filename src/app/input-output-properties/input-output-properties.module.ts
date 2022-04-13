import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputOutputPropertiesComponent } from './input-output-properties.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InputOutputPropertiesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    InputOutputPropertiesComponent
  ]
})
export class InputOutputPropertiesModule { }
