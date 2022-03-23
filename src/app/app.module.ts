import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './rutas/app-routing.module';
import { AppComponent } from './app.component';
import { ClientesModule } from './clientes/clientes.module';
import { ClienteService } from './clientes/clientes.service';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './usuarios/auth.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientesModule,
    FooterModule,
    HeaderModule,
    UsuariosModule,
    HttpClientModule
  ],
  providers: [
    ClienteService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
