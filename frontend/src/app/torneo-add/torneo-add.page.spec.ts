import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TorneoAddPage } from './torneo-add.page';

describe('TorneoAddPage', () => {
  let component: TorneoAddPage;
  let fixture: ComponentFixture<TorneoAddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TorneoAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
