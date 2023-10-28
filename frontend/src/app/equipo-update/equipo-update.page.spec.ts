import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EquipoUpdatePage } from './equipo-update.page';

describe('EquipoUpdatePage', () => {
  let component: EquipoUpdatePage;
  let fixture: ComponentFixture<EquipoUpdatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EquipoUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
