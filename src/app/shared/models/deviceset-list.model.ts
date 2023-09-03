import { DevicesetModel } from "./deviceset.model"

export interface devicesetListModel {
    deviceSets: DevicesetModel[];
    devicesetcount: number;
    devicesetfocus: number;
}