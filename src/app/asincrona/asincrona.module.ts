import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegPersonasComponent } from './reg-personas/reg-personas.component';
import { FormsModule } from '@angular/forms';
import { RegHijoComponent } from './reg-hijo/reg-hijo.component';



@NgModule({
  declarations: [
    RegPersonasComponent,
    RegHijoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    RegPersonasComponent,
    RegHijoComponent
  ]
})
export class AsincronaModule { }
