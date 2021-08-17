import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';  
import { environment } from 'src/environments/environment.prod';
import { LoadSpinnerComponent } from './load-spinner/load-spinner.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; 
import { LoginComponent } from '../auth/login/login.component';


@NgModule({
  declarations: [
    LoadSpinnerComponent,
    LoginComponent,
  ],
  imports: [

    CommonModule, 
    FormsModule,
    FormsModule,
    ReactiveFormsModule, 
    ReactiveFormsModule,
    // NgQrScannerModule,
    // QRCodeModule,
  ],
  exports: [ 

    CommonModule, 
    LoginComponent,
    // NgQrScannerModule,
    // QRCodeModule,

    ReactiveFormsModule, 

    LoadSpinnerComponent,  

    FormsModule,
    FormsModule,
    ReactiveFormsModule, 

  ],
  entryComponents: [ 
  ],
})
export class SharedModule { }
