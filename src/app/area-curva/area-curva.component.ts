import { Component, OnInit } from '@angular/core';
import { ResInte } from '../integrales-basicas/model/RespuestaInte';
import { ApiExpresionService } from '../Services/api-expresion.service';

@Component({
  selector: 'app-area-curva',
  templateUrl: './area-curva.component.html',
  styleUrls: ['./area-curva.component.css']
})
export class AreaCurvaComponent implements OnInit {

  public items:ResInte = new ResInte();
  public liInf:number = 0;
  public liSup:number = 0;
  public errorLim:boolean = false;
  public response:number = 0;
  public estadoRes:boolean = false;
  public botonactivo:boolean=false;
  public divergente:boolean = false;
  public signo:string = "";

  public parentesisUno = {
    numerador:0,
    denominador: 0
  }

  public parentesisDos = {
    numerador:0,
    denominador: 0
  }

  public modal = {
    title:"",
    description:""
  }

  public resFra = {
    numerador:0,
    denominador: 0
  }

  addItem(newItem:any) {
      this.items = newItem;
      console.log(newItem)
  }

  addItem2(newItem:any){
    this.estadoRes = newItem;
    this.items.tipo=0;
  }

  calcularArea(){
    if(this.liInf <= this.liSup){
      switch(this.items.tipo){
        case 1 : 
          this.estadoRes = true;
          this.calcularAreaSimple(); break;
        case 1.5:
          this.estadoRes = true;
          this.calcularLogaritmo(); break;
        case 2:
          this.estadoRes = true; 
          this.calcularSep(); break;
        default: 
          this.modal.title = "Error al calcular area";
          this.modal.description = "Primero debe de calcular la integral";
          this.errorLim = true
      }
    } else {
      this.modal.title = "Error de limites";
      this.modal.description = "El limite superior no puede ser menor al inferior";
      this.errorLim = true;
    }


  }

  calcularAreaSimple(){
    let divisor1:any = this.items.integralsimple.respdivisor1;
    let respNum:any = this.items.integralsimple.respnum1;
    let respexpo1 = this.items.integralsimple.respexpo1;
    divisor1 = parseFloat(divisor1);
    respNum = parseFloat(respNum);
    this.response = respNum * (Math.pow(this.liSup, respexpo1) / divisor1) - respNum * (Math.pow(this.liInf, respexpo1) / divisor1);
    if(this.response == Infinity){
      this.divergente = true;
    } else {
      this.divergente = false;
      this.servicio.getFraccion((respNum * (Math.pow(this.liSup, respexpo1) / divisor1) - respNum * (Math.pow(this.liInf, respexpo1) / divisor1))).subscribe(res=>{
        let resx = res.data;
        console.log(resx);
          this.resFra.numerador = resx.n;
          this.resFra.denominador = resx.d;
      })
    }
  }

  calcularLogaritmo(){
    let respNum:any = this.items.integralsimple.respnum1;
    respNum = parseFloat(respNum);
    this.response = respNum * Math.log(this.liSup) - respNum * Math.log(this.liInf);
  }
  
  calcularSep(){
    let num1:any = this.items.integralsimple.respnum1;
    let num2:any = this.items.integralsimple.respnum2;
    let div1:any = this.items.integralsimple.respdivisor1;
    let div2:any = this.items.integralsimple.respdivisor2;
    let exp1:any = this.items.integralsimple.respexpo1;
    let exp2:any = this.items.integralsimple.respexpo2;
    this.items.integralsimple.respnum1 = parseFloat(num1);
    num1 = parseFloat(num1);
    this.items.integralsimple.respnum2 = parseFloat(num2);
    num2 = parseFloat(num2);
    this.items.integralsimple.respdivisor1 = parseFloat(div1);
    div1 = parseFloat(div1);
    this.items.integralsimple.respdivisor2 = parseFloat(div2);
    div2 = parseFloat(div2);
    this.items.integralsimple.respexpo1 = parseFloat(exp1);
    exp1 = parseFloat(exp1);
    this.items.integralsimple.respexpo2 = parseFloat(exp2);
    exp2 = parseFloat(exp2);
    this.signo = (this.items.integralsimple.respnum2 < 0) ? "-" : "+";
    this.items.integralsimple.respnum2 = (this.items.integralsimple.respnum2<0) ? (-this.items.integralsimple.respnum2):(this.items.integralsimple.respnum2);
    let respuesta = (num1 * Math.pow(this.liSup, exp1)) / div1 + (num2 * Math.pow(this.liSup, exp2)) / div2;
    //Calcular primer paréntesis
    this.servicio.getFraccion((num1 * Math.pow(this.liSup, exp1)) / div1 + (num2 * Math.pow(this.liSup, exp2)) / div2).subscribe(res=>{
      let resx = res.data;
      this.parentesisUno.numerador = resx.n;
      this.parentesisUno.denominador = resx.d;
      //Calcular segundo paréntesis
      this.servicio.getFraccion((num1 * Math.pow(this.liInf, exp1)) / div1 + (num2 * Math.pow(this.liInf, exp2)) / div2).subscribe(res=>{
        let resx2 = res.data;
        this.parentesisDos.numerador = resx2.n;
        this.parentesisDos.denominador = resx2.d;
        //Calcular respuesta
        this.servicio.getFraccion(this.parentesisUno.numerador/this.parentesisUno.denominador - this.parentesisDos.numerador/this.parentesisDos.denominador).subscribe(res=>{
          let resx3 = res.data;
          this.resFra.numerador = resx3.n;
          this.resFra.denominador = resx3.d;
          
        })
      })
    })
  }




  constructor(public servicio:ApiExpresionService) { }



  ngOnInit(): void {
  }

}
