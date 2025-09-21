import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { HomeComponent } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
        
      {
        path: '',
        component: HomeComponent,
        title: 'Inicio'
      },
      {
        path: 'about',
        component: About,
        title: 'Acerca de'
      },
      {
        path: 'contact',
        component: Contact,
        title: 'Contacto'
      }
      
    ]
  },
  // RUTA WILDCARD (importante en producción)
  {
    path: '**',
    redirectTo: ''
  }
];