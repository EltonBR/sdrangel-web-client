import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequencySelectorComponent } from './number-selector.component';

describe('FrequencySelectorComponent', () => {
  let component: FrequencySelectorComponent;
  let fixture: ComponentFixture<FrequencySelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrequencySelectorComponent]
    });
    fixture = TestBed.createComponent(FrequencySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
