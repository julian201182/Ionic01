import { Injectable } from '@angular/core';
import { SQLite,SQLiteObject } from '@awesome-cordova-plugins/sqlite';


@Injectable({
  providedIn: 'root'
})
export class MisdatosService {
  public dbInstance!: SQLiteObject;

  constructor(private sqlite: SQLite) {

    this.initializeDatabase();
   }
}
