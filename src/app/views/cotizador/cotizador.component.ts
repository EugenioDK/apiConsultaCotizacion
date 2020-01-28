import { Component, OnInit } from '@angular/core';
import { CotizadorService } from 'src/app/services/cotizador.service';

@Component({
  selector: 'cotizador',
  templateUrl: './cotizador.component.html',
  styleUrls: ['./cotizador.component.scss']
})
export class CotizadorComponent implements OnInit {

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
