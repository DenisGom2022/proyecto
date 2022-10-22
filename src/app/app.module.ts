import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DerivadasComponent } from './derivadas/derivadas.component';
import { IntegralesComponent } from './integrales/integrales.component';
import { IntegralesBasicasComponent } from './integrales-basicas/integrales-basicas.component';
import { AreaCurvaComponent } from './area-curva/area-curva.component'; 
import { AppRoutingModule } from './app-routing.module';
import { IntegralTrigonometricaComponent } from './integral-trigonometrica/integral-trigonometrica.component';
import { MenuComponent } from './menu/menu.component';
import { ApiExpresionService } from './Services/api-expresion.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { InfoComponent } from './info/info.component';
import { ModalComponent } from './modal/modal.component';
import { FraccionComponent } from './fraccion/fraccion.component';



@NgModule({
  declarations: [
    AppComponent,
    DerivadasComponent,
    IntegralesComponent,
    IntegralesBasicasComponent,
    AreaCurvaComponent,
    IntegralTrigonometricaComponent,
    MenuComponent,
    InfoComponent,
    ModalComponent,
    FraccionComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ApiExpresionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
