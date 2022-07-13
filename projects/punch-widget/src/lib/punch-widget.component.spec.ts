import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PunchWidgetComponent } from './punch-widget.component';

describe('PunchWidgetComponent', () => {
  let component: PunchWidgetComponent;
  let fixture: ComponentFixture<PunchWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PunchWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PunchWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
