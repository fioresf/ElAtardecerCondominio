import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanIndexComponent } from './plan-index/plan-index.component';

const routes: Routes = [
  {path: 'plan', component: PlanIndexComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanRoutingModule { }
