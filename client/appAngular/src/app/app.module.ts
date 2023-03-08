import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { ShareModule } from './share/share.module';
import { HomeModule } from './home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './user/user.module';
import { ResidenciaModule } from './residencia/residencia.module';
import { ToastrModule } from 'ngx-toastr';
import { PlanModule } from './plan/plan.module';
import { GestionModule } from './gestion/gestion.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule, // Debe agregar el import respectivo // importar
    //Importar modulos creados propios en orden
    CoreModule,
    ShareModule,
    HomeModule,
    UserModule,
    ResidenciaModule,
    PlanModule,
    GestionModule,
    //Gestor de las rutas principales
    AppRoutingModule,
    
   
   
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
