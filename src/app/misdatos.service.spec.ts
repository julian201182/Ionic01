import { TestBed } from '@angular/core/testing';
import { MisdatosService } from './misdatos.service';
import { SQLite } from '@ionic-native/sqlite/ngx';


describe('MisdatosService', () => {
  let service: MisdatosService;

  const sqliteMock = {
    create: () => Promise.resolve({})
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MisdatosService,
        { provide: SQLite, useValue: sqliteMock }
      ]
    });

    service = TestBed.inject(MisdatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
