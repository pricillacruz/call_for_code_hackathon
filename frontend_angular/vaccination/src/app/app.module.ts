import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { AdminComponent } from './admin/admin.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { PontoAtendimentoComponent } from './ponto-atendimento/ponto-atendimento.component';
import { CadastroPopupComponent } from './cadastro-popup/cadastro-popup.component';
import { LoginPopupComponent } from './login-popup/login-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavComponent,
    AdminComponent,
    PerfilUsuarioComponent,
    PontoAtendimentoComponent,
    CadastroPopupComponent,
    LoginPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
