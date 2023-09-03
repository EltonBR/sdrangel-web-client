import { EventEmitter, Injectable } from '@angular/core';
import { SamplingDeviceSettingsModel } from '../models/sampling-device-settings.model';

@Injectable({
  providedIn: 'root'
})
export class AppEventsService {

  constructor() { }

  onUpdateSamplingDevice = new EventEmitter<SamplingDeviceSettingsModel>();
}
