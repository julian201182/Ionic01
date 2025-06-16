import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';


@Injectable({
  providedIn: 'root'
})
export class MisdatosService {
  public dbInstance!: SQLiteObject;

  constructor(private sqlite: SQLite) {
    this.initializeDatabase();
  }

  async initializeDatabase() {
    try {
      this.dbInstance = await this.sqlite.create({
        name: 'mydatabase.db',
        location: 'default',
      });

      await this.dbInstance.executeSql(`
        CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          nombre TEXT,
          apellido TEXT,
          email TEXT,
          password TEXT,
          educacion TEXT,
          fecha_nacimiento TEXT
        )
      `, []);

      console.log('Tabla users creada correctamente');
    } catch (error) {
      console.error('Error al inicializar la base de datos:', error);
    }
  }
}
