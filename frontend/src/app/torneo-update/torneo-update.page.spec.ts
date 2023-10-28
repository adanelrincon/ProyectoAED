import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TorneoUpdatePage } from './torneo-update.page';

describe('TorneoUpdatePage', () => {
  let component: TorneoUpdatePage;
  let fixture: ComponentFixture<TorneoUpdatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TorneoUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
