import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplingDevicesComponent } from './sampling-devices.component';

describe('SamplingDevicesComponent', () => {
  let component: SamplingDevicesComponent;
  let fixture: ComponentFixture<SamplingDevicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SamplingDevicesComponent]
    });
    fixture = TestBed.createComponent(SamplingDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
