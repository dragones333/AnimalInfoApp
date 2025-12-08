import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Animal {
  id: number;
  nombre: string;
  especie: string;
  habitat: string;
  descripcion: string;
  imagenUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private base = (window as any).__env?.API_URL || 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getAnimales(): Observable<Animal[]> {
    return this.http.get<Animal[]>(`${this.base}/api/animales`);
  }

  getAnimal(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.base}/api/animales/${id}`);
  }
}
