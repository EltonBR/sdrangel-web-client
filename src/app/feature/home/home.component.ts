import { Component, OnInit } from '@angular/core';
import { devicesetListModel } from 'src/app/shared/models/deviceset-list.model';
import { SDRAngelModel } from 'src/app/shared/models/sdrangel.model';
import { SdrAngelApiService } from 'src/app/shared/services/sdr-angel-api.service';
import { AppStateService } from 'src/app/shared/state/app-state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
open = false;

  toggle() {
    this.open = !this.open;
  }

  constructor(private api: SdrAngelApiService, private appState: AppStateService) {

  }
  ngOnInit(): void {
    this.api.getCurrentState().subscribe((response: SDRAngelModel) => {

      let channels: any[] = [];
      this.appState.samplingDevices$.next(response.devicesetlist.deviceSets.map((item) => {
        if (item.channelcount > 0) {
          channels = [...channels, ...item.channels!];
        }
        return item.samplingDevice;
      }));

      response.devicesetlist = {} as devicesetListModel;
      this.appState.SDRAngelInfo$.next(response);
      this.appState.sampligDevicesChannels$.next(channels);
      this.appState.sampligDevicesChannels$.subscribe((r) => console.log(r))
    });
  }

 

}
