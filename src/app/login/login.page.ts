import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  usuario: string = '';
  contrasena: string = '';
  correo: string = '';
  cumpleanos: string = '';
  direccion: string = '';

  mostrarFormulario: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    const usuarioGuardado = localStorage.getItem('usuarioGuardado');
    if (usuarioGuardado) {
      const datos = JSON.parse(usuarioGuardado);
      this.usuario = datos.usuario;
      this.contrasena = datos.contrasena;
      this.correo = datos.correo;
      this.cumpleanos = datos.cumpleanos;
      this.direccion = datos.direccion;
    }
  }

  mostrarCampo() {
    this.mostrarFormulario = true;
  }

  guardarUsuario() {
    const nuevoUsuario = {
      usuario: this.usuario,
      contrasena: this.contrasena,
      correo: this.correo,
      cumpleanos: this.cumpleanos,
      direccion: this.direccion
    };

    localStorage.setItem('usuarioGuardado', JSON.stringify(nuevoUsuario));

    alert('✅ Usuario guardado correctamente');
    this.mostrarFormulario = false;
    this.limpiarCampos();
  }

  borrardatos() {
    localStorage.removeItem('usuarioGuardado');
    alert('🗑️ Usuario eliminado');
  }

  goTohome() {
    const user = localStorage.getItem('usuarioGuardado');
    if (user) {
      this.router.navigate(['/home']);
    } else {
      alert('Primero debes guardar un usuario');
    }
  }

  limpiarCampos() {
    this.usuario = '';
    this.contrasena = '';
    this.correo = '';
    this.cumpleanos = '';
    this.direccion = '';
  }
}
