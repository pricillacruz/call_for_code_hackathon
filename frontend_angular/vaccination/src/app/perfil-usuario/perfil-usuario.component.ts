import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario
  login:boolean = false
  constructor(private router: Router) { }

  ngOnInit(){
    let token = localStorage.getItem('token')

    if(token == null){
        alert('Faça o login antes  de acessar esta página !')
        this.login = true
        this.router.navigate(['/home'])
      }
  }

}
