import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CPadreComponent } from './c-padre/c-padre.component';
import { CHijo1Component } from './c-hijo1/c-hijo1.component';
import { CHijo2Component } from './c-hijo2/c-hijo2.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CPadreComponent,
    CHijo1Component,
    CHijo2Component
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
      CPadreComponent,
      CHijo1Component,
      CHijo2Component
  ]

})
export class EnClaseModule { }
