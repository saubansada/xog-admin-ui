import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment.prod';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DataGridComponent } from './data-grid/data-grid.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { NgSelectConfig, NgSelectModule } from '@ng-select/ng-select';
import { NgxFileDropModule } from 'ngx-file-drop';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { SanitizerUrlPipe } from './pipes/sanitize-url';
import { SelectFilterPipe } from './pipes/select-filter';

const customNotifierOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'middle',
      distance: 12
    },
    vertical: {
      position: 'bottom',
      distance: 30,
      gap: 30
    }
  },
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};

@NgModule({
  declarations: [
    DataGridComponent,
    DataGridComponent,
    FileUploadComponent,
    SanitizerUrlPipe,
    SelectFilterPipe
  ],
  imports: [

    CommonModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    NgSelectModule,
    NgxFileDropModule,
    NotifierModule.withConfig(customNotifierOptions)
    // NgQrScannerModule,
    // QRCodeModule,
  ],
  exports: [
    CommonModule,
    // NgQrScannerModule,
    // QRCodeModule,
    ReactiveFormsModule,
    FormsModule,
    FormsModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    DataGridComponent,
    NotifierModule,
    NgSelectModule,
    NgxFileDropModule,
    FileUploadComponent,
    SanitizerUrlPipe,
    SelectFilterPipe
  ],
  entryComponents: [
  ],
})
export class SharedModule { 
  constructor(private config: NgSelectConfig){
    this.config.bindLabel = 'Text';
    this.config.bindValue = 'Value';
  }
}


