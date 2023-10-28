import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JugadorUpdatePage } from './jugador-update.page';

describe('JugadorUpdatePage', () => {
  let component: JugadorUpdatePage;
  let fixture: ComponentFixture<JugadorUpdatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JugadorUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
