import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../rutas/app-routing.module';
import { DetalleComponent } from './detalle/detalle.component';
import { AuthService } from '../usuarios/auth.service';



@NgModule({
  declarations: [
    ClientesComponent,
    FormComponent,
    DetalleComponent
  ],
  providers:[
    AuthService
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,

  ],
  exports:[
    ClientesComponent,
    FormComponent,
    DetalleComponent
  ]
})
export class ClientesModule { }
