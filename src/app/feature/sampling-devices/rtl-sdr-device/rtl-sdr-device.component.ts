import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-rtl-sdr-device',
  templateUrl: './rtl-sdr-device.component.html',
  styleUrls: ['./rtl-sdr-device.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class RtlSdrDeviceComponent {

  @Input() samplingDeviceIndex!: number;

  e = new EventEmitter();

 constructor() {
  this.e.emit();

  this.e.subscribe
 }

}
