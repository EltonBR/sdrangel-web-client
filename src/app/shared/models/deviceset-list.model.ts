import { DevicesetModel } from "./deviceset.model"

export interface devicesetListModel {
    devicesetlist: DevicesetModel[];
    devicesetcount: number;
    devicesetfocus: number;
}