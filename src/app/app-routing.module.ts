import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CotizadorComponent } from './views/cotizador/cotizador.component';
import { BitcointComponent } from './views/bitcoint/bitcoint.component';


const routes: Routes = [
  {path:'', redirectTo:'/cotizador', pathMatch:'full'},
  {path:'cotizador',component:CotizadorComponent},
  {path:'bitcoint',component:BitcointComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
