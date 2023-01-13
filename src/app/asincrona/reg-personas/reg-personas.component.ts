import { Component } from '@angular/core';

@Component({
  selector: 'app-reg-personas',
  templateUrl: './reg-personas.component.html',
  styleUrls: ['./reg-personas.component.css']
})
export class RegPersonasComponent {


  datos_de_registro: object= {}


  objeto_de_datos = {};
  nombre="";
  dni="";
  estadoc="";

  seccionseve= false;

  Recolectar(){
    // if(this.nombre!=''){

      if(this.nombre.trim()!=''){
      this.objeto_de_datos = {'Nombre': this.nombre, 'Dni': this.dni, 'Estado Civil': this.estadoc}; 
  
      //limpiamos inputs
      this.nombre='';
      this.dni='';
      this.estadoc='';
  
    } else{
      alert('no puedes dejar el nombre vacio')
    }

    console.log(this.objeto_de_datos)

    this.seccionseve=true  }


}
