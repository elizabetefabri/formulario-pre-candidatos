import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tituloEleitoralValidator } from 'src/app/Validators/titulo-eleitoral.validator';

@Component({
  selector: 'app-titulo-eleitoral',
  templateUrl: './titulo-eleitoral.component.html',
  styleUrls: ['./titulo-eleitoral.component.css']
})
export class TituloEleitoralComponent implements OnInit {
  @Input() formGroup!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup.addControl('tituloEleitoral', this.fb.control('', [Validators.required, tituloEleitoralValidator()]));
  }
}
