import { TestBed } from '@angular/core/testing';

import { PunchStatsWidgetService } from './punch-stats-widget.service';

describe('PunchStatsWidgetService', () => {
  let service: PunchStatsWidgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PunchStatsWidgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
