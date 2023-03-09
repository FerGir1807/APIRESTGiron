import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Sesion } from './models/sesion';
import { SesionService } from './shared/services/sesion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '2PFGiron';

  constructor(private sesionService: SesionService, private router: Router) {

    this.sesionService.obtenerSesion().subscribe((sesion) => {
      if (sesion.activa) {
        this.opcionesUser = true;
        this.botonLogin = false;

        if (sesion.usuario?.tipo == "admin") {
          this.opcionesAdmin = true;
        }
        else if (sesion.usuario?.tipo == "admin") {
          this.opcionesUser = true;
        }
      }
    });
  }

  opcionesUser: boolean = false;
  opcionesAdmin: boolean = false;
  botonLogin: boolean = true;


  logout() {
    let sesion: Sesion = {
      activa: false
    }
    this.opcionesAdmin = false;
    this.opcionesUser = false;
    this.botonLogin = true;
    this.sesionService.cerrarSesion(sesion);
    this.router.navigate(["inicio"]);
  }
}
