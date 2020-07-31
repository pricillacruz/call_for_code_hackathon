import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ponto-atendimento',
  templateUrl: './ponto-atendimento.component.html',
  styleUrls: ['./ponto-atendimento.component.css']
})
export class PontoAtendimentoComponent implements OnInit {

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
