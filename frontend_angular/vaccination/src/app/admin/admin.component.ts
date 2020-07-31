import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { pontoAtendimento } from '../model/pontoAtendimento';
import { Router } from '@angular/router';
import { AutenticarService } from '../service/autenticar.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  usuario: Usuario = new Usuario
  login:boolean = false
  pontoAtendimento: pontoAtendimento = new pontoAtendimento
  senha:string

  constructor(private router: Router, private auth: AutenticarService) { }



  ngOnInit(){
    let token = localStorage.getItem('token')

    if(token == null){
        alert('Faça o login antes  de acessar esta página !')
        this.login = true
        this.router.navigate(['/home'])
      }
  }

  conferirSenha(event: any){
    this.senha = event.target.value
  }

  cadastrarPonto(){
    if(this.senha == this.pontoAtendimento.senha){
      this.auth.cadastrarPontoAtendimento(this.pontoAtendimento).subscribe((resp: pontoAtendimento)=>{
        this.pontoAtendimento = resp
        alert("Ponto de atendimento cadastrado !")
      })
    }else{
      alert("Senah incompatíveis !")
    }
  }

}
