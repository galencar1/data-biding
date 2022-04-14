import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataBidingComponent } from './data-biding/data-biding.component';
import { InputOutputPropertiesComponent } from './input-output-properties/input-output-properties.component';
import { MeuFormModule } from './meu-form/meu-form.module';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { CicloComponent } from './ciclo/ciclo.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBidingComponent,
    OutputPropertyComponent,
    InputOutputPropertiesComponent,
    CicloComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MeuFormModule,
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
