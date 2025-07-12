import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.page.html',
  styleUrls: ['./mapas.page.scss'],
  standalone: false,
})
export class MapasPage implements OnInit {
  latitud: number = 0;
  longitud: number = 0;
  urlMapa!: SafeResourceUrl;


  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.getUbicacion();
  }

  async getUbicacion() {
    await Geolocation.requestPermissions();
    const position = await Geolocation.getCurrentPosition();
    this.latitud = position.coords.latitude;
    this.longitud = position.coords.longitude;
    console.log('Ubicación:', this.latitud, this.longitud);
    this.updateMapUrl();
  }

  updateMapUrl() {
    const url = `https://maps.google.com/maps?q=${this.latitud},${this.longitud}&z=15&output=embed`;
    this.urlMapa = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
