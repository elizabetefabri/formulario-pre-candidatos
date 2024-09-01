import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

const racasCores: { [key: string]: string } = {
  branca: "Branca",
  preta: "Preta",
  parda: "Parda",
  amarela: "Amarela",
  indigena: "Indígena"
};

@Component({
  selector: 'app-raca-cor',
  templateUrl: './raca-cor.component.html',
  styleUrls: ['./raca-cor.component.css']
})
export class RacaCorComponent implements OnInit{
  @Input() formGroup!: FormGroup;

  racaCorKeys = Object.keys(racasCores);
  racasCores = racasCores;

  ngOnInit(): void { }

}
