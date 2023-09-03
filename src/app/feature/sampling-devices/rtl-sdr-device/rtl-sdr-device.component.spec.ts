import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtlSdrDeviceComponent } from './rtl-sdr-device.component';

describe('RtlSdrDeviceComponent', () => {
  let component: RtlSdrDeviceComponent;
  let fixture: ComponentFixture<RtlSdrDeviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RtlSdrDeviceComponent]
    });
    fixture = TestBed.createComponent(RtlSdrDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
