import { Component, OnInit } from '@angular/core';
import { ApiService, Animal } from '../../services/api.service';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-animales',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './animales.html',
  styleUrl: './animales.css',
})
export class Animales implements OnInit {
  animales: Animal[] = [];
  cargando = true;
  error = '';

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() {
    this.api.getAnimales().subscribe({
      next: (data) => {
        this.animales = data;
        this.cargando = false;
      },
      error: () => {
        this.error = 'Error cargando animales';
        this.cargando = false;
      }
    });
  }

  verDetalle(id: number) {
    this.router.navigate(['/animal', id]);
  }
}
