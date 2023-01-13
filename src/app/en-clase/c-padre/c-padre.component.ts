import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-c-padre',
  templateUrl: './c-padre.component.html',
  styleUrls: ['./c-padre.component.css']
})
export class CPadreComponent {

  texto_padre: string = "";


  //metodo para recibir datos del c-hijo1
  texto_recibido: string='';
  
  RecibirTexto1(texto:string){
  this.texto_recibido= texto;
  }
  // @Output() 

}
