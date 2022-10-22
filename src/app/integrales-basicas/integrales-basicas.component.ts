
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiExpresionService } from '../Services/api-expresion.service';
import { integralsimple, ResInte } from './model/RespuestaInte';


@Component({
  selector: 'app-integrales-basicas',
  templateUrl: './integrales-basicas.component.html',
  styleUrls: ['./integrales-basicas.component.css']
})
export class IntegralesBasicasComponent implements OnInit {


  tipo:number=2;
  estadoRes:boolean=false
 

  public intsimple = {
     num1:1,
     expo1:1,
     divisor1:1,
     numerador1:1,
     divisor2:1,
     
  }

  public intoperacion= {
    num1:1,
    expo1:1,
    divisor1:1,
    num2:1,
    expo2:1,
    operador:1,
    numerador1:0,
    numerador2:0,
    numerador3:0,
    divisor2:0,
    divisor3:0,
 }

 

 
  public simpleintegral:ResInte = new ResInte();
 
  @Output() newItemEvent = new EventEmitter<ResInte>();
  @Output() newItemEvent3 = new EventEmitter<any>();

  addNewItem() {
    this.newItemEvent.emit(this.simpleintegral);
    this.newItemEvent3.emit(this.calcularint1);
  }

  @Output() newItemEvent2 = new EventEmitter<boolean>();

  addNewItem2() {
    this.newItemEvent2.emit(false);
  }

  

  constructor(private servicio:ApiExpresionService) {
    
  }


  ngOnInit(): void {
  }

  
 
  calcularint1(){
 
          this.servicio.getDerivada((this.intsimple.num1/(this.intsimple.expo1+1))+"x").subscribe(res=>{
            let resx = res.data.split("/")
            console.log(resx);
            if(resx.length == 2){
              this.intsimple.numerador1 = resx[0]
              this.intsimple.divisor2 = resx[1]
              this.simpleintegral.integralsimple.respnum1 = this.intsimple.numerador1;
              this.simpleintegral.integralsimple.respexpo1 = this.intsimple.expo1 + 1;
              this.simpleintegral.integralsimple.respdivisor1 = this.intsimple.divisor2;
              this.estadoRes=true;
            }
            else{
              this.intsimple.numerador1 = resx[0]
              this.simpleintegral.integralsimple.respnum1 = this.intsimple.numerador1;
              this.simpleintegral.integralsimple.respexpo1 = this.intsimple.expo1 + 1;
              this.simpleintegral.integralsimple.respdivisor1 = 1;
              this.estadoRes=true;

            }
            if(this.intsimple.expo1 == -1){
              this.simpleintegral.tipo = 1.5;
              this.simpleintegral.integralsimple.respnum1 = this.intsimple.num1
            }
            else{
              this.simpleintegral.tipo = 1;
            }            
            this.addNewItem()
            
          })
         
    }



