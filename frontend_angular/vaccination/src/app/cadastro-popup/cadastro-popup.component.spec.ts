import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPopupComponent } from './cadastro-popup.component';

describe('CadastroPopupComponent', () => {
  let component: CadastroPopupComponent;
  let fixture: ComponentFixture<CadastroPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
