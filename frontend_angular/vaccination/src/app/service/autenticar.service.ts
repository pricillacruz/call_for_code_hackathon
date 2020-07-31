import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class AutenticarService {

  constructor(private http: HttpClient) { }

  // logar(){
  //   return this.http.post('http://dashdb-txn-sbox-yp-dal09-11.services.dal.bluemix.net:50001/usuario/cadastrar')
  // }

  cadastrar(usuario: Usuario){
    return this.http.post('http://dashdb-txn-sbox-yp-dal09-11.services.dal.bluemix.net:50001/usuario/cadastrar', usuario)
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
