import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PontoAtendimentoComponent } from './ponto-atendimento.component';

describe('PontoAtendimentoComponent', () => {
  let component: PontoAtendimentoComponent;
  let fixture: ComponentFixture<PontoAtendimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PontoAtendimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PontoAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
