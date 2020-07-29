import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  abrirModalCadastro: boolean = false
  abrirModalLogin: boolean = false


  constructor() { }

  ngOnInit(): void {
  }

  abrirModal(){
    this.abrirModalCadastro = true
  }
  abrirModalLog(){
    this.abrirModalLogin = true
  }
  
}
