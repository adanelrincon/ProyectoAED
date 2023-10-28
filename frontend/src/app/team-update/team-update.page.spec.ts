import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeamUpdatePage } from './team-update.page';

describe('TeamUpdatePage', () => {
  let component: TeamUpdatePage;
  let fixture: ComponentFixture<TeamUpdatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TeamUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
