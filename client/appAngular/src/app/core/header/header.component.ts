import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAutenticated:boolean;
  currentUser:any;
  constructor(){

  }
  ngOnInit(): void {
    //Valores de prueba
    this.isAutenticated = true;
    let user = {
      nombre: "Administrador",
      correo:"admin123@gmail.com"
    }
    this.currentUser = user;
  }

  login(){
    console.log("Login");
  }
  logout(){
    console.log("Logout");
  }

  

}
