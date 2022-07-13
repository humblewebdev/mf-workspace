import { TestBed } from '@angular/core/testing';

import { PunchSearchWidgetService } from './punch-search-widget.service';

describe('PunchSearchWidgetService', () => {
  let service: PunchSearchWidgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PunchSearchWidgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
