import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EquipoAddPage } from './equipo-add.page';

describe('EquipoAddPage', () => {
  let component: EquipoAddPage;
  let fixture: ComponentFixture<EquipoAddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EquipoAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
