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
import { ChatbotPageComponent } from './chatbot-page/chatbot-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChatbotFaqComponent } from './chatbot-faq/chatbot-faq.component';
import { ChatbotAgendaComponent } from './chatbot-agenda/chatbot-agenda.component'

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
    LoginPopupComponent,
    ChatbotPageComponent,
    ChatbotFaqComponent,
    ChatbotAgendaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
