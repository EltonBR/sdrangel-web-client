
export interface SamplingDeviceModel {
    bandwidth: number; //khz
    centerFrequency: number; //khz
    deviceNbStreams: number;
    deviceStreamIndex: number;
    direction: number; //0 rx 1 tx
    hwType: string;
    index: number;
    sequence: number;
    serial: string;
    state: string; // iddle/running
}

export interface ChannelModel {
    hwType: string; //not exists in api return
    samplingIndex: number; //not exists in api return
    deltaFrequency: number; // khz
    direction: 0; //0 rx 1 tx
    id: string;
    index: number;
    title: string;
    uid: number;
}

export interface DevicesetModel {
    channelcount: number;
    channels?: ChannelModel[];
    samplingDevice: SamplingDeviceModel;
}