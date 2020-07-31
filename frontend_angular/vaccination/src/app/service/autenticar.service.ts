import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/usuario';
import { userLogin } from '../model/userLogin';

@Injectable({
  providedIn: 'root'
})
export class AutenticarService {

  constructor(private http: HttpClient) { }

  logar(login: userLogin){
    return this.http.post('http://dashdb-txn-sbox-yp-dal09-12.services.dal.bluemix.net:50000/usuario/logar', login)
  }

  cadastrar(usuario: Usuario){
    return this.http.post('http://localhost:8080/usuario/cadastrar', usuario)
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
