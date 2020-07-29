import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { PontoAtendimentoComponent } from './ponto-atendimento/ponto-atendimento.component';
import { ChatbotPageComponent } from './chatbot-page/chatbot-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'perfil-usuario', component: PerfilUsuarioComponent },
  { path: 'perfil-atendimento', component: PontoAtendimentoComponent },
  { path: 'chatbot', component: ChatbotPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
