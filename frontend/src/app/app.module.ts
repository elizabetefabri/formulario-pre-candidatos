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
import { Step01Component } from './Layout/Components/create-data/step-01/step-01.component';
import { Step02Component } from './Layout/Components/create-data/step-02/step-02.component';
import { Step03Component } from './Layout/Components/create-data/step-03/step-03.component';
import { Step04Component } from './Layout/Components/create-data/step-04/step-04.component';
import { Step05Component } from './Layout/Components/create-data/step-05/step-05.component';
import { Step06Component } from './Layout/Components/create-data/step-06/step-06.component';
import { Step07Component } from './Layout/Components/create-data/step-07/step-07.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateDataComponent,
    Step01Component,
    Step02Component,
    Step03Component,
    Step04Component,
    Step05Component,
    Step06Component,
    Step07Component
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
