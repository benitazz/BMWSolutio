import { InlineMessageComponent } from './inline-message/inline-message.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    InlineMessageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InlineMessageComponent
  ]
})
export class ControlsModule { }
