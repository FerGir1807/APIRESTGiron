import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { Sesion } from 'src/app/models/sesion';
import { SesionService } from './sesion.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  usuarios: Usuario[] = [
    { email: "admin@admin.com", password: "admin", tipo: "admin" },
    { email: "usuario@usuario.com", password: "usuario", tipo: "usuario" }
  ];
  constructor(private sesionService: SesionService, private router: Router) { }

  login(usuario: Usuario) {

    let usuarioCorrecto = this.usuarios.find(x => x.email === usuario.email);

    if (usuarioCorrecto && usuarioCorrecto.password === usuario.password) {
      let sesion: Sesion = {
        activa: true,
        usuario: usuarioCorrecto
      }
      this.sesionService.crearSesion(sesion);
      this.router.navigate(["inicio"]);
    }
    else {
      alert("Claves incorrectas")
    }

  }
}
