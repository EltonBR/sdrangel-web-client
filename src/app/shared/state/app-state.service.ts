import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SamplingDeviceModel, ChannelModel } from '../models/deviceset.model';
import { SDRAngelInfoModel } from '../models/sdrangel-info.model';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  constructor() {
    this.sampligDevicesChannels$.getValue()
  }
  samplingDevices$ = new BehaviorSubject<SamplingDeviceModel[]>([]);
  sampligDevicesChannels$ = new BehaviorSubject<ChannelModel[]>([]);
  SDRAngelInfo$ = new BehaviorSubject<SDRAngelInfoModel>({} as SDRAngelInfoModel);


}
