import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  usuario: any = null;
  imagen: string | null = null;

  constructor(private router: Router) {
    this.verificarAcceso();
  }

  ngOnInit() {
    const datosGuardados = localStorage.getItem('usuarioGuardado');
    if (datosGuardados) {
      this.usuario = JSON.parse(datosGuardados);
    }
  }

  ionViewWillEnter() {
    const datosGuardados = localStorage.getItem('usuarioGuardado');
    if (datosGuardados) {
      this.usuario = JSON.parse(datosGuardados);
    }
  }

  verificarAcceso() {
    const usuarioGuardado = localStorage.getItem('usuarioGuardado');
    if (!usuarioGuardado) {
      this.router.navigate(['/login']);
    }
  }

  async tomarFoto() {
    try {
      const foto = await Camera.getPhoto({
        quality: 80,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
      });

      this.imagen = foto.dataUrl!;
      console.log('Foto capturada');
    } catch (error) {
      console.error('Error al tomar la foto:', error);
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
