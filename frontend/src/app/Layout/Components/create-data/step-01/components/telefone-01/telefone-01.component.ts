import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-telefone-01',
  templateUrl: './telefone-01.component.html',
  styleUrls: ['./telefone-01.component.css']
})
export class Telefone01Component implements OnInit {
  @Input() formGroup!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    if (!this.formGroup.get('telefone1')) {
      this.formGroup.addControl('telefone1', this.fb.control('', Validators.required));
    }
    if (!this.formGroup.get('appsDisponiveis')) {
      this.formGroup.addControl('appsDisponiveis', this.fb.array([]));
    }
  }

  onCheckboxChange(event: any, formArrayName: string) {
    const formArray: FormArray = this.formGroup.get(formArrayName) as FormArray;

    if (event.target.checked) {
      formArray.push(this.fb.control(event.target.value));
    } else {
      let i: number = 0;
      formArray.controls.forEach((ctrl: any) => {
        if (ctrl.value == event.target.value) {
          formArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
}
