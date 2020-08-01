import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { PontoAtendimentoComponent } from './ponto-atendimento/ponto-atendimento.component';
import { ChatbotPageComponent } from './chatbot-page/chatbot-page.component';
import { ChatbotFaqComponent } from './chatbot-faq/chatbot-faq.component';
import { ChatbotAgendaComponent } from './chatbot-agenda/chatbot-agenda.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'perfil-usuario', component: PerfilUsuarioComponent },
  { path: 'perfil-atendimento', component: PontoAtendimentoComponent },
  { path: 'chatbot-faq', component: ChatbotFaqComponent },
  { path: 'chatbot-cad', component: ChatbotPageComponent },
  { path: 'chatbot-agenda', component: ChatbotAgendaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
