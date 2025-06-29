import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: false
})
export class InicioPage {

  usuario: any = null;

  constructor(private router: Router) {}

  ionViewWillEnter() {
    const datosGuardados = localStorage.getItem('usuarioGuardado');
    if (datosGuardados) {
      this.usuario = JSON.parse(datosGuardados);
    }
  }

  volverAlHome() {
    this.router.navigate(['/home']);
  }

  Mapas() {
    this.router.navigate(['/mapas']);
  }
  
  descripcionActiva: number | null = null;

  mostrarDescripcion(index: number) {
    this.descripcionActiva = this.descripcionActiva === index ? null : index;
  }
}
