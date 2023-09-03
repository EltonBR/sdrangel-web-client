import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { AppEventsService } from 'src/app/shared/events/app-events.service';
import { RtlSdrSettingsModel } from 'src/app/shared/models/rtl-sdr-settings.model';
import { RtlSdrService } from 'src/app/shared/services/rtl-sdr.service';

@Component({
  selector: 'app-rtl-sdr-device',
  templateUrl: './rtl-sdr-device.component.html',
  styleUrls: ['./rtl-sdr-device.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class RtlSdrDeviceComponent implements OnInit {
  
  @Input() samplingDeviceIndex!: number;
  constructor(private events: AppEventsService, private rtlSdrService: RtlSdrService) {
  }

  ngOnInit(): void {
    this.getCurrentConfig(); 
  }

  getCurrentConfig(): void {

  this.rtlSdrService.getCurrentConfig(this.samplingDeviceIndex).subscribe((response) => {
    console.log(response)
  });

  }

  patchConfig(cfg: Partial<RtlSdrSettingsModel>): void {}

}
