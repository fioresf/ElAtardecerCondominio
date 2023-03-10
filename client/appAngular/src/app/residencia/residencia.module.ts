import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResidenciaRoutingModule } from './residencia-routing.module';
import { ResidenciaIndexComponent } from './residencia-index/residencia-index.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {LayoutModule} from '@angular/cdk/layout';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ResidenciaDetailComponent } from './residencia-detail/residencia-detail.component';
import { ResidenciaDiagComponent } from './residencia-diag/residencia-diag.component';


@NgModule({
  declarations: [
    ResidenciaIndexComponent,
    ResidenciaDetailComponent,
    ResidenciaDiagComponent
  ],
  imports: [
    CommonModule,
    ResidenciaRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    LayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatInputModule,MatSelectModule,MatRadioModule,
    ReactiveFormsModule,
    MatListModule,
    MatProgressBarModule
  ]
})
export class ResidenciaModule { }
