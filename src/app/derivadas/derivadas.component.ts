import { Component, OnInit } from '@angular/core';
import { ApiExpresionService } from '../Services/api-expresion.service';
@Component({
  selector: 'app-derivadas',
  templateUrl: './derivadas.component.html',
  styleUrls: ['./derivadas.component.css']
})
export class DerivadasComponent implements OnInit {
  tipo:number=3;
  estadoRes:boolean=false;
  anchoPantalla:number = document.documentElement.scrollWidth;
  a(){
    this.anchoPantalla = document.documentElement.scrollWidth;
  }
  deriSimple = {
    expo1:1,
    num1:1,
    ResExp1:0,
    ResNum1:0
  }

  cadena = {
    num: 4,
    expo1: 1,
    num_2: 1,
    expo1_2: 2,
    expo2: 3
  }

  expresion = {
    exp: "",
    response: ""
  }

  constructor(
    private _api:ApiExpresionService
    ) {
    
  }

  ngOnInit(): void {
  }

  calcularDer1(){
    this.deriSimple.ResExp1=this.deriSimple.expo1-1;
    this.deriSimple.ResNum1= this.deriSimple.num1*this.deriSimple.expo1;
    this.estadoRes=true;
  }

  reset(){
    this.estadoRes=false;
  }

  calcularDer2(){
    this.estadoRes=true;
  }

  calcularExpresion(){
    this._api.getDerivada(this.expresion.exp).subscribe(res=>{
      this.expresion.response = res.data;
      this.estadoRes = true;
      console.log(this.estadoRes);
      console.log(this.estadoRes);
    }, err => {
      console.log(err);
      this.expresion.response = err.error.data;
      this.estadoRes = true;
    })
  }
 
}
