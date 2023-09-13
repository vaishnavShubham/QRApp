import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxScannerQrcodeModule, LOAD_WASM } from 'ngx-scanner-qrcode';
import { WeblineindiaComponent } from './weblineindia/weblineindia.component';
import { NgxqrComponent } from './ngxqr/ngxqr.component';

LOAD_WASM().subscribe((res: any) => console.log('LOAD_WASM', res));

@NgModule({
  declarations: [
    AppComponent,
    WeblineindiaComponent,
    NgxqrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxScannerQrcodeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
