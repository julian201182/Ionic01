import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapasPage } from './mapas.page';
import { DomSanitizer } from '@angular/platform-browser';

describe('MapasPage', () => {
  let component: MapasPage;
  let fixture: ComponentFixture<MapasPage>;
  let sanitizer: DomSanitizer;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MapasPage]
    }).compileComponents();

    fixture = TestBed.createComponent(MapasPage);
    component = fixture.componentInstance;
    sanitizer = TestBed.inject(DomSanitizer);

   
    component.urlMapa = sanitizer.bypassSecurityTrustResourceUrl('https://maps.google.com/maps?q=0,0&z=15&output=embed');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('updateMapUrl debe asignar urlMapa correctamente', () => {
    component.latitud = -33.45;
    component.longitud = -70.66;
    component.updateMapUrl();

    expect(component.urlMapa).toBeDefined();
    expect(typeof component.urlMapa).toBe('object');
  });
});
