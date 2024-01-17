import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
@Input()
photoCover:string="32604606"
@Input()
cardTitle:string="NOVO HOMEM DE FERRO ANUNCIADO"
@Input()
cardDescription:string =" Marvel Studios anuncia novo homem de ferro"

  constructor() { }

  ngOnInit(): void {
  }

}