    calcularint2(){

          if(this.intoperacion.operador == 1 ){
            this.calcularsuma();
          }
          if(this.intoperacion.operador == 2){
            this.calcularresta();
          }
          if(this.intoperacion.operador == 3){

            this.simpleintegral.integraloperacion.resnum1 = this.intoperacion.num1 * this.intoperacion.num2;
            this.simpleintegral.integraloperacion.resexpo1 = this.intoperacion.expo1 + this.intoperacion.expo2;

            this.servicio.getDerivada((this.simpleintegral.integraloperacion.resnum1/(this.simpleintegral.integraloperacion.resexpo1+1))+"x").subscribe(res=>{

              let resx = res.data.split("/")
              console.log(resx);
              if(resx.length == 2){
                this.intoperacion.numerador1 = resx[0]
                this.intoperacion.divisor1 = resx[1]
                this.simpleintegral.integraloperacion.resnum2 = this.intoperacion.numerador1;
                this.simpleintegral.integraloperacion.resexpo2 = this.simpleintegral.integraloperacion.resexpo1 + 1;
                this.simpleintegral.integraloperacion.resdivisor1 = this.intoperacion.divisor1;
                this.estadoRes=true;
              }
              else{
                this.intoperacion.numerador1 = resx[0]
                this.intoperacion.divisor1 = 1
                this.simpleintegral.integraloperacion.resnum2 = this.intoperacion.numerador1;
                this.simpleintegral.integraloperacion.resexpo2 = this.simpleintegral.integraloperacion.resexpo1 + 1;
                this.simpleintegral.integraloperacion.resdivisor1 = 1;
                this.estadoRes=true;
  
              }
              this.simpleintegral.integralsimple.respdivisor1 = this.simpleintegral.integraloperacion.resdivisor1
              this.simpleintegral.integralsimple.respnum1 = this.simpleintegral.integraloperacion.resnum2
              this.simpleintegral.integralsimple.respexpo1 = this.simpleintegral.integraloperacion.resexpo2
              this.simpleintegral.tipo = 1;
              this.addNewItem()
            })
          }

          if(this.intoperacion.operador == 4){

            this.simpleintegral.integraloperacion.resnum3 = this.intoperacion.num1 / this.intoperacion.num2;
            this.simpleintegral.integraloperacion.resexpo1 = this.intoperacion.expo1 - this.intoperacion.expo2;

            this.servicio.getDerivada((this.simpleintegral.integraloperacion.resnum3+"x")).subscribe(res=>{
              let resx = res.data.split("/")
              console.log(resx);
              if(resx.length == 2){
                this.intoperacion.numerador1 = resx[0]
                this.intoperacion.divisor1 = resx[1]
                this.simpleintegral.integraloperacion.resexpo2 = this.simpleintegral.integraloperacion.resexpo1 + 1;
                this.simpleintegral.integraloperacion.resdivisor1 = this.intoperacion.divisor1;
                this.estadoRes=true;
                
              }
              else{
                this.intoperacion.numerador1 = resx[0]
                this.intoperacion.divisor1 = 1
                this.simpleintegral.integraloperacion.resnum2 = this.intoperacion.numerador1;
                this.simpleintegral.integraloperacion.resexpo2 = this.simpleintegral.integraloperacion.resexpo1 + 1;
                this.simpleintegral.integraloperacion.resdivisor1 = 1;
                this.estadoRes=true;
              }
              this.calcularint2_2();
              
            })

          }
        }

