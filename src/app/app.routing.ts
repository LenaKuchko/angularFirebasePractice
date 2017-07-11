import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'new-category',
    component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
