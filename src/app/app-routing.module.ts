import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaCurvaComponent } from './area-curva/area-curva.component';
import { DerivadasComponent } from './derivadas/derivadas.component';
import { IntegralesBasicasComponent } from './integrales-basicas/integrales-basicas.component';
import { IntegralTrigonometricaComponent } from './integral-trigonometrica/integral-trigonometrica.component';

const routes: Routes = [
  { path:'derivadas', component: DerivadasComponent },
  {path:"integrales", component: IntegralesBasicasComponent},
  {path:"integral-trigonometrica", component: IntegralTrigonometricaComponent},
  {path:"areaBajoCurva", component: AreaCurvaComponent},
  {path: "trigonometrica", component:IntegralTrigonometricaComponent},
  {path: "", redirectTo:"derivadas", pathMatch:"full"} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
