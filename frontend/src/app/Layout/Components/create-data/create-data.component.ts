import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { ApiService } from '../../Services/Api/api.service';

@Component({
  selector: 'app-create-data',
  templateUrl: './create-data.component.html',
  styleUrls: ['./create-data.component.css'],
})
export class CreateDataComponent implements OnInit {
  @ViewChild('stepper') private stepper!: MatStepper;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  sixthFormGroup: FormGroup;
  seventhFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private serviceSheet: ApiService) {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required],
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required],
    });
    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl: ['', Validators.required],
    });
    this.sixthFormGroup = this._formBuilder.group({
      sixthCtrl: ['', Validators.required],
    });
    this.seventhFormGroup = this._formBuilder.group({
      seventhCtrl: ['', Validators.required],
    });
  }
  ngOnInit(): void {}

  onSubmit() {
    // Verificar se todos os formulários são válidos
    if (this.firstFormGroup.valid &&
        this.secondFormGroup.valid &&
        this.thirdFormGroup.valid &&
        this.fourthFormGroup.valid &&
        this.fifthFormGroup.valid &&
        this.sixthFormGroup.valid &&
        this.seventhFormGroup.valid) {

      // Coletar todos os dados dos formulários
      const allFormData = {
        ...this.firstFormGroup.value,
        ...this.secondFormGroup.value,
        ...this.thirdFormGroup.value,
        ...this.fourthFormGroup.value,
        ...this.fifthFormGroup.value,
        ...this.sixthFormGroup.value,
        ...this.seventhFormGroup.value,
      };

      // Enviar os dados para o Google Sheets
      this.serviceSheet.addData(allFormData).subscribe(
        response => {
          console.log('Todos os dados enviados com sucesso:', response);
          alert('Dados enviados com sucesso!');
          this.stepper.reset(); // Resetar o stepper após o envio
        },
        error => {
          console.error('Erro ao enviar os dados:', error);
          alert('Ocorreu um erro ao enviar os dados. Por favor, tente novamente.');
        }
      );
    } else {
      alert('Por favor, preencha todos os campos obrigatórios em todas as etapas.');
    }
  }
}
