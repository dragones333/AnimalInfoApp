import { Routes } from '@angular/router';
import { Animales } from './pages/animales/animales';
import { DetalleAnimal } from './pages/detalle-animal/detalle-animal';
import { IaDescripcionComponent } from './pages/ia-descripcion/ia-descripcion';

export const routes: Routes = [
  { path: '', component: Animales },
  { path: 'animal/:id', component: DetalleAnimal },
  { path: 'ia', component: IaDescripcionComponent },
];
