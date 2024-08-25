import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/Layout/Services/Api/api.service';

@Component({
  selector: 'app-step-01',
  templateUrl: './step-01.component.html',
  styleUrls: ['./step-01.component.css']
})
export class Step01Component implements OnInit {
  googleSheetForm!: FormGroup;
  userName: string | null = '';
  data$!: Observable<any[]>;

  constructor(
    private fb: FormBuilder,
    private serviceSheet: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.googleSheetForm = this.fb.group({
      nomeCivil: ['', Validators.required],
      nomeReceita: ['', Validators.required],
      tituloEleitoral: ['', Validators.required],
      cpf: ['', Validators.required],
      rg: ['', Validators.required],
      dataExpedicaoRg: ['', Validators.required],
      orgaoExpedidorRg: ['', Validators.required],
      estadoExpedicaoRg: ['', Validators.required],
      documentoClasse: ['', Validators.required],
      municipioNascimento: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      nacionalidade: ['', Validators.required],
      nomeMae: ['', Validators.required],
      nomePai: [''],
      deficiencia: ['', Validators.required],
      qualDeficiencia: [''],
      telefone1: ['', Validators.required],
      appsDisponiveis: this.fb.array([], Validators.required),
      telefone2: ['', Validators.required],
      appsDisponiveis2: this.fb.array([], Validators.required),
      estadoCivil: ['', Validators.required],
      racaCor: ['', Validators.required],
      genero: ['', Validators.required],
      identidadeGenero: [''],
      grauInstrucao: ['', Validators.required],
      ocupacao: ['', Validators.required],
      informarOutros: [''],
      adminPublica: ['', Validators.required],
    });

    this.loadData();
  }

  loadData() {
    this.data$ = this.serviceSheet.getData();
    this.data$.subscribe(data => {
      console.log('Data from Google Sheets:', data);
    });
  }

  onNext() {
    // this.router.navigate(['/passo-02']);
  }
}
