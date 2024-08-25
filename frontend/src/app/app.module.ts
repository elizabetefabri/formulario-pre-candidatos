import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { API_KEY, GoogleSheetsDbService } from 'ng-google-sheets-db';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './Layout/Shared/ComponentsMaterial/components.module';
import {MatStepperIntl} from '@angular/material/stepper';
import { CreateDataComponent } from './Layout/Components/create-data/create-data.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    ComponentsModule
  ],
  providers: [
    {provide: API_KEY, useValue: 'AIzaSyDwttckyXhkIWsKrkCbHoXWLLpkeIu5r8Y'},
    GoogleSheetsDbService,
    provideNgxMask()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
