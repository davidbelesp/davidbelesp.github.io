import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JapaneseHomeComponent } from './japanese-home/japanese-home.component';
import { HiraganaComponent } from './hiragana/hiragana.component';

const routes: Routes = [
  {path: "", component: JapaneseHomeComponent, pathMatch: "full"},
  {path: "hiragana", component: HiraganaComponent, pathMatch: "full"},
  {path: "**", redirectTo: "/japanese", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JapaneseRoutingModule { }
