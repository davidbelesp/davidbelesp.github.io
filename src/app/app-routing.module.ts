import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { GtnhComponent } from './pages/api/gtnh/gtnh.component';

const routes: Routes = [
  {path: "", component: IndexComponent, pathMatch: "full"},
  {path: "api", loadChildren: () => import("./pages/api/api.module").then(m => m.ApiModule)},
  {path: "**", redirectTo: "/", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
