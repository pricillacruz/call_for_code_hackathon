import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  usuario: Usuario = new Usuario
  constructor() { }



  ngOnInit(): void {
  }

}