    calcularsuma(){
      if(this.intoperacion.expo1 == this.intoperacion.expo2){
  
          this.simpleintegral.integraloperacion.resnum1 = this.intoperacion.num1 + this.intoperacion.num2;
          this.servicio.getDerivada(this.simpleintegral.integraloperacion.resnum1+"x").subscribe(res=>{
          let resx1 = res.data.split("/")
            if(resx1.length == 2){
              this.simpleintegral.integraloperacion.resnum3 = resx1[0]
              this.simpleintegral.integraloperacion.resdivisor3 = resx1[1]
            }
            else{
              this.simpleintegral.integraloperacion.resnum3 = resx1[0]
              this.simpleintegral.integraloperacion.resdivisor3 = 1
            }
          })
          
        this.servicio.getDerivada((this.simpleintegral.integraloperacion.resnum1/(this.intoperacion.expo1+1))+"x").subscribe(res=>{
          let resx = res.data.split("/")
          console.log(resx);
          if(resx.length == 2){
            this.intoperacion.numerador1 = resx[0]
            this.intoperacion.divisor2 = resx[1]
            this.simpleintegral.integraloperacion.resnum2 = this.intoperacion.numerador1;
            this.simpleintegral.integraloperacion.resexpo1 = this.intoperacion.expo1 + 1;
            this.simpleintegral.integraloperacion.resdivisor1 = this.intoperacion.divisor2;
            this.estadoRes=true;
          }
          else{
            this.intoperacion.numerador1 = resx[0]
            this.simpleintegral.integraloperacion.resnum2 = this.intoperacion.numerador1;
            this.simpleintegral.integraloperacion.resexpo1 = this.intoperacion.expo1 + 1;
            this.simpleintegral.integraloperacion.resdivisor1 = 1;
            this.estadoRes=true;
  
          }
            this.simpleintegral.tipo = 1;
            this.simpleintegral.integralsimple.respnum1 = this.simpleintegral.integraloperacion.resnum2;
            this.simpleintegral.integralsimple.respexpo1 = this.simpleintegral.integraloperacion.resexpo1;
            this.simpleintegral.integralsimple.respdivisor1 = this.simpleintegral.integraloperacion.resdivisor1;
          this.addNewItem()
          
        })
      }
      else{
            this.servicio.getDerivada((this.intoperacion.num1/(this.intoperacion.expo1+1))+"x").subscribe(res=>{
            let resx = res.data.split("/")
            console.log(resx);
            if(resx.length == 2){
              this.intoperacion.numerador1 = resx[0]
              this.intoperacion.divisor1 = resx[1]
              this.simpleintegral.integraloperacion.resnum1 = this.intoperacion.numerador1;
              this.simpleintegral.integraloperacion.resexpo1 = this.intoperacion.expo1 + 1;
              this.simpleintegral.integraloperacion.resdivisor1 = this.intoperacion.divisor1;
              this.estadoRes=true;
            }
            else{
              this.intoperacion.numerador1 = resx[0]
              this.simpleintegral.integraloperacion.resnum1 = this.intoperacion.numerador1;
              this.simpleintegral.integraloperacion.resexpo1 = this.intoperacion.expo1 + 1;
              this.simpleintegral.integraloperacion.resdivisor1 = 1;
              this.estadoRes=true;
  
            }
            if(this.intoperacion.expo1 == -1){
              this.simpleintegral.tipo = 1.5;
            }
            else{
              this.simpleintegral.tipo = 2;
            }
            
                this.servicio.getDerivada((this.intoperacion.num2/(this.intoperacion.expo2+1))+"x").subscribe(res=>{
                  let resx3 = res.data.split("/")
                  console.log(resx3);
                  if(resx3.length == 2){
                    this.intoperacion.numerador2 = resx3[0]
                    this.intoperacion.divisor2 = resx3[1]
                    this.simpleintegral.integraloperacion.resnum2 = this.intoperacion.numerador2;
                    let num2:any = this.simpleintegral.integraloperacion.resnum2;
                    this.simpleintegral.integraloperacion.resnum2 = parseFloat(num2)
                    this.simpleintegral.integraloperacion.resexpo2 = this.intoperacion.expo2 + 1;
                    this.simpleintegral.integraloperacion.resdivisor2 = this.intoperacion.divisor2;
                    this.estadoRes=true;
                    console.log(this.simpleintegral.integraloperacion.resnum2)
                  }
                  else{
                    this.intoperacion.numerador1 = resx3[0]
                    this.simpleintegral.integraloperacion.resnum2 = this.intoperacion.numerador1;
                    this.simpleintegral.integraloperacion.resexpo2 = this.intoperacion.expo2 + 1;
                    this.simpleintegral.integraloperacion.resdivisor2 = 1;
                    this.estadoRes=true;
                    console.log(this.simpleintegral.integraloperacion.resnum2)
        
                  }
                  if(this.intoperacion.expo1 == -1){
                    this.simpleintegral.tipo = 1.5;
                  }
                  else{
                    this.simpleintegral.tipo = 2;
                  }  
                  this.simpleintegral.integralsimple.respnum1 = this.simpleintegral.integraloperacion.resnum1;
                  this.simpleintegral.integralsimple.respexpo1 = this.simpleintegral.integraloperacion.resexpo1;
                  this.simpleintegral.integralsimple.respdivisor1 = this.simpleintegral.integraloperacion.resdivisor1; 
                  this.simpleintegral.integralsimple.respnum2 = this.simpleintegral.integraloperacion.resnum2;
                  this.simpleintegral.integralsimple.respexpo2 = this.simpleintegral.integraloperacion.resexpo2;
                  this.simpleintegral.integralsimple.respdivisor2 = this.simpleintegral.integraloperacion.resdivisor2;        
                  this.addNewItem()
                  
                })
            
          })

        }
    }

