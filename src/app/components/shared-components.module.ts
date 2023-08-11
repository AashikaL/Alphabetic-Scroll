import { CommonModule } from '@angular/common';
import { AlphabetScrollComponent } from './alphabet-scroll/alphabet-scroll.component';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [AlphabetScrollComponent],
  imports: [
    CommonModule
  ],
  exports: [AlphabetScrollComponent]
})
export class SharedComponentsModule { 
  

}
