import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-integral-trigonometrica',
  templateUrl: './integral-trigonometrica.component.html',
  styleUrls: ['./integral-trigonometrica.component.css']
})
export class IntegralTrigonometricaComponent implements OnInit {
    tipo:number=1;
    estadoRes:boolean=false
    inteTrigo = {
    num1:1,
    num2:1,
    ResultAB:0,
    ResultCos:0,
    ResultSin:0,
    ResultFinal:0,
    
  }
  constructor() { 
    
  }

  ngOnInit(): void {
  }


  calcularSinx(){
    this.inteTrigo.ResultFinal= -this.inteTrigo.num1;
    this.estadoRes=true;
  }

  calcularCosx(){
    this.inteTrigo.ResultFinal= -this.inteTrigo.num1;
    this.estadoRes=true;
  }

  calcularTanx(){
    this.inteTrigo.ResultFinal= -this.inteTrigo.num1;
    this.estadoRes=true;
  }

  calcularCoTanx(){
    this.inteTrigo.ResultFinal= -this.inteTrigo.num1;
    this.estadoRes=true;
  }

  calcularSecx(){
    this.inteTrigo.ResultFinal= -this.inteTrigo.num1;
    this.estadoRes=true;
  }

  calcularCSCx(){
    this.inteTrigo.ResultFinal= -this.inteTrigo.num1;
    this.estadoRes=true;
  }

  reset(){
    this.estadoRes=false;
  } 

  

}
