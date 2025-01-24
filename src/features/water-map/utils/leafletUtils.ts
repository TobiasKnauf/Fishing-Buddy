import { LatLng } from "leaflet";

//-------------------------------------------------------------------

declare module "leaflet" {
    interface LatLng {
        isValid(): boolean;
    }
}

LatLng.prototype.isValid = function (): boolean {
    return this != null && this.lat != null && this.lng != null;
}