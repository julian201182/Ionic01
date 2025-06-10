import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonContent, IonTitle, IonCard, IonCardHeader, IonLabel, IonInput, IonCardTitle, IonCardContent, IonItem, IonButton, IonDatetime } from "@ionic/angular/standalone";

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

  constructor(private router: Router) { }

  ngOnInit() {}

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

  login() {
  const usuarioGuardado = localStorage.getItem('usuario');

  if (usuarioGuardado) {
    this.goTohome(); 
  } else {
    alert('Debes registrarte antes de iniciar sesión.');
    this.mostrarFormulario = true; 
  }
}

  
}
