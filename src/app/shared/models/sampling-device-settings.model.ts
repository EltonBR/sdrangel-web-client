import { RtlSdrSettingsModel } from "./rtl-sdr-settings.model";

export interface SamplingDeviceSettingsModel {
    sampligDeviceIndex: number; // not exists in api
    deviceHwType: string;
    direction: number;
    rtlSdrSettings?: RtlSdrSettingsModel;
}