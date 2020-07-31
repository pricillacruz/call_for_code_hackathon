import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbot-agenda',
  templateUrl: './chatbot-agenda.component.html',
  styleUrls: ['./chatbot-agenda.component.css']
})
export class ChatbotAgendaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const textInput = <HTMLInputElement>document.getElementById('textInput');
    const chat = document.getElementById('chat');
    
    let context = {};
    
    const templateChatMessage = (message, from) =>  `
    
    <div class="from-${from}">
      <div class="row align-items-center">
        <img src="../../assets/img/${from}.png" alt="" id="${from}Chat" class="col-3">
        <div class="message-inner inner${from} col-9 pl-0 my-3">
            <p>${message}</p>
        </div>
      </div>
    </div>
    `;
    
    const InsertTemplateInTheChat = (template) => {
      const div = document.createElement('div');
      div.innerHTML = template;
      
      chat.appendChild(div);
    };
    
    const getWatsonMessageAndInsertTemplate = async (text) => {
      const uri = 'http://localhost:3000/conversation/';
      const response = await (await fetch(uri, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
          text ,
          context,
        }),
      })).json();
      context = response.context;
      
      const template = templateChatMessage(response, 'watson');
      
      InsertTemplateInTheChat(template);
    };
    
    textInput.addEventListener('keydown', (event) => {
      if (event.keyCode === 13 && textInput.value) {
        getWatsonMessageAndInsertTemplate(textInput.value);
        const template = templateChatMessage(textInput.value, 'user');
        InsertTemplateInTheChat(template);
        
        textInput.value = '';
      }
    });
    
    getWatsonMessageAndInsertTemplate(textInput.value);
  }

}
