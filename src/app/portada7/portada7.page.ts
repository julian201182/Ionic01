import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-portada7',
  templateUrl: './portada7.page.html',
  styleUrls: ['./portada7.page.scss'],
  standalone: false
})
export class Portada7Page implements OnInit {
  imagenes = [
    "assets/img/fered.webp",
    
  ];

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoplay: {
      delay: 3000,
    },
    loop: true
  };

  constructor(private router: Router) { }

  irAPortada() {
    this.router.navigate(['/portada7']);
  }
  goToPage() {
    this.router.navigate(['/login']);
  }

  irAInicio() {
    this.router.navigate(['/inicio']);  
  }
 
  goTohome(){
    this.router.navigate(['/home']);
  }

  ngOnInit() { }

}
