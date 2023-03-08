import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionDetailComponent } from './gestion-detail/gestion-detail.component';
import { GestionIndexComponent } from './gestion-index/gestion-index.component';

const routes: Routes = [
 {path: 'gestion', component: GestionIndexComponent },
 {path: 'gestion/:idResidencia', component: GestionDetailComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionRoutingModule { }
