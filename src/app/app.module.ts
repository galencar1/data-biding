import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataBidingComponent } from './data-biding/data-biding.component';
import { InputOutputPropertiesModule } from './input-output-properties/input-output-properties.module';
import { MeuFormModule } from './meu-form/meu-form.module';

@NgModule({
  declarations: [
    AppComponent,
    DataBidingComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MeuFormModule,
    InputOutputPropertiesModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
