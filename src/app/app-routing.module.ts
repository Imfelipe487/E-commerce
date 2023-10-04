import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcommerceComponent } from './modules/ecommerce/ecommerce.component';
import { ErrorPageComponent } from './modules/components/error-page/error-page.component';

const routes: Routes = [
  { path: '', component: EcommerceComponent },
  { path: '**', component: ErrorPageComponent, pathMatch: 'full' }, // cuando se digite una ruta incorrecta se redireccionara a la ruta raiz
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
