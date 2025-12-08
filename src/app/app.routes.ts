import { Routes } from '@angular/router';
import { DashboardLayoutComponent } from './pages/dashboard-layout/dashboard-layout';
import { Animales } from './pages/animales/animales';
import { DetalleAnimal } from './pages/detalle-animal/detalle-animal';
import { IaDescripcionComponent } from './pages/ia-descripcion/ia-descripcion';

export const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      { path: 'animales', component: Animales },
      { path: 'animal/:id', component: DetalleAnimal },
      { path: 'ia', component: IaDescripcionComponent },
      { path: '', redirectTo: 'animales', pathMatch: 'full' }
    ]
  }
];
