import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { pontoAtendimento } from '../model/pontoAtendimento';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  usuario: Usuario = new Usuario
  pontoAtendimento: pontoAtendimento = new pontoAtendimento
  constructor() { }



  ngOnInit(): void {
  }

}
