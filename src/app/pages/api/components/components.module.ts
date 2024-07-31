import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarlistComponent } from './sidebarlist/sidebarlist.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PrimeModule } from 'src/app/prime/prime/prime.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { DetailSectionComponent } from './detailsection/detail-section.component';



@NgModule({
  declarations: [
    SidebarlistComponent,
    DetailSectionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PrimeModule,
    ComponentsModule
],
  exports: [
    SidebarlistComponent,
    DetailSectionComponent
  ]
})
export class ApiComponentsModule { }
