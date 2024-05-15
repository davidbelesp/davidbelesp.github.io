import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JapaneseRoutingModule } from './japanese-routing.module';
import { UnderDevelopmentComponent } from 'src/app/shared/under-development/under-development.component';
import { JapaneseHomeComponent } from './japanese-home/japanese-home.component';
import { HiraganaComponent } from './hiragana/hiragana.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [    
    UnderDevelopmentComponent,
    JapaneseHomeComponent,
    HiraganaComponent,
    
  ],
  imports: [
    CommonModule,
    JapaneseRoutingModule,
    FormsModule
  ]
})
export class JapaneseModule { }
