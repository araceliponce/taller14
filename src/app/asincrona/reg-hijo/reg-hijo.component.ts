import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reg-hijo',
  templateUrl: './reg-hijo.component.html',
  styleUrls: ['./reg-hijo.component.css']
})
export class RegHijoComponent {

  @Input() los_datos_recibidos: object = {}

}
