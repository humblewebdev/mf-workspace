import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysPunchActivityWidgetComponent } from './todays-punch-activity-widget.component';

describe('TodaysPunchActivityWidgetComponent', () => {
  let component: TodaysPunchActivityWidgetComponent;
  let fixture: ComponentFixture<TodaysPunchActivityWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodaysPunchActivityWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaysPunchActivityWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
