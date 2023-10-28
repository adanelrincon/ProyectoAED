import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JugadorAddPage } from './jugador-add.page';

describe('JugadorAddPage', () => {
  let component: JugadorAddPage;
  let fixture: ComponentFixture<JugadorAddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JugadorAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
