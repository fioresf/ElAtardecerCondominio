import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { GenericService } from 'src/app/share/generic.service';

@Component({
  selector: 'app-gestion-detail',
  templateUrl: './gestion-detail.component.html',
  styleUrls: ['./gestion-detail.component.css']
})

export class GestionDetailComponent implements OnInit {

  datos:any;
  destroy$:Subject<boolean>=new Subject<boolean>();
  titulo:any;
 
  constructor(private gService:GenericService, 
    private route:ActivatedRoute) {

    let id=route.snapshot.paramMap.get('idResidencia');
      if(!isNaN(Number(id))){
        console.log(id);
        this.obtenerGestion(Number(id))
      }

   }
  ngOnInit(): void {
   
  }

  validaTitulo(estado:any){
    if (estado == "Pago") {
      return this.titulo = "Historial Pagos";
    } else {
      return this.titulo = "Deudas Vigentes";
    }
  }

  obtenerGestion(id:any){
    this.gService
    .get('gestion',id)
    .pipe(takeUntil(this.destroy$))
    .subscribe((data:any)=>{
    console.log("datos" + data);
    this.datos=data; 
    console.log(this.datos);
    });
    }

    ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
    }
}
