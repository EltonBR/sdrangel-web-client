export interface RtlSdrSettingsModel {
    agc:number; //boolean
    biasTee:number; //boolean
    centerFrequency: number;
    dcBlock:number; //boolean
    devSampleRate: number;
    fcPos: number; //fp?
    gain: number;
    iqImbalance:number; //boolean
    iqOrder: number;
    loPpmCorrection:number;
    log2Decim:number;
    lowSampleRate:number; // bool
    noModMode:number;
    offsetTuning:number;
    reverseAPIAddress: string;
    reverseAPIDeviceIndex:number;
    reverseAPIPort: number;
    rfBandwidth: number;
    transverterDeltaFrequency:number;
    transverterMode:number; //boolean
    useReverseAPI:number; //bolean
}