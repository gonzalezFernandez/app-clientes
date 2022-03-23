import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { AuthService } from '../usuarios/auth.service';
import { Cliente } from './cliente';
import { ClienteService } from './clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styles: [
  ]
})
export class ClientesComponent implements OnInit {

  imageSrc!:string;
  clientes!: Cliente[];

  constructor(private servicio: ClienteService,public authService:AuthService) { }

  ngOnInit(): void {
    this.imageSrc = '/assets/images/logoAG.png';

    this.servicio.getClientes().subscribe(
       resp => this.clientes = resp
    );
  }

 delete( cliente:Cliente):void{
   swal({
     title:'Está Seguro?',
     text: `Seguro que desea eliminar el cliente ${cliente.nombre} ${cliente.apellido}`,
     type: 'warning',
     showCancelButton: true,
     cancelButtonColor: '#3085d6',
     confirmButtonColor: '#d33',
     confirmButtonText: 'Si, Eliminar!',
     cancelButtonText: 'No, Cancelar',
     confirmButtonClass: 'btn btn-success',
     cancelButtonClass: 'btn btn-danger',
     buttonsStyling: false,
     reverseButtons: true
   }).then((result)=>{
     if(result.value){
       this.servicio.delete(cliente.id).subscribe(
         resp =>{
           this.clientes = this.clientes.filter(cli => cli !== cliente)
           swal('cliente eliminado', `Cliente ${cliente.nombre} eliminado con éxito`, 'success');
         }
       )
     }
   });
  }

}
