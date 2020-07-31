import { Component, OnInit } from '@angular/core';
import { userLogin } from '../model/userLogin';
import { AutenticarService } from '../service/autenticar.service';

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.css']
})
export class LoginPopupComponent implements OnInit {

  userLogin: userLogin = new userLogin
  constructor(private auth: AutenticarService) { }

  ngOnInit(){
  }

  entrar(){
    this.auth.logar(this.userLogin).subscribe((resp: userLogin)=>{
      this.userLogin = resp
      alert("Logada")
    }, err => {
      alert('Houve um erro ao entrar, verifique o email e a senha.')
   })
  }

}
