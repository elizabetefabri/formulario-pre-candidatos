import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

const ocupacoes: { [key: string]: string } = {
  estagiario: "Estagiário(a)",
  auxiliar_administrativo: "Auxiliar Administrativo",
  agente_servicos_gerais: "Agente de Serviços Gerais",
  tecnico_administrativo: "Técnico Administrativo",
  assistente_tecnico: "Assistente Técnico",
  tecnico_nivel_medio: "Técnico de Nível Médio",
  agente_transito: "Agente de Trânsito",
  policial_militar: "Policial Militar",
  professor_ensino_publico: "Professor de Ensino Público",
  tecnico_judiciario: "Técnico Judiciário",
  agente_policia_federal: "Agente da Polícia Federal",
  analista_administrativo: "Analista Administrativo",
  analista_judiciario: "Analista Judiciário",
  auditor_fiscal: "Auditor Fiscal",
  delegado_policia: "Delegado de Polícia",
  procurador: "Procurador",
  promotor_justica: "Promotor de Justiça",
  juiz: "Juiz",
  desembargador: "Desembargador",
  diretor_departamento: "Diretor de Departamento"
};

@Component({
  selector: 'app-ocupacao-profissional',
  templateUrl: './ocupacao-profissional.component.html',
  styleUrls: ['./ocupacao-profissional.component.css']
})
export class OcupacaoProfissionalComponent implements OnInit{
  @Input() formGroup!: FormGroup;

  ocupacaoKeys = Object.keys(ocupacoes);
  ocupacoes = ocupacoes;

  ngOnInit(): void { }
}
