import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotFaqComponent } from './chatbot-faq.component';

describe('ChatbotFaqComponent', () => {
  let component: ChatbotFaqComponent;
  let fixture: ComponentFixture<ChatbotFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatbotFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatbotFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
