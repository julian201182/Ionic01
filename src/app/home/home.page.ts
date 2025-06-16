import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage {

  constructor(private router: Router) {
    this.verificarAcceso();
  }

  verificarAcceso() {
    const usuario = localStorage.getItem('usuario');
    if (!usuario) {
      
      this.router.navigate(['/login']);
    }
  }

  goToPage() {
    this.router.navigate(['/login']);
  }

  irAInicio() {
    this.router.navigate(['/inicio']);
  }

  irAPortada() {
    this.router.navigate(['/portada7']);
  }

}
