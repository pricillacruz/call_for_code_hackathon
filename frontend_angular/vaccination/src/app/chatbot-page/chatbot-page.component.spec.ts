import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotPageComponent } from './chatbot-page.component';

describe('ChatbotPageComponent', () => {
  let component: ChatbotPageComponent;
  let fixture: ComponentFixture<ChatbotPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatbotPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatbotPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
