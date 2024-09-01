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
import { TituloEleitoralComponent } from './Layout/Components/create-data/step-01/components/titulo-eleitoral/titulo-eleitoral.component';
import { CpfComponent } from './Layout/Components/create-data/step-01/components/cpf/cpf.component';
import { RgComponent } from './Layout/Components/create-data/step-01/components/rg/rg.component';
import { DataExpedicaoRgComponent } from './Layout/Components/create-data/step-01/components/data-expedicao-rg/data-expedicao-rg.component';
import { UfEstadoComponent } from './Layout/Components/create-data/step-01/components/uf-estado/uf-estado.component';
import { DataNascimentoComponent } from './Layout/Components/create-data/step-01/components/data-nascimento/data-nascimento.component';
import { Telefone01Component } from './Layout/Components/create-data/step-01/components/telefone-01/telefone-01.component';
import { Telefone02Component } from './Layout/Components/create-data/step-01/components/telefone-02/telefone-02.component';
import { EstadoCivilComponent } from './Layout/Components/create-data/step-01/components/estado-civil/estado-civil.component';
import { RacaCorComponent } from './Layout/Components/create-data/step-01/components/raca-cor/raca-cor.component';
import { GeneroComponent } from './Layout/Components/create-data/step-01/components/genero/genero.component';
import { GrauInstrucaoComponent } from './Layout/Components/create-data/step-01/components/grau-instrucao/grau-instrucao.component';
import { OcupacaoProfissionalComponent } from './Layout/Components/create-data/step-01/components/ocupacao-profissional/ocupacao-profissional.component';


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
    Step07Component,
    TituloEleitoralComponent,
    CpfComponent,
    RgComponent,
    DataExpedicaoRgComponent,
    UfEstadoComponent,
    DataNascimentoComponent,
    Telefone01Component,
    Telefone02Component,
    EstadoCivilComponent,
    RacaCorComponent,
    GeneroComponent,
    GrauInstrucaoComponent,
    OcupacaoProfissionalComponent
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
