import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello.component';

const routes: Routes = [
  {
    path: '',
    component: HelloComponent
  },
];

export const HelloRoutes = RouterModule.forChild(routes);
