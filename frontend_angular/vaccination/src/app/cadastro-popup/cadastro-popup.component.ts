import { Component, OnInit } from '@angular/core';
import { AutenticarService } from '../service/autenticar.service';
import { Usuario } from '../model/usuario';
import { userLogin } from '../model/userLogin';

@Component({
  selector: 'app-cadastro-popup',
  templateUrl: './cadastro-popup.component.html',
  styleUrls: ['./cadastro-popup.component.css']
})
export class CadastroPopupComponent implements OnInit {

  usuario: Usuario = new Usuario
  userLogin: userLogin = new userLogin
  senha: string
  token:boolean = false
  constructor(private auth: AutenticarService) { }

  ngOnInit(): void {
  }

  conferirSenha(event: any){
    this.senha = event.target.value
  }
  fecharPopup(){
    let fechar = ((<HTMLInputElement>document.querySelector(".modal-backdrop.show")))
    fechar.style.display = 'none'
  }

  cadastrar(){
    if(this.senha == this.usuario.senha){
      let AbrirPopupLogin = ((<HTMLInputElement>document.querySelector(".btnCadastrar")))
      
      this.fecharPopup();
      AbrirPopupLogin.setAttribute('data-target', '#loginModal')
      this.auth.cadastrar(this.usuario).subscribe((resp: Usuario)=>{
        this.usuario = resp
        alert("usuario cadastrado")
        localStorage.setItem('email', this.userLogin.email)
        localStorage.setItem('senha', this.userLogin.senha)
        this.token = false
      })
    }else{
      alert("Senhas incompatíveis")
    }
  }

}
