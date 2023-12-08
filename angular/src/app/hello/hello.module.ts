import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './hello.component';
import { HelloRoutes } from './hello.routing';

@NgModule({
  imports: [
    CommonModule,
    HelloRoutes
  ],
  declarations: [HelloComponent]
})
export class HelloModule { }
