import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  login(email: string, password: string): boolean {
    // Aquí va la lógica real del login, por ahora es solo un ejemplo:
    return email === 'admin@demo.com' && password === '1234';
  }

  logout(): void {
    console.log('Usuario cerrado sesión');
  }
}
