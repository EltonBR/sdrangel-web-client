import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { SDRAngelModel } from '../models/sdrangel.model';
import { environment } from 'src/environments/environment'
@Injectable({
  providedIn: 'root'
})
export class SdrAngelApiService {

  constructor(private http: HttpClient) { }

  getCurrentState(): Observable<SDRAngelModel> {
    return this.http.get<SDRAngelModel>(`${environment.sdrAngelApiUrl}`).pipe(map((response) => {
        response.devicesetlist.deviceSets.forEach((item) => {
          item.channels?.forEach((channel) => {
            channel.samplingIndex = item.samplingDevice.index;
            channel.hwType = item.samplingDevice.hwType;
          })
        })

        return response;
    }))
  }
}
