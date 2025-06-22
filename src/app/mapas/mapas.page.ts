import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.page.html',
  styleUrls: ['./mapas.page.scss'],
  standalone: false,
})
export class MapasPage implements OnInit {  
  latitud: number = 0;
  longitud: number = 0;

  constructor() {}

  ngOnInit() {
    this.getUbicacion();
  }



  async getUbicacion() {
    await Geolocation.requestPermissions();
    const position = await Geolocation.getCurrentPosition();
    this.latitud = position.coords.latitude;
    this.longitud = position.coords.longitude;
    console.log('Ubicación:', this.latitud, this.longitud);
  }
}

