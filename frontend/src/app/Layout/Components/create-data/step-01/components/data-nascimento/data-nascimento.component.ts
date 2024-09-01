import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-nascimento',
  templateUrl: './data-nascimento.component.html',
  styleUrls: ['./data-nascimento.component.css']
})
export class DataNascimentoComponent implements OnInit {
  @Input() formGroup!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    if (this.formGroup) {
      this.formGroup.addControl('dataExpedicaoRg', this.fb.control('', [Validators.required]));
    }
  }
}
