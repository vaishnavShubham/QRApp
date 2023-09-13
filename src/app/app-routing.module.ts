import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeblineindiaComponent } from './weblineindia/weblineindia.component';
import { NgxqrComponent } from './ngxqr/ngxqr.component';

const routes: Routes = [
  { path: '', component:NgxqrComponent  },
  { path: 'webQr', component: WeblineindiaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
