import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollDestroyComponent } from './poll-destroy.component';

describe('PollDestroyComponent', () => {
  let component: PollDestroyComponent;
  let fixture: ComponentFixture<PollDestroyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollDestroyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollDestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
