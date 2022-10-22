import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Global } from './Global';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiExpresionService {
  public url;
  constructor(
    private _http:HttpClient
  ) {
    this.url = Global.url;
  }

  getDerivada(expresion:any):Observable<any>{
    //const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const envio = {
      dato:expresion
    }
    return this._http.post(this.url + "derivada", envio);
  }

  getFraccion(expresion:any):Observable<any>{
    const envio = {
      dato:expresion
    }
    return this._http.post(this.url + "simpli", envio);
  }
}
