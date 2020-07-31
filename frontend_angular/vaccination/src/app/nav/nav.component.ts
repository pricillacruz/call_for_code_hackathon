import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  abrirModalLogin:boolean = false
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  anima(){
    let linha11 = ((<HTMLInputElement>document.querySelector("#Linha11")))
    let linha10 = ((<HTMLInputElement>document.querySelector("#Linha10")))
    let linha12 = ((<HTMLInputElement>document.querySelector("#Linha12")))

    linha11.style.transition = '3s!important';
    linha11.style.transform = "translateY(50px)";
    
    linha10.style.transition = '3s!important';
    linha10.style.transform = "translateX(10px) translateY(10px) rotate(47deg)"

    linha12.style.transition = '3s!important';
    linha12.style.transform = "translateY(32px)translateX(10px) rotate(-47deg)"


  }


  sair(){
    // this.router.navigate(['/home'])
    // localStorage.clear()
    abrirModalLogin = true
  }

}
