import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cpfValidator } from 'src/app/Validators/cpf.validator';

@Component({
  selector: 'app-cpf',
  templateUrl: './cpf.component.html',
  styleUrls: ['./cpf.component.css']
})
export class CpfComponent implements OnInit{
  @Input() formGroup!: FormGroup;

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.formGroup.addControl('cpf', this.fb.control('', [Validators.required, cpfValidator.ValidaCpf]));
  }
}
