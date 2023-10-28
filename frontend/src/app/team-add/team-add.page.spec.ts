import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeamAddPage } from './team-add.page';

describe('TeamAddPage', () => {
  let component: TeamAddPage;
  let fixture: ComponentFixture<TeamAddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TeamAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
