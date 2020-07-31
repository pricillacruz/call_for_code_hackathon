import { Component, OnInit } from '@angular/core';
import { AutenticarService } from '../service/autenticar.service';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-cadastro-popup',
  templateUrl: './cadastro-popup.component.html',
  styleUrls: ['./cadastro-popup.component.css']
})
export class CadastroPopupComponent implements OnInit {

  usuario: Usuario = new Usuario
  senha: string
  constructor(private auth: AutenticarService) { }

  ngOnInit(): void {
  }

  conferirSenha(event: any){
    this.senha = event.target.value
  }

  cadastrar(){
    if(this.senha == this.usuario.senha){

      this.auth.cadastrar(this.usuario).subscribe((resp: Usuario)=>{
        this.usuario = resp
        alert("usuario cadastrado")
      })
    }else{
      alert("Senhas incompatíveis")
    }
  }

}
