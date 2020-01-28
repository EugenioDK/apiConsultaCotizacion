import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CotizadorService {
headers= new HttpHeaders();
  constructor(public httpClient:HttpClient) {

    //this.headers.append("Content-Type", "aplication/json");
    //this.headers.append("Authorization", 'BEARE eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTE2Nzk4NzQsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJldWdlbmlva25vbGxAZ21haWwuY29tIn0.23Lcls0ABtbdF-_bDGVcBILZ6aUPVyfS1vlME2M5BznejUAfYD0-ovTG0Nh-4hyABuRT9Hy5s1-o6n_L5iMSwQ');
   }
   //url='http://api.valuta.money/v1/quotes/USD/ARS/json?quantity=2&key='
   //key='2909|ucaGC5tMzkx2Kt9v59WeB8*7V8PTNXQ2'


   cargarCotizacion(): Observable<any>{
    
    return this.httpClient.get<any>('https://s3.amazonaws.com/dolartoday/data.json')

    //Apis probadas que me dieron error. 
    //return this.httpClient.get<any>('https://api.cambio.today/v1/quotes/EUR/USD/xml?quantity=1&key=2909|ucaGC5tMzkx2Kt9v59WeB8*7V8PTNXQ2')
//    return this.httpClient.get<any>('https://api.estadisticasbcra.com/var_usd_interanual',  {headers:this.headers})
 //   return this.httpClient.get<any>('https://api.estadisticasbcra.com/base?autorization=BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTE2Nzk4NzQsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJldWdlbmlva25vbGxAZ21haWwuY29tIn0.23Lcls0ABtbdF-_bDGVcBILZ6aUPVyfS1vlME2M5BznejUAfYD0-ovTG0Nh-4hyABuRT9Hy5s1-o6n_L5iMSwQ')

  }
}
