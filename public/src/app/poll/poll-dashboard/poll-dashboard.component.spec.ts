import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollDashboardComponent } from './poll-dashboard.component';

describe('PollDashboardComponent', () => {
  let component: PollDashboardComponent;
  let fixture: ComponentFixture<PollDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
