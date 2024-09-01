import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

const grauInstrucao: { [key: string]: string } = {
  analfabeto: 'Analfabeto(a)',
  fundamental_incompleto: 'Fundamental incompleto',
  fundamental_completo: 'Fundamental completo',
  medio_incompleto: 'Médio incompleto',
  medio_completo: 'Médio completo',
  superior_incompleto: 'Superior incompleto',
  superior_completo: 'Superior completo',
  pos_incompleto: 'Pós-graduação/Mestrado/Doutorado incompleto',
  pos_completo: 'Pós-graduação/Mestrado/Doutorado completo'
};

@Component({
  selector: 'app-grau-instrucao',
  templateUrl: './grau-instrucao.component.html',
  styleUrls: ['./grau-instrucao.component.css']
})
export class GrauInstrucaoComponent implements OnInit{
  @Input() formGroup!: FormGroup;
  ngOnInit(): void { }

  grauInstrucaoKeys = Object.keys(grauInstrucao);
  grauInstrucao = grauInstrucao;
}

