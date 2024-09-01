import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

const estados: { [key: string]: string } = {
  AC: "Acre",
  AL: "Alagoas",
  AP: "Amapá",
  AM: "Amazonas",
  BA: "Bahia",
  CE: "Ceará",
  DF: "Distrito Federal",
  ES: "Espírito Santo",
  GO: "Goiás",
  MA: "Maranhão",
  MT: "Mato Grosso",
  MS: "Mato Grosso do Sul",
  MG: "Minas Gerais",
  PA: "Pará",
  PB: "Paraíba",
  PR: "Paraná",
  PE: "Pernambuco",
  PI: "Piauí",
  RJ: "Rio de Janeiro",
  RN: "Rio Grande do Norte",
  RS: "Rio Grande do Sul",
  RO: "Rondônia",
  RR: "Roraima",
  SC: "Santa Catarina",
  SP: "São Paulo",
  SE: "Sergipe",
  TO: "Tocantins"
};

@Component({
  selector: 'app-uf-estado',
  templateUrl: './uf-estado.component.html',
  styleUrls: ['./uf-estado.component.css']
})
export class UfEstadoComponent implements OnInit {
  @Input() formGroup!: FormGroup;

  estadoKeys = Object.keys(estados);
  estados = estados;

  ngOnInit(): void { }
}

