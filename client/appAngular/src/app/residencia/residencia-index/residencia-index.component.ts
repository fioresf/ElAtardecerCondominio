import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { GenericService } from 'src/app/share/generic.service';
import { NotificacionService } from 'src/app/share/notification.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ResidenciaDiagComponent } from '../residencia-diag/residencia-diag.component';

@Component({
  selector: 'app-residencia-index',
  templateUrl: './residencia-index.component.html',
  styleUrls: ['./residencia-index.component.css']
})

export class ResidenciaIndexComponent implements OnInit {
datos:any;
destroy$: Subject<boolean> = new Subject<boolean>();
constructor(private gService: GenericService,
  private notification: NotificacionService,
  private router: Router,
  private route: ActivatedRoute,
  private dialog: MatDialog
  ){
    this.listaResidencias();
}

  ngOnInit(): void {}

  //Metodo para listado Residencias
  listaResidencias(){
    //LLamar al API, nombre ruta
    this.gService.list('residencias/')
    .pipe(takeUntil(this.destroy$))
    .subscribe((data:any)=>{
      console.log(data);
      this.datos = data;
    });
  }

  //Metodo para detalle Residencias
  detalleResidencia(id:number){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.data = {
      idResidencia:id
    }
    this.dialog.open(ResidenciaDiagComponent,dialogConfig);
  }

  ngOnDestroy(){
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
