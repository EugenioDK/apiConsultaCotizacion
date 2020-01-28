import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CotizadorComponent } from './views/cotizador/cotizador.component';
import { HttpClientModule } from '@angular/common/http';
import { BitcointComponent } from './views/bitcoint/bitcoint.component';
// import { BitcointComponent } from './bitcoint.component';

@NgModule({
  declarations: [
    AppComponent,
    CotizadorComponent,
    BitcointComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
