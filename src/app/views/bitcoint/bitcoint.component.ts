import { Component, OnInit } from '@angular/core';
import { ngModuleJitUrl } from '@angular/compiler';
import { CotizadorService } from 'src/app/services/cotizador.service';

@Component({
  selector: 'app-bitcoint',
  templateUrl: './bitcoint.component.html',
  styleUrls: ['./bitcoint.component.scss']
})
export class BitcointComponent implements OnInit {

  todo:any;
  constructor (public cotizadorService: CotizadorService){
    this.cotizadorService.cargarCotizacion().subscribe((resp)=>{
      this.todo=resp;
      console.log(resp)
    })
  }
    ngOnInit() {
    }

}
