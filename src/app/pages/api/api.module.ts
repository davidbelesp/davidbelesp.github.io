import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GtnhComponent } from './gtnh/gtnh.component';
import { ApiRoutingModule } from './api-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { PrimeModule } from 'src/app/prime/prime/prime.module';
import { ApiComponentsModule } from './components/components.module';
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [
    GtnhComponent
  ],
  imports: [
    CommonModule,
    ApiRoutingModule,
    ComponentsModule,
    PrimeModule,
    ApiComponentsModule,
    SharedModule
]
})
export class ApiModule { }
