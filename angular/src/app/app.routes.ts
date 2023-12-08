import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'hello',
        loadChildren: () => import('./hello/hello.module').then(m => m.HelloModule),

    }
];