    calcularresta(){
      if(this.intoperacion.expo1 == this.intoperacion.expo2){
  
          this.simpleintegral.integraloperacion.resnum1 = this.intoperacion.num1 - this.intoperacion.num2;
          this.servicio.getDerivada(this.simpleintegral.integraloperacion.resnum1+"x").subscribe(res=>{
          let resx1 = res.data.split("/")
            if(resx1.length == 2){
              this.simpleintegral.integraloperacion.resnum3 = resx1[0]
              this.simpleintegral.integraloperacion.resdivisor3 = resx1[1]
            }
            else{
              this.simpleintegral.integraloperacion.resnum3 = resx1[0]
              this.simpleintegral.integraloperacion.resdivisor3 = 1
            }
          })
          
        this.servicio.getDerivada((this.simpleintegral.integraloperacion.resnum1/(this.intoperacion.expo1+1))+"x").subscribe(res=>{
          let resx = res.data.split("/")
          console.log(resx);
          if(resx.length == 2){
            this.intoperacion.numerador1 = resx[0]
            this.intoperacion.divisor2 = resx[1]
            this.simpleintegral.integraloperacion.resnum2 = this.intoperacion.numerador1;
            this.simpleintegral.integraloperacion.resexpo1 = this.intoperacion.expo1 + 1;
            this.simpleintegral.integraloperacion.resdivisor1 = this.intoperacion.divisor2;
            this.estadoRes=true;
          }
          else{
            this.intoperacion.numerador1 = resx[0]
            this.simpleintegral.integraloperacion.resnum2 = this.intoperacion.numerador1;
            this.simpleintegral.integraloperacion.resexpo1 = this.intoperacion.expo1 + 1;
            this.simpleintegral.integraloperacion.resdivisor1 = 1;
            this.estadoRes=true;
  
          }
            this.simpleintegral.tipo = 1;
            this.simpleintegral.integralsimple.respnum1 = this.simpleintegral.integraloperacion.resnum2;
            this.simpleintegral.integralsimple.respexpo1 = this.simpleintegral.integraloperacion.resexpo1;
            this.simpleintegral.integralsimple.respdivisor1 = this.simpleintegral.integraloperacion.resdivisor1;  
            this.addNewItem()
          
        })
      }
      else{
            this.servicio.getDerivada((this.intoperacion.num1/(this.intoperacion.expo1+1))+"x").subscribe(res=>{
            let resx = res.data.split("/")
            console.log(resx);
            if(resx.length == 2){
              this.intoperacion.numerador1 = resx[0]
              this.intoperacion.divisor1 = resx[1]
              this.simpleintegral.integraloperacion.resnum1 = this.intoperacion.numerador1;
              this.simpleintegral.integraloperacion.resexpo1 = this.intoperacion.expo1 + 1;
              this.simpleintegral.integraloperacion.resdivisor1 = this.intoperacion.divisor1;
              this.estadoRes=true;
            }
            else{
              this.intoperacion.numerador1 = resx[0]
              this.simpleintegral.integraloperacion.resnum1 = this.intoperacion.numerador1;
              this.simpleintegral.integraloperacion.resexpo1 = this.intoperacion.expo1 + 1;
              this.simpleintegral.integraloperacion.resdivisor1 = 1;
              this.estadoRes=true;
  
            }
            if(this.intoperacion.expo1 == -1){
              this.simpleintegral.tipo = 1.5;
            }
            else{
              this.simpleintegral.tipo = 2;
            }     
            
            this.servicio.getDerivada((-this.intoperacion.num2/(this.intoperacion.expo2+1))+"x").subscribe(res=>{
              let resx3 = res.data.split("/")
              console.log(resx3);
              if(resx3.length == 2){
                this.intoperacion.numerador2 = resx3[0]
                this.intoperacion.divisor2 = resx3[1]
                this.simpleintegral.integraloperacion.resnum2 = this.intoperacion.numerador2;
                let num2:any = this.simpleintegral.integraloperacion.resnum2;
                this.simpleintegral.integraloperacion.resnum2 = parseFloat(num2)
                this.simpleintegral.integraloperacion.resexpo2 = this.intoperacion.expo2 + 1;
                this.simpleintegral.integraloperacion.resdivisor2 = this.intoperacion.divisor2;
                this.estadoRes=true;
          
              }
              else{
                this.intoperacion.numerador1 = resx3[0]
                this.simpleintegral.integraloperacion.resnum2 = this.intoperacion.numerador1;
                this.simpleintegral.integraloperacion.resexpo2 = this.intoperacion.expo2 + 1;
                this.simpleintegral.integraloperacion.resdivisor2 = 1;
                this.estadoRes=true;
             
    
              }
              if(this.intoperacion.expo1 == -1){
                this.simpleintegral.tipo = 1.5;
              }
              else{
                this.simpleintegral.tipo = 2;
              }
              this.simpleintegral.tipo = 2;
              this.simpleintegral.integralsimple.respnum1 = this.simpleintegral.integraloperacion.resnum1;
              this.simpleintegral.integralsimple.respexpo1 = this.simpleintegral.integraloperacion.resexpo1;
              this.simpleintegral.integralsimple.respdivisor1 = this.simpleintegral.integraloperacion.resdivisor1; 
              this.simpleintegral.integralsimple.respnum2 = this.simpleintegral.integraloperacion.resnum2;
              this.simpleintegral.integralsimple.respexpo2 = this.simpleintegral.integraloperacion.resexpo2;
              this.simpleintegral.integralsimple.respdivisor2 = this.simpleintegral.integraloperacion.resdivisor2;        
              this.addNewItem()
              
            })
          })


        }
    }

