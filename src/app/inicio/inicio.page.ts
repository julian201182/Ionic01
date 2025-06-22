import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: false
})
export class InicioPage {

  constructor(private router: Router) {}

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
