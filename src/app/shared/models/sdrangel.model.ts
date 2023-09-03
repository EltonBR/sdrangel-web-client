import { devicesetListModel } from "./deviceset-list.model";

interface FeatureSetModel {
    featurecount: number;
}

interface LoggingModel {
    consoleLevel:string;
    dumpToFile:number;
}

export interface SDRAngelModel {
    appname: string;
    architecture: string;
    devicesetlist: devicesetListModel; 
    dspRxBits: number;
    dspTxBits: number;
    featureset: FeatureSetModel;
    logging: LoggingModel;
    os: string;
    pid: number;
    qtVersion: string;
    version: string;
}
