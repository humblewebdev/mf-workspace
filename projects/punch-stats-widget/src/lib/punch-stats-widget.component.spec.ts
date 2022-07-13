import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PunchStatsWidgetComponent } from './punch-stats-widget.component';

describe('PunchStatsWidgetComponent', () => {
  let component: PunchStatsWidgetComponent;
  let fixture: ComponentFixture<PunchStatsWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PunchStatsWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PunchStatsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
