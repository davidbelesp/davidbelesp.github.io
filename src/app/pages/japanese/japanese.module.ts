import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JapaneseRoutingModule } from './japanese-routing.module';
import { JapaneseHomeComponent } from './japanese-home/japanese-home.component';
import { HiraganaComponent } from './hiragana/hiragana.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [    
    JapaneseHomeComponent,
    HiraganaComponent,
  ],
  imports: [
    CommonModule,
    JapaneseRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class JapaneseModule { }
