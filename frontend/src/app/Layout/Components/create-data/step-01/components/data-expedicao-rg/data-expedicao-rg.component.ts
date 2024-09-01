import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-expedicao-rg',
  templateUrl: './data-expedicao-rg.component.html',
  styleUrls: ['./data-expedicao-rg.component.css']
})
export class DataExpedicaoRgComponent  implements OnInit {
  @Input() formGroup!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    if (this.formGroup) {
      this.formGroup.addControl('dataExpedicaoRg', this.fb.control('', [Validators.required]));
    }
  }
}
