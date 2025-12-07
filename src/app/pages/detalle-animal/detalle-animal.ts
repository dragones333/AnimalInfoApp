import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService, Animal } from '../../services/api.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-detalle-animal',
  standalone: true,
  imports: [NgIf],
  templateUrl: './detalle-animal.html',
  styleUrl: './detalle-animal.css',
})
export class DetalleAnimal implements OnInit {
  animal?: Animal;
  cargando = true;

  constructor(private api: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.api.getAnimal(id).subscribe({
      next: data => {
        this.animal = data;
        this.cargando = false;
      }
    });
  }
}
