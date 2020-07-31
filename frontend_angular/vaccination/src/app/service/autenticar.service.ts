import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/usuario';
import { userLogin } from '../model/userLogin';
import { pontoAtendimento } from '../model/pontoAtendimento';

@Injectable({
  providedIn: 'root'
})
export class AutenticarService {

  constructor(private http: HttpClient) { }

  logar(login: userLogin){
    return this.http.post('http://localhost:8080/usuario/logar', login)
  }

  cadastrar(usuario: Usuario){
    return this.http.post('http://localhost:8080/usuario/cadastrar', usuario)
  }

  cadastrarPontoAtendimento(pontoAtendimento: pontoAtendimento){
    return this.http.post('http://localhost:8080/pontoAtendimento/cadastrarPonto', pontoAtendimento)
  }

  btnSair(){
    let logado = false;
    let token = localStorage.getItem('token')

    if(token != null){
      logado = true;
    }
    return logado;
  }


  btnLogarOUCadastrar(){
    let logado = false;
    let token = localStorage.getItem('token')

    if(token == null){
      logado = true;
    }
    return logado;
  }
}
