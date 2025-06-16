import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; 
import { IonHeader, IonToolbar, IonContent, IonTitle, IonCard, IonCardHeader, IonLabel, IonInput, IonCardTitle, IonCardContent, IonItem, IonButton, IonDatetime } from "@ionic/angular/standalone";
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

  constructor(private router: Router,private alertController: AlertController,private AuthService: AuthService) { }

  ngOnInit() {}

  async mostrarAlerta(mensaje:string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }

  async login() {
    if (this.usuario === '' || this.correo === '' || this.cumpleanos === '' || this.direccion === '') {
      await this.mostrarAlerta('Por favor, completa todos los campos.');
      return;
    }}


  mostrarCampo() {
    this.mostrarFormulario = true;
  }

  guardarUsuario() {
    console.log('Datos del nuevo usuario:');
    console.log('Nombre:', this.usuario);
    console.log('Correo:', this.correo);
    console.log('Cumpleaños:', this.cumpleanos);
    console.log('Dirección:', this.direccion);
    alert('Usuario creado correctamente.');
  }

  borrardatos() {
    this.usuario = '';
    this.correo = '';
    this.cumpleanos = '';
    this.direccion = '';
    this.mostrarFormulario = false;
    alert('Datos borrados');
  }

  goTohome() {
    this.router.navigate(['/home']);
  }

 

  
}
