import { Component, Input, OnInit } from '@angular/core';
import { SamplingDeviceModel } from '../../models/deviceset.model';

@Component({
  selector: 'app-sampling-devices',
  templateUrl: './sampling-devices.component.html',
  styleUrls: ['./sampling-devices.component.scss'],
  standalone: true
})
export class SamplingDevicesComponent implements OnInit {

  @Input() samplingDevices!: SamplingDeviceModel[];

  constructor() {

  }

  ngOnInit(): void {
    
  }

}
