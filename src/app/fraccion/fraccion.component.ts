import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fraccion',
  templateUrl: './fraccion.component.html',
  styleUrls: ['./fraccion.component.css']
})
export class FraccionComponent implements OnInit {
  @Input() numerador = "";
  @Input() denominador = "1";
  @Input() exponente = "1";
  constructor() { }

  ngOnInit(): void {
  }

}
