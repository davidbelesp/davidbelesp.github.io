import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { ComponentsModule } from '../components/components.module';
import { ApiModule } from './api/api.module';

@NgModule({
  declarations: [
    IndexComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ApiModule
  ],
  exports: [
    IndexComponent,
  ]
})
export class PagesModule { }
