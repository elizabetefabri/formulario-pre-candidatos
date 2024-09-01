import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

const sexoGenero: { [key: string]: string } = {
  feminino: "Feminino",
  masculino: "Masculino"
};

@Component({
  selector: 'app-genero',
  templateUrl: './genero.component.html',
  styleUrls: ['./genero.component.css']
})
export class GeneroComponent implements OnInit{
  @Input() formGroup!: FormGroup;
  ngOnInit(): void { }

  sexoGeneroKeys = Object.keys(sexoGenero);
  sexoGenero = sexoGenero;
}
