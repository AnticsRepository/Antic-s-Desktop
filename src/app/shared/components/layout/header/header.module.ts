import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbSelectModule, NbActionsModule } from '@nebular/theme';

import { ThemePickerComponent } from './components/theme-picker/theme-picker.component';
import { HeaderActionsComponent } from './components/header-actions/header-actions.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    ThemePickerComponent,
    HeaderActionsComponent
  ],
  imports: [
    CommonModule,
    NbSelectModule,
    NbActionsModule,
    SharedModule
  ],
  exports: [
    ThemePickerComponent,
    HeaderActionsComponent
  ]
})

export class HeaderModule { }
