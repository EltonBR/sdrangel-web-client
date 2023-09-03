import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import { SamplingDevicesComponent } from 'src/app/shared/components/sampling-devices/sampling-devices.component';
import { FrequencySelectorComponent } from 'src/app/shared/components/frequency-selector/frequency-selector.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    SamplingDevicesComponent,
    FrequencySelectorComponent
  ]
})
export class HomeModule { }
