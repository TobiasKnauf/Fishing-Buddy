export interface Station {
    uuid: string;
    number: string;
    shortname: string;
    longname: string;
    km: number;
    agency: string;
    longitude: number;
    latitude: number;
    water: Water;
    timeseries: Timeseries[];
}

export interface Timeseries {
    shortname: string;
    longname: string;
    unit: string;
    equidistance: number;
    currentMeasurement: CurrentMeasurement;
    gaugeZero: GaugeZero;
    characteristicValues: CharacteristicValue[];
}

export interface CharacteristicValue {
    shortname: string;
    longname: string;
    unit: string;
    value: number;
    validFrom?: string;
    occurrences?: string[];
    timespanStart?: string;
    timespanEnd?: string;
}

export interface GaugeZero {
    unit: string;
    value: number;
    validFrom: string;
}

export interface CurrentMeasurement {
    timestamp: string;
    value: number;
    stateMnwMhw: string;
    stateNswHsw: string;
}

export interface Water {
    shortname: string;
    longname: string;
}