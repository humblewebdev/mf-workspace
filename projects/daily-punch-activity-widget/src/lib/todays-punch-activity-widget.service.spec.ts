import { TestBed } from '@angular/core/testing';

import { TodaysPunchActivityWidgetService } from './todays-punch-activity-widget.service';

describe('TodaysPunchActivityWidgetService', () => {
  let service: TodaysPunchActivityWidgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodaysPunchActivityWidgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
