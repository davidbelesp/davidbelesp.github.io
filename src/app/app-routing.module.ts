import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';

const routes: Routes = [
  {path: "", component: IndexComponent, pathMatch: "full"},
  {path: "japanese", loadChildren: () => import("./pages/japanese/japanese.module").then(m => m.JapaneseModule)},
  {path: "**", redirectTo: "/", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
