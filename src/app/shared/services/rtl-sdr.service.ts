import { Injectable } from '@angular/core';
import { SamplingDeviceSettingsModel } from '../models/sampling-device-settings.model';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RtlSdrService {

  constructor(private http: HttpClient) { }

  getCurrentConfig(sampligDeviceIndex: number): Observable<SamplingDeviceSettingsModel> {
   return this.http.get<SamplingDeviceSettingsModel>(`${environment.sdrAngelApiUrl}/deviceset/${sampligDeviceIndex}/device/settings`).pipe(map((response) => {
     response.sampligDeviceIndex = sampligDeviceIndex;
    return response;
   }));
  }
}
