import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  usuario: string = '';
  correo: string = '';
  cumpleanos: string = '';
  direccion: string = '';
  mostrarFormulario: boolean = false;

  constructor(private router: Router, private alertController: AlertController) {}

  ngOnInit() {}

  mostrarCampo() {
    this.mostrarFormulario = true;
  }

  async mostrarAlerta(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Atención',
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }

  guardarUsuario() {
    if (!this.usuario || !this.correo || !this.cumpleanos || !this.direccion) {
      this.mostrarAlerta('Por favor, completa todos los campos');
      return;
    }

    
    localStorage.setItem('usuario', JSON.stringify({
      usuario: this.usuario,
      correo: this.correo,
      cumpleanos: this.cumpleanos,
      direccion: this.direccion
    }));

    
    this.mostrarAlerta('Usuario creado correctamente. Redirigiendo al Home...');

    
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 1000);
  }

  borrardatos() {
    this.usuario = '';
    this.correo = '';
    this.cumpleanos = '';
    this.direccion = '';
    this.mostrarFormulario = false;
  }

  goTohome() {
    this.router.navigate(['/home']);
  }
}
