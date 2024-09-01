import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

const estadosCivis: { [key: string]: string } = {
  solteiro: "Solteiro(a)",
  casado: "Casado(a)",
  separado: "Separado(a) judicialmente",
  divorciado: "Divorciado(a)",
  viuvo: "Viúvo(a)",
  uniaoEstavel: "União estável"
};

@Component({
  selector: 'app-estado-civil',
  templateUrl: './estado-civil.component.html',
  styleUrls: ['./estado-civil.component.css']
})
export class EstadoCivilComponent implements OnInit{
  @Input() formGroup!: FormGroup;

  estadoCivilKeys = Object.keys(estadosCivis);
  estadosCivis = estadosCivis;

  ngOnInit(): void { }
}
