import { Component, OnInit } from '@angular/core';
import { AutenticarService } from '../service/autenticar.service';

@Component({
  selector: 'app-cadastro-popup',
  templateUrl: './cadastro-popup.component.html',
  styleUrls: ['./cadastro-popup.component.css']
})
export class CadastroPopupComponent implements OnInit {

  constructor(private auth: AutenticarService) { }

  ngOnInit(): void {
  }

  cadastrar(){
    
  }

}
