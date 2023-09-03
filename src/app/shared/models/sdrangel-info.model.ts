interface FeatureSetModel {
    featurecount: number;
}

interface LoggingModel {
    consoleLevel:string;
    dumpToFile:number;
}

export interface SDRAngelInfoModel {
    appname: string;
    architecture: string;
    dspRxBits: number;
    dspTxBits: number;
    featureset: FeatureSetModel;
    logging: LoggingModel;
    os: string;
    pid: number;
    qtVersion: string;
    version: string;
}
