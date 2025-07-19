import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () =>
      import('./inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: 'portada7',
    loadChildren: () =>
      import('./portada7/portada7.module').then(m => m.Portada7PageModule)
  },
  {
    path: 'error404',
    loadChildren: () =>
      import('./error404/error404.module').then(m => m.Error404PageModule)
  },
  {
    path: 'mapas',
    loadChildren: () =>
      import('./mapas/mapas.module').then(m => m.MapasPageModule)
  },
  {
    path: '',
    redirectTo: 'portada7',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'error404',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