  calcularint2_2(){

    this.simpleintegral.integraloperacion.resnum3 = this.intoperacion.num1 / this.intoperacion.num2;
    this.simpleintegral.integraloperacion.resexpo1 = this.intoperacion.expo1 - this.intoperacion.expo2;
    if(this.simpleintegral.integraloperacion.resexpo1 + 1 == 0){
      
      
    }
    else{
      this.servicio.getDerivada((this.simpleintegral.integraloperacion.resnum3/(this.simpleintegral.integraloperacion.resexpo1 + 1)+"x")).subscribe(res=>{
        let resx = res.data.split("/")
        console.log(resx);
        if(resx.length == 2){
          this.intoperacion.numerador2 = resx[0];
          this.intoperacion.divisor2 = resx[1];
          this.simpleintegral.integraloperacion.resnum1 = this.intoperacion.numerador2;
          this.simpleintegral.integraloperacion.resexpo2 = this.simpleintegral.integraloperacion.resexpo2;
          this.simpleintegral.integraloperacion.resnum2 = this.intoperacion.numerador2;
          this.simpleintegral.integraloperacion.resdivisor2 = this.intoperacion.divisor2;
        }
        this.simpleintegral.integralsimple.respdivisor1 = this.simpleintegral.integraloperacion.resdivisor2
        this.simpleintegral.integralsimple.respnum1 = this.simpleintegral.integraloperacion.resnum1
        this.simpleintegral.integralsimple.respexpo1 = this.simpleintegral.integraloperacion.resexpo2
        this.simpleintegral.tipo = 1;
        this.addNewItem()
      })
    }
  }



  reset(){
    this.estadoRes=false;
    this.addNewItem2();
  }



}
