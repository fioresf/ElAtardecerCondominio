import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { GenericService } from 'src/app/share/generic.service';

@Component({
  selector: 'app-gestion-index',
  templateUrl: './gestion-index.component.html',
  styleUrls: ['./gestion-index.component.css']
})
export class GestionIndexComponent implements AfterViewInit {

  datos:any;
  destroy$:Subject<boolean>=new Subject<boolean>();
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;

  dataSource = new MatTableDataSource<any>();

  //Columnas que se muestran
  displayedColumns=['residencia','cliente','fecha','acciones'];

  constructor(private router:Router,
    private route:ActivatedRoute, private gService:GenericService
    ) { }

  ngAfterViewInit(): void {
    this.listaGestion();
  }

  listaGestion(){
    //Llamar al API, nombre de ruta
    this.gService.list('gestion/')
    .pipe(takeUntil(this.destroy$))
    .subscribe((data:any)=>{
        console.log(data);
        this.datos=data;
        this.dataSource=new MatTableDataSource(this.datos);
        this.dataSource.sort=this.sort;
        this.dataSource.paginator=this.paginator;
    });
  }

  detalleGestion(idResidencia:number){
    this.router.navigate(['/gestion',idResidencia],{
      relativeTo:this.route
    });
  }
 
  ngOnDestroy(){
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
  
}
