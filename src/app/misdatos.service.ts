import { Injectable } from '@angular/core';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class MisdatosService {

  constructor(private sqlite: SQLite) {
    
  }

}
