import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotAgendaComponent } from './chatbot-agenda.component';

describe('ChatbotAgendaComponent', () => {
  let component: ChatbotAgendaComponent;
  let fixture: ComponentFixture<ChatbotAgendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatbotAgendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatbotAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
