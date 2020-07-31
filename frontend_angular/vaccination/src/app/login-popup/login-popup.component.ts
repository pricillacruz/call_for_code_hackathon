import { Component, OnInit } from '@angular/core';
import { userLogin } from '../model/userLogin';
import { AutenticarService } from '../service/autenticar.service';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.css']
})
export class LoginPopupComponent implements OnInit {

  usuario: Usuario = new Usuario
  userLogin: userLogin = new userLogin

  email = localStorage.getItem('email')
  senha = localStorage.getItem('senha')
  constructor(private auth: AutenticarService) { }

  ngOnInit(){
  
  }

  entrar(){
    if(this.usuario.email == this.userLogin.email && this.usuario.senha == this.userLogin.senha){
      this.auth.logar(this.userLogin).subscribe((resp: userLogin)=>{
        this.userLogin = resp
        alert("Logada")
        localStorage.setItem('token', this.userLogin.token)
      }, err => {
        alert('Houve um erro ao entrar, verifique o email e a senha.')
     })
    }
   
  }

}
