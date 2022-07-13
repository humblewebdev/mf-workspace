import { TestBed } from '@angular/core/testing';

import { PunchWidgetService } from './punch-widget.service';

describe('PunchWidgetService', () => {
  let service: PunchWidgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PunchWidgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
