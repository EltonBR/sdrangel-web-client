import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SamplingDeviceModel } from '../../models/deviceset.model';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RtlSdrDeviceComponent } from 'src/app/feature/sampling-devices/rtl-sdr-device/rtl-sdr-device.component';
import { AppStateService } from '../../state/app-state.service';

@Component({
  selector: 'app-sampling-devices',
  templateUrl: './sampling-devices.component.html',
  styleUrls: ['./sampling-devices.component.scss'],
  standalone: true,
  imports: [CommonModule, RtlSdrDeviceComponent]
})
export class SamplingDevicesComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  samplingDevices!: SamplingDeviceModel[];

  constructor(private appState: AppStateService) {

  }

  ngOnInit(): void {
    let sub = this.appState.samplingDevices$.subscribe((devices) => {
      this.samplingDevices = devices;
    });
    this.subscription.add(sub);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
