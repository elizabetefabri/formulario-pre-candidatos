import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-telefone-02',
  templateUrl: './telefone-02.component.html',
  styleUrls: ['./telefone-02.component.css']
})
export class Telefone02Component implements OnInit {
  @Input() formGroup!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    if (!this.formGroup.get('telefone2')) {
      this.formGroup.addControl('telefone2', this.fb.control('', Validators.required));
    }
    if (!this.formGroup.get('appsDisponiveis2')) {
      this.formGroup.addControl('appsDisponiveis2', this.fb.array([]));
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

