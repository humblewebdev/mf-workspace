import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PunchSearchWidgetComponent } from './punch-search-widget.component';

describe('PunchSearchWidgetComponent', () => {
  let component: PunchSearchWidgetComponent;
  let fixture: ComponentFixture<PunchSearchWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PunchSearchWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PunchSearchWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
