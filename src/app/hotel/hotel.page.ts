import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.page.html',
  styleUrls: ['./hotel.page.scss'],
  standalone: false,
})
export class HotelPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

 irAInicio() {
    this.router.navigate(['/inicio']);
  }

}
