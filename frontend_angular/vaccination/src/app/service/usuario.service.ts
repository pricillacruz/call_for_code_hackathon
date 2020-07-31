import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }

  getAllUsuarios(){
    return this.http.get('', this.token)
  }

  postUsuario(usuario: Usuario){
    return this.http.post('', usuario, this.token)
  }

  putUsuario(usuario: Usuario){
    return this.http.put('', usuario, this.token)
  }

  getByIdUsuario(eid:number){
    return this.http.get('', this.token)
  }

  deleteUsuario(eid: number){
    return this.http.delete('', this.token)
  }
}
