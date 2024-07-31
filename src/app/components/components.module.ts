import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ApiNavbarComponent } from './api-navbar/api-navbar.component';
import { IconComponent } from './icon/icon.component';


@NgModule({
  declarations: [
    NavBarComponent,
    ApiNavbarComponent,
    IconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavBarComponent,
    ApiNavbarComponent,
    IconComponent
  ]
})
export class ComponentsModule { }
