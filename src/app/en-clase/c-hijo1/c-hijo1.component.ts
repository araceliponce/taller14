import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-c-hijo1',
  templateUrl: './c-hijo1.component.html',
  styleUrls: ['./c-hijo1.component.css']
})
export class CHijo1Component {

//:::::::::::usando el decorador input recepionamos el texto en c-padre. puedes ponerles a ambos el mismo nombre.aqui lo igualas a '', ya en el html del c-padre lo igualas al texto del componente padre : <app-c-hijo1 [atributodec-hijo1]="atributodepadre"></app-c-hijo1>

  @Input() texto_padre:string="";




//:::::::::ahora de c-hijo a c-padre

texto_hijo1:string=''; //inicializamos aqui para aadirlo en el html con [(ngModel)]

@Output() emitidor_texto_hijo1: EventEmitter<string> = new EventEmitter;   //eventemitter es unobjeto, necesita = new eventemitter . tambien lleva<string>, puede ser<number|boolean|array...>

//metodo para btn click
EnviarTexto1(){
  this.emitidor_texto_hijo1.emit(this.texto_hijo1);
}

}




