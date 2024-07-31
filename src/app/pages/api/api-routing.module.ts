import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GtnhComponent } from './gtnh/gtnh.component';

const routes: Routes = [
  {path: "", redirectTo:"/api/gtnh", pathMatch: "full"},
  {path: "gtnh/:section/function/:name", component: GtnhComponent, pathMatch: "full"},
  {path: "gtnh/:section/field/:name", component: GtnhComponent, pathMatch: "full"},
  {path: "gtnh", component: GtnhComponent, pathMatch: "full"},
  {path: "**", redirectTo: "/", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApiRoutingModule { }
