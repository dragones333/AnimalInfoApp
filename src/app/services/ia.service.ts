import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IaService {
  private base = (window as any).__env?.API_URL || 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  generarDescripcion(animal: string): Observable<{ descripcion: string }> {
    return this.http.post<{ descripcion: string }>(
      `${this.base}/api/ia/descripcion`,
      { animal }
    );
  }
}
